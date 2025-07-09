import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const jobOpenings = [
  {
    title: "Senior IPR Attorney",
    location: "New Delhi, India",
    description: "We are seeking an experienced IPR attorney to join our dynamic team. The ideal candidate will have over 7 years of experience in patent and trademark law.",
  },
  {
    title: "Paralegal",
    location: "Mumbai, India",
    description: "A great opportunity for a detail-oriented paralegal to support our corporate law division. 2+ years of experience required.",
  },
  {
    title: "Legal Intern",
    location: "New Delhi, India",
    description: "We are looking for enthusiastic law students to join our internship program. This is a paid, full-time position for a duration of 3 months.",
  },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Careers</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Join our team of legal experts and help us make a difference.
            </p>
          </div>
          <div className="mt-12 grid gap-8">
            {jobOpenings.map((job) => (
              <Card key={job.title}>
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>{job.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{job.description}</p>
                  <Button className="mt-4">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
