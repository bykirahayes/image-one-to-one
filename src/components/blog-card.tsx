import type { blogPosts } from "@/lib/site-data";

export function BlogCard({ post }: { post: (typeof blogPosts)[number] }) {
  return (
    <article className="group overflow-hidden rounded-lg bg-background shadow-sm ring-1 ring-border">
      <div className="relative overflow-hidden">
        <img src={post.image} alt="" loading="lazy" width={1024} height={640} className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded bg-background px-2 py-1 text-xs font-bold text-navy">{post.date}</span>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-navy group-hover:text-primary">{post.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
      </div>
    </article>
  );
}
