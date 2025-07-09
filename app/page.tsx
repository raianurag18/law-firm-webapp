import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="relative h-[80vh] bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-bold">Expert Legal Solutions</h1>
            <p className="mt-4 text-lg">
              Providing comprehensive legal services in Corporate Law and IPR.
            </p>
            <Button className="mt-8">Request a Consultation</Button>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Our Practice Areas</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Intellectual Property</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Protecting your innovations and creative works.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Corporate Law</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Guiding your business through complex legal landscapes.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Litigation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Representing your interests in and out of court.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Why Choose Us?</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                At Lexington Law, we combine deep legal expertise with a
                client-focused approach. Our team is dedicated to delivering
                exceptional results and building long-term partnerships.
              </p>
              <ul className="mt-4 space-y-2">
                <li>✔ Experienced and specialized attorneys</li>
                <li>✔ Proven track record of success</li>
                <li>✔ Personalized legal strategies</li>
              </ul>
            </div>
            <Image
              src="/why-choose-us.jpg"
              alt="Why Choose Us"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">What Our Clients Say</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/avatars/01.png" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">John Doe</p>
                      <p className="text-sm text-gray-500">CEO, TechCorp</p>
                    </div>
                  </div>
                  <p className="mt-4">
                    "Lexington Law provided invaluable guidance on our patent
                    application. Their expertise was crucial to our success."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/avatars/02.png" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Jane Smith</p>
                      <p className="text-sm text-gray-500">
                        Founder, Creative Inc.
                      </p>
                    </div>
                  </div>
                  <p className="mt-4">
                    "Their corporate law team is second to none. Highly
                    recommend for any startup."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold">
              Ready to discuss your legal needs?
            </h2>
            <Button className="mt-8" asChild>
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 text-center text-sm text-white">
        <p>
          As per the rules of the Bar Council of India, we are not permitted to
          solicit work and advertise. The user acknowledges that there has been
          no advertisement, personal communication, solicitation, invitation or
          inducement of any sort whatsoever from us or any of our members to
          solicit any work through this website.
        </p>
      </div>
    </div>
  );
}
