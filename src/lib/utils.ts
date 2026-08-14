import { remark } from "remark";
import html from "remark-html";
import remarkParse from "remark-parse";

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(remarkParse).use(html).process(markdown);
  return result.toString();
}
