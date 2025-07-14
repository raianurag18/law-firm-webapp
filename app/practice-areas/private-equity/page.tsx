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

export default function PrivateEquityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold">
              Private Equity
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Strategic legal advice for private equity funds, investors, and portfolio companies.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group flex flex-col">
              <CardHeader>
                <CardTitle>Fund Formation</CardTitle>
                <CardDescription>
                  Structuring and launching private equity funds.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Onshore and offshore structures
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Regulatory compliance
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Investor negotiations
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 text-center">
                <Button asChild variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/request-consultation?practiceArea=${encodeURIComponent("Private Equity")}&serviceType=${encodeURIComponent("Fund Formation")}`}>Request a Consultation</Link>
                </Button>
              </div>
            </Card>
            <Card className="group flex flex-col">
              <CardHeader>
                <CardTitle>Deal Execution</CardTitle>
                <CardDescription>
                  Advising on acquisitions, investments, and exits.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Leveraged buyouts
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Growth equity investments
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Recapitalizations
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 text-center">
                <Button asChild variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/request-consultation?practiceArea=${encodeURIComponent("Private Equity")}&serviceType=${encodeURIComponent("Deal Execution")}`}>Request a Consultation</Link>
                </Button>
              </div>
            </Card>
            <Card className="group flex flex-col">
              <CardHeader>
                <CardTitle>Portfolio Company Advisory</CardTitle>
                <CardDescription>
                  Ongoing legal support for portfolio companies.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Add-on acquisitions
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Management equity plans
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Exit strategies
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 text-center">
                <Button asChild variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/request-consultation?practiceArea=${encodeURIComponent("Private Equity")}&serviceType=${encodeURIComponent("Portfolio Company Advisory")}`}>Request a Consultation</Link>
                </Button>
              </div>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold">
              Expertise in Private Equity?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Our team provides sophisticated legal solutions for the private equity sector.
            </p>
            <Link href="/request-consultation">
              <Button className="mt-8">Contact Our PE Team</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
