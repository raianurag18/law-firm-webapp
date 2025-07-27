import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Avinash Raj",
    role: "Managing Partner",
    bio: "Seasoned expert in corporate law with over 6 years of experience.",
    avatar: "/avatars/03.png",
    fallback: "JL",
  },
  {
    name: "Aditya Gupta",
    role: "Head of IPR",
    bio: "Specialized in patent law and has a strong track record in high-stakes litigation.",
    avatar: "/avatars/04.png",
    fallback: "SR",
  },
  {
    name: "Rajiv Singh",
    role: "Senior Associate",
    bio: "Experienced in real estate law, guiding clients through complex transactions.",
    avatar: "/avatars/05.png",
    fallback: "DC",
  },
  {
    name: "Aman Sinha",
    role: "Associate",
    bio: "Expertisse in commercial litigation, known for her sharp analytical skills.",
    avatar: "/avatars/06.png",
    fallback: "MG",
  },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Meet Our Team</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            A dedicated group of legal professionals committed to your success.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <CardHeader>
                  <Avatar className="mx-auto h-24 w-24">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.fallback}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="mt-4">{member.name}</CardTitle>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{member.bio}</p>
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
