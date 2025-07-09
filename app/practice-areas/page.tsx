import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const practiceAreas = [
  {
    title: "Intellectual Property Rights",
    description: "Comprehensive services for patents, trademarks, and copyrights.",
    href: "/practice-areas/ipr",
  },
  {
    title: "Corporate and Commercial Law",
    description: "Expert advice on mergers, acquisitions, and corporate governance.",
    href: "/practice-areas/corporate-law",
  },
  {
    title: "Real Estate Law",
    description: "Handling all aspects of property transactions and disputes.",
    href: "/practice-areas/real-estate",
  },
  {
    title: "Litigation and Dispute Resolution",
    description: "Representing clients in civil and commercial litigation.",
    href: "/practice-areas/litigation",
  },
  {
    title: "Labour and Employment Law",
    description: "Advising on employment contracts, compliance, and disputes.",
    href: "/practice-areas/labour-law",
  },
  {
    title: "Taxation",
    description: "Strategic tax planning and compliance services.",
    href: "/practice-areas/taxation",
  },
];

export default function PracticeAreasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Our Practice Areas</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            We offer a wide range of legal services to meet the diverse needs
            of our clients.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <Link href={area.href} key={area.title} legacyBehavior>
                <Card className="h-full transform transition-transform hover:scale-105">
                  <CardHeader>
                    <CardTitle>{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{area.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
