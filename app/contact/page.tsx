"use client";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";
import { handleContactFormSubmit } from "../actions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import { useEffect, useState } from "react";

interface FormState {
  message: string;
  errors?: {
    name?: string;
    email?: string;
    message?: string;
  };
}

const initialState: FormState = {
  message: "",
  errors: undefined,
};

export default function ContactPage() {
  const [state, formAction] = useActionState(handleContactFormSubmit, initialState);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state.message === 'success') {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto">
          {showSuccess && (
            <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg flex items-center">
              <p>Message sent successfully!</p>
              <button onClick={() => setShowSuccess(false)} className="ml-4 text-white">
                &times;
              </button>
            </div>
          )}
          <div className="text-center">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              We'd love to hear from you. Reach out to us with any questions
              or to schedule a consultation.
            </p>
          </div>

          <div className="mt-12 grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              <form action={formAction} className="mt-8 space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" />
                  {state.errors?.name && <p className="text-red-500 text-sm mt-1">{state.errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="Your Email" />
                  {state.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" placeholder="Your Phone Number" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your Message" />
                  {state.errors?.message && <p className="text-red-500 text-sm mt-1">{state.errors.message}</p>}
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Our Office</h2>
              <div className="mt-8">
                <p>
                  <strong>Address:</strong> 2, 7, Sarat Bose Rd, Minto Park, Sreepally
                  , Kolkata , West Bengal 700020.
                </p>
                <p>
                  <strong>Phone:</strong> +91 9918302822
                </p>
                <p>
                  <strong>Email:</strong> arsandagc_limited@gmail.com
                </p>
              </div>
              <div className="mt-8 h-64 w-full rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.932466613964!2d88.3542736!3d22.5396431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02773aaccf57b5%3A0x1ff3f18ffe54cc4d!2sARS%20Management%20Consultancy%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1722101933461!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
