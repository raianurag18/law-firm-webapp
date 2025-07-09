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

export default function IPRPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold">
              Intellectual Property Rights (IPR)
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Safeguarding your most valuable assets: your ideas and
              innovations.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Patents</CardTitle>
                <CardDescription>
                  Protect your inventions from unauthorized use.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Patent drafting and filing
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Patent prosecution and litigation
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Freedom-to-operate analysis
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Trademarks</CardTitle>
                <CardDescription>
                  Secure your brand identity and reputation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Trademark registration and renewal
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Opposition and infringement proceedings
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Brand portfolio management
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold">
              Have an IPR-related query?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Our experts are here to help. Schedule a free consultation to
              discuss your needs.
            </p>
            <Button className="mt-8">Contact Our IPR Team</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
