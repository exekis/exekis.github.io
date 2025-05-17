interface Project {
  title: string
  description: string
  tags: string[]
  liveLink: string
  devLink: string
}

const projects: Project[] = [
  {
    title: "Bookit",
    description: "Save all your open tabs into organized bookmark folders with one click. Bookit is a browser extension that allows you to save all your open tabs into organized bookmark folders with one click. It lets you combine folders, archive them, and save open tabs with today's date as the folder name.",
    tags: ["JavaScript", "HTML", "Firefox Addon", "Chrome Extension"],
    liveLink: "https://addons.mozilla.org/en-CA/firefox/addon/bookit/",
    devLink: "https://github.com/exekis/bookit",
  },
  {
    title: "RATTM",
    description: "An Eco-Score Calculator for Cash App: Our Eco-Score Calculator lets users make sustainable choices by quantifying the environmental impact of their daily spending.",
    tags: ["Python", "TypeScript/JavaScript", "Django", "Next.js", "React"],
    liveLink: "https://rattm.vercel.app/",
    devLink: "https://github.com/exekis/rattm",
  },
  {
    title: "Once Upon a Chat",
    description: "Once Upon a Chat is a Next.js web application that analyzes WhatsApp group chat history to present users with a Spotify Wrapped-style summary of key moments and statistics. Users can save favourite moments and share them back to the group.",
    tags: ["Python", "TypeScript/JavaScript", "Firebase", "Next.js", "React"],
    liveLink: "https://devpost.com/software/once-upon-a-chat",
    devLink: "https://github.com/exekis/once-upon-a-chat",
  },
  {
    title: "Sorting Algorithm Visualizer",
    description: "A Java application with Swing GUI that visualizes sorting algorithms for educational purposes. Users can select different sorting algorithms and visualize their performance on random data sets with different customization options.",
    tags: ["Java", "Swing", "Sorting Algorithms"],
    liveLink: "https://github.com/exekis/sorting-algorithms-visualizer",
    devLink: "https://github.com/exekis/sorting-algorithms-visualizer",
  },

]

export default projects;
