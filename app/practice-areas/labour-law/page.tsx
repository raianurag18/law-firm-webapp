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

export default function LabourLawPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold">
              Labour and Employment Law
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Protecting rights and ensuring compliance in the workplace.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group flex flex-col">
              <CardHeader>
                <CardTitle>Employment Contracts</CardTitle>
                <CardDescription>
                  Drafting and reviewing employment agreements.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Executive compensation
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Non-compete clauses
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Severance agreements
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 text-center">
                <Button asChild variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/request-consultation?practiceArea=${encodeURIComponent("Labour and Employment Law")}&serviceType=${encodeURIComponent("Employment Contracts")}`}>Request a Consultation</Link>
                </Button>
              </div>
            </Card>
            <Card className="group flex flex-col">
              <CardHeader>
                <CardTitle>Workplace Disputes</CardTitle>
                <CardDescription>
                  Resolving conflicts and representing your interests.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Wrongful termination
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Discrimination and harassment
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Wage and hour disputes
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 text-center">
                <Button asChild variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/request-consultation?practiceArea=${encodeURIComponent("Labour and Employment Law")}&serviceType=${encodeURIComponent("Workplace Disputes")}`}>Request a Consultation</Link>
                </Button>
              </div>
            </Card>
            <Card className="group flex flex-col">
              <CardHeader>
                <CardTitle>Compliance & Training</CardTitle>
                <CardDescription>
                  Helping businesses stay compliant with labour laws.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Policy and handbook development
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Anti-harassment training
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Workplace investigations
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0 text-center">
                <Button asChild variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/request-consultation?practiceArea=${encodeURIComponent("Labour and Employment Law")}&serviceType=${encodeURIComponent("Compliance & Training")}`}>Request a Consultation</Link>
                </Button>
              </div>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold">
              Facing a Workplace Issue?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Our employment law specialists are here to help you navigate the complexities.
            </p>
            <Link href="/request-consultation">
              <Button className="mt-8">Get Legal Assistance</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
