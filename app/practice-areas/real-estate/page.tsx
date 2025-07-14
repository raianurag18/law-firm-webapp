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

export default function RealEstateLawPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold">
              Real Estate Law
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Comprehensive legal services for all your property needs.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group flex flex-col">
              <CardHeader>
                <CardTitle>Property Transactions</CardTitle>
                <CardDescription>
                  Seamless handling of buying, selling, and leasing.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Residential and commercial
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Title searches and insurance
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Mortgage agreements
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 text-center">
                <Button asChild variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/request-consultation?practiceArea=${encodeURIComponent("Real Estate Law")}&serviceType=${encodeURIComponent("Property Transactions")}`}>Request a Consultation</Link>
                </Button>
              </div>
            </Card>
            <Card className="group flex flex-col">
              <CardHeader>
                <CardTitle>Landlord-Tenant Disputes</CardTitle>
                <CardDescription>
                  Fair representation for landlords and tenants.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Lease violations
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Eviction proceedings
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Security deposit disputes
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 text-center">
                <Button asChild variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/request-consultation?practiceArea=${encodeURIComponent("Real Estate Law")}&serviceType=${encodeURIComponent("Landlord-Tenant Disputes")}`}>Request a Consultation</Link>
                </Button>
              </div>
            </Card>
            <Card className="group flex flex-col">
              <CardHeader>
                <CardTitle>Zoning & Land Use</CardTitle>
                <CardDescription>
                  Navigating regulations for property development.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Permit applications
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Variances and special exceptions
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Environmental compliance
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 text-center">
                <Button asChild variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/request-consultation?practiceArea=${encodeURIComponent("Real Estate Law")}&serviceType=${encodeURIComponent("Zoning & Land Use")}`}>Request a Consultation</Link>
                </Button>
              </div>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold">
              Questions About Real Estate Law?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Our real estate attorneys are here to provide clarity and guidance.
            </p>
            <Link href="/request-consultation">
              <Button className="mt-8">Schedule a Consultation</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
