import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site-chrome";
import { BlogCard } from "@/components/blog-card";
import { blogPosts } from "@/lib/site-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Aspect IT Limited" },
      { name: "description", content: "The latest tech news, tips and updates from Aspect IT." },
      { property: "og:title", content: "Blog | Aspect IT Limited" },
      { property: "og:description", content: "Tech news and tips for small businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHero eyebrow="BLOG" title={<>Read our latest <span className="text-primary">blog posts</span></>} />
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {blogPosts.map((p) => <BlogCard key={p.slug} post={p} />)}
      </div>
    </>
  );
}
