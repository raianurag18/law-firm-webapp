import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Image from "next/image";

// This is a mock function. In a real application, you would fetch this data from a CMS.
const getPostData = (slug: string) => {
  const posts = [
    {
      title: "The Importance of Patent Protection for Startups",
      date: "June 25, 2024",
      image: "/blog/post1.jpg",
      slug: "patent-protection-for-startups",
      content: `
        <p>For any startup, intellectual property (IP) is a critical asset. Among the various forms of IP, patents hold a special significance, especially for technology-driven companies. A patent grants the inventor the exclusive right to prevent others from making, using, selling, or importing their invention for a limited period. This exclusivity can be a game-changer for a young company trying to establish itself in a competitive market.</p>
        <h3 class="font-bold text-xl my-4">Securing a Competitive Edge</h3>
        <p>One of the primary benefits of patent protection is the competitive advantage it provides. By securing a patent, a startup can carve out a niche for its innovative products or services without the fear of immediate imitation by larger, more established competitors. This allows the company to grow its market share and build a strong brand reputation.</p>
        <h3 class="font-bold text-xl my-4">Attracting Investment</h3>
        <p>Investors are more likely to fund startups that have a robust IP portfolio. Patents serve as tangible proof of a company's innovation and long-term potential. They demonstrate that the startup has a defensible technology, which can lead to a higher valuation and more favorable investment terms.</p>
      `,
    },
  ];
  return posts.find((p) => p.slug === slug);
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 py-16 text-center">
          <h1 className="text-4xl font-bold">Post not found</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto">
          <article className="prose lg:prose-xl mx-auto">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p className="text-sm text-gray-500">{post.date}</p>
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="my-8 w-full rounded-lg object-cover"
            />
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
