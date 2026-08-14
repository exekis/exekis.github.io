import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "@/content/blogposts";

const postsDirectory = path.join(process.cwd(), "src/content/_posts");
const safeSlug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((entry) => entry.endsWith(".md"));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const realSlug = slug.replace(/\.md$/, "");

  if (!safeSlug.test(realSlug)) {
    return null;
  }

  const fullPath = path.join(postsDirectory, `${realSlug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return { ...data, content } as BlogPost;
  } catch {
    return null;
  }
}

export function getAllPosts(): BlogPost[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((first, second) => (first.date > second.date ? -1 : 1));
}
