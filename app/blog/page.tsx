import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const blogPosts = [
  {
    title: "The Importance of Patent Protection for Startups",
    date: "June 25, 2024",
    excerpt: "A deep dive into why startups should prioritize patent strategy from day one.",
    image: "/blog/post1.jpg",
    slug: "patent-protection-for-startups",
  },
  {
    title: "Navigating Corporate Governance in a Post-Pandemic World",
    date: "June 18, 2024",
    excerpt: "Key considerations for boards and executives in the new business landscape.",
    image: "/blog/post2.jpg",
    slug: "corporate-governance-post-pandemic",
  },
  {
    title: "Understanding Real Estate Due Diligence",
    date: "June 10, 2024",
    excerpt: "A step-by-step guide to conducting thorough due diligence in property transactions.",
    image: "/blog/post3.jpg",
    slug: "real-estate-due-diligence",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Legal Insights</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Stay informed with our latest articles and case studies.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card
                key={post.slug}
                className="overflow-hidden transform transition-transform hover:scale-105"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full object-cover"
                />
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{post.date}</p>
                  <p className="mt-2">{post.excerpt}</p>
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
