import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

export default function GovernmentAdvisoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold">
              Government Advisory | Projects & Infrastructure
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Partnering with public sector entities to build a better future.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group flex flex-col">
              <CardHeader>
                <CardTitle>Public-Private Partnerships (PPPs)</CardTitle>
                <CardDescription>
                  Structuring and negotiating complex PPP agreements.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Project finance
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Concession agreements
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Risk allocation
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 text-center">
                <Button asChild variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/request-consultation?practiceArea=${encodeURIComponent("Government Advisory | Projects & Infrastructure")}&serviceType=${encodeURIComponent("Public-Private Partnerships (PPPs)")}`}>Request a Consultation</Link>
                </Button>
              </div>
            </Card>
            <Card className="group flex flex-col">
              <CardHeader>
                <CardTitle>Infrastructure Development</CardTitle>
                <CardDescription>
                  Legal support for large-scale infrastructure projects.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Energy and utilities
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Transportation
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Telecommunications
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 text-center">
                <Button asChild variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/request-consultation?practiceArea=${encodeURIComponent("Government Advisory | Projects & Infrastructure")}&serviceType=${encodeURIComponent("Infrastructure Development")}`}>Request a Consultation</Link>
                </Button>
              </div>
            </Card>
            <Card className="group flex flex-col">
              <CardHeader>
                <CardTitle>Regulatory & Policy Advisory</CardTitle>
                <CardDescription>
                  Advising on the development of laws and regulations.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Legislative drafting
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Public procurement
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Government contracts
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 text-center">
                <Button asChild variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/request-consultation?practiceArea=${encodeURIComponent("Government Advisory | Projects & Infrastructure")}&serviceType=${encodeURIComponent("Regulatory & Policy Advisory")}`}>Request a Consultation</Link>
                </Button>
              </div>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold">
              Public Sector Legal Needs?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Our government advisory team has the experience to guide you.
            </p>
            <Link href="/request-consultation">
              <Button className="mt-8">Contact Our Advisory Team</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
