export interface BlogPost {
  title: string;
  summary: string;
  tags: string[];
  image: string; // URL or path to thumbnail, empty = placeholder
  url: string;
  date: string; // e.g. "2025-05-01"
}

const blogs: BlogPost[] = [
  {
    title: "I Have the Degree and the Experience — Here's Why I'm Starting Over",
    summary: "A candid reflection on pivoting into offensive security, unlearning old habits, and building a career with intentionality.",
    tags: ["Career", "Cybersecurity", "Personal Growth"],
    image: "",
    url: "https://medium.com/@murugan.prathmesh/i-have-the-degree-and-the-experience-heres-why-i-m-starting-over-09ca8adf4904",
    date: "2025-04-15",
  },
  {
    title: "TryHackMe Pre-Security Path — Notes I Wish I Had on Day One",
    summary: "Comprehensive notes and takeaways from the TryHackMe Pre-Security learning path for aspiring cybersecurity professionals.",
    tags: ["TryHackMe", "Learning", "Pre-Security"],
    image: "",
    url: "https://medium.com/@murugan.prathmesh/tryhackme-pre-security-path-notes-i-wish-i-had-on-day-one-654a20458de0",
    date: "2025-05-01",
  },
  // Add new blog posts here:
  // {
  //   title: "Your New Article Title",
  //   summary: "Short summary of the article",
  //   tags: ["Tag1", "Tag2"],
  //   image: "/images/blog/your-thumbnail.jpg",
  //   url: "https://medium.com/@murugan.prathmesh/your-article-slug",
  //   date: "2025-06-01",
  // },
];

export default blogs;
