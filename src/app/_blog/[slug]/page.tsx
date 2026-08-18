import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { markdownToHtml } from "@/lib/utils";
import markdownStyles from "../../markdown-styles.module.css";

type Params = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Not found" };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.id }));
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const content = await markdownToHtml(post.content);

  return (
    <article className="article-page">
      <Link className="back-link" href="/blog">
        <span aria-hidden="true">←</span> cd ../writing
      </Link>
      <header className="article-heading">
        <p className="item-meta">essay / {post.tags.join(" · ")}</p>
        <h1>{post.title}</h1>
        <time dateTime={post.date}>{post.date}</time>
      </header>
      <div className={markdownStyles.markdown} dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}
