"use server";

import clientPromise from "@/lib/mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function handleFormSubmit(formData: FormData) {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    practiceArea: formData.get("practice-area"),
    serviceType: formData.get("service-type"),
    isExistingClient: formData.get("is-existing-client"),
    communicationMode: formData.get("communication-mode"),
    message: formData.get("message"),
    status: "New", // Default status for new requests
    submittedAt: new Date(),
  };

  try {
    const client = await clientPromise;
    const db = client.db("law-firm-webapp");
    await db.collection("requests").insertOne(rawFormData);
    console.log("Request submitted successfully");
  } catch (error) {
    console.error("Error submitting request:", error);
  }
}

export async function getRequestById(id: string) {
  try {
    const client = await clientPromise;
    const db = client.db("law-firm-webapp");
    const { ObjectId } = await import('mongodb');
    const request = await db.collection("requests").findOne({ _id: new ObjectId(id) });
    return JSON.parse(JSON.stringify(request));
  } catch (error) {
    console.error("Error fetching request:", error);
    return null;
  }
}

export async function updateRequestStatus(id: string, status: 'accepted' | 'pending' | 'cancelled') {
  const client = await clientPromise;
  const db = client.db("law-firm-webapp");
  const { ObjectId } = await import('mongodb');
  const requestsCollection = db.collection("requests");

  try {
    if (status === 'accepted') {
      const request = await requestsCollection.findOne({ _id: new ObjectId(id) });
      if (request) {
        const newCase = {
          client: request.name,
          caseType: request.practiceArea,
          status: 'In Progress',
          // Carry over any other relevant fields from the request
          email: request.email,
          phone: request.phone,
          message: request.message,
          submittedAt: request.submittedAt,
        };

        await db.collection("cases").insertOne(newCase);
        await requestsCollection.deleteOne({ _id: new ObjectId(id) });
        console.log(`Request ${id} accepted and moved to cases.`);
      }
    } else {
      await requestsCollection.updateOne({ _id: new ObjectId(id) }, { $set: { status } });
      console.log(`Request ${id} status updated to ${status}`);
    }

    revalidatePath("/admin/requests");
    revalidatePath("/admin/cases");
  } catch (error) {
    console.error("Error updating request status:", error);
  }

  redirect('/admin/requests');
}

export async function handleContactFormSubmit(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const errors: { name?: string; email?: string; message?: string } = {};

  if (!name) {
    errors.name = "Name is required.";
  }
  if (!email) {
    errors.email = "Email is required.";
  }
  if (!message) {
    errors.message = "Message is required.";
  }

  if (Object.keys(errors).length > 0) {
    return { message: 'error', errors };
  }

  const rawFormData = {
    name,
    email,
    phone: formData.get("phone"),
    message,
    submittedAt: new Date(),
  };

  try {
    const client = await clientPromise;
    const db = client.db("law-firm-webapp");
    await db.collection("contact_requests").insertOne(rawFormData);
    console.log("Contact request submitted successfully");
    return { message: 'success', errors: undefined };
  } catch (error) {
    console.error("Error submitting contact request:", error);
    return { message: 'error', errors: undefined };
  }
}
