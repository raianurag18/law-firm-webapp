"use server";

import clientPromise from "@/lib/mongodb";

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
