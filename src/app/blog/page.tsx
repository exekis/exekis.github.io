import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/api";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on systems, programming languages, and the machinery beneath software.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="route-page">
      <header className="route-heading">
        <p className="prompt-line">kiarash@toronto:~/writing$ ls -lt</p>
        <h1>Writing</h1>
        <p>Occasional notes on systems, languages, and the assumptions hidden under abstractions.</p>
      </header>

      <div className="post-list">
        {posts.map((post) => (
          <article className="post-row" key={post.id}>
            <time dateTime={post.date}>{post.date}</time>
            <div>
              <h2>
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
              <p>{post.description}</p>
              <ul className="stack-list" aria-label={`${post.title} tags`}>
                {post.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <Link className="row-arrow" href={`/blog/${post.id}`} aria-label={`Read ${post.title}`}>
              →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
