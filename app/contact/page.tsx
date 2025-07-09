import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto">
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
              <form className="mt-8 space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="Your Phone Number" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your Message" />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Our Office</h2>
              <div className="mt-8">
                <p>
                  <strong>Address:</strong> 123 Legal Avenue, Suite 456,
                  New Delhi, India
                </p>
                <p>
                  <strong>Phone:</strong> +91 11 1234 5678
                </p>
                <p>
                  <strong>Email:</strong> contact@lexingtonlaw.com
                </p>
              </div>
              <div className="mt-8 h-64 w-full rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.076378922311!2d77.2167213150829!3d28.62749858241826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b7a58a8d%3A0x43d1f4b3a0b1b1b!2sLexington%20Law%20Group!5e0!3m2!1sen!2sin!4v1678886472845!5m2!1sen!2sin"
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
