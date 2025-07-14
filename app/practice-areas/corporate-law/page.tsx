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

export default function CorporateLawPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold">
              Corporate and Commercial Law
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Expert legal guidance for every stage of your business lifecycle.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group flex flex-col">
              <CardHeader>
                <CardTitle>Mergers & Acquisitions</CardTitle>
                <CardDescription>
                  Navigate complex transactions with confidence.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Due diligence
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Negotiation and drafting
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Regulatory compliance
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 text-center">
                <Button asChild variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/request-consultation?practiceArea=${encodeURIComponent("Corporate and Commercial Law")}&serviceType=${encodeURIComponent("Mergers & Acquisitions")}`}>Request a Consultation</Link>
                </Button>
              </div>
            </Card>
            <Card className="group flex flex-col">
              <CardHeader>
                <CardTitle>Corporate Governance</CardTitle>
                <CardDescription>
                  Ensuring compliance and best practices.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Board advisory
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Shareholder agreements
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Policy formulation
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 text-center">
                <Button asChild variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/request-consultation?practiceArea=${encodeURIComponent("Corporate and Commercial Law")}&serviceType=${encodeURIComponent("Corporate Governance")}`}>Request a Consultation</Link>
                </Button>
              </div>
            </Card>
            <Card className="group flex flex-col">
              <CardHeader>
                <CardTitle>Commercial Contracts</CardTitle>
                <CardDescription>
                  Drafting and negotiating robust agreements.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Supply and distribution
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Franchising and licensing
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Joint ventures
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 text-center">
                <Button asChild variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/request-consultation?practiceArea=${encodeURIComponent("Corporate and Commercial Law")}&serviceType=${encodeURIComponent("Commercial Contracts")}`}>Request a Consultation</Link>
                </Button>
              </div>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold">
              Need Corporate Legal Advice?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Our corporate law team is ready to assist you. Let's discuss your business needs.
            </p>
            <Link href="/request-consultation">
              <Button className="mt-8">Request a Consultation</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
