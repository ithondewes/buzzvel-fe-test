export type NavLink = {
  href: string;
  label: string;
};

export type SkillTrack = {
  number: string;
  title: string;
  description: string;
};

export type Step = {
  number: string;
  title: string;
  description: string;
  swatch: string;
  dot: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export const navLinks: NavLink[] = [
  { href: "#courses", label: "Courses" },
  { href: "#contact", label: "For Teams" },
  { href: "#people", label: "Community" },
  { href: "#about", label: "About" },
];

export const skillTracks: SkillTrack[] = [
  {
    number: "01",
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
  },
  {
    number: "02",
    title: "Technology",
    description: "Build a stronger understanding of the tools shaping digital products.",
  },
  {
    number: "03",
    title: "Business",
    description: "Develop practical skills for better decisions and stronger teams.",
  },
  {
    number: "04",
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
  },
];

export const steps: Step[] = [
  {
    number: "01",
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
    swatch: "bg-blue/15",
    dot: "bg-blue",
  },
  {
    number: "02",
    title: "Learn from experience",
    description: "Follow concise lessons created by professionals who use these skills.",
    swatch: "bg-[#F8C7B4]",
    dot: "bg-[#E36A45]",
  },
  {
    number: "03",
    title: "Put it into practice",
    description: "Every course includes practical exercises designed to turn knowledge into action.",
    swatch: "bg-[#F6E7A8]",
    dot: "bg-[#E2C04A]",
  },
];

export const stats: Stat[] = [
  { value: "24K+", label: "active learners" },
  { value: "120+", label: "expert-led courses" },
  { value: "92%", label: "complete their first course" },
];

export const courseFacts = ["8 lessons", "2h 40min", "Intermediate"];

export const footerColumns: FooterColumn[] = [
  {
    title: "Explore",
    links: [
      { href: "#courses", label: "Courses" },
      { href: "#courses", label: "Categories" },
      { href: "#people", label: "Instructors" },
      { href: "#contact", label: "For Teams" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#about", label: "About" },
      { href: "#contact", label: "Careers" },
      { href: "#about", label: "Journal" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "#contact", label: "Help Center" },
      { href: "#contact", label: "Contact" },
      { href: "#about", label: "Terms" },
      { href: "#about", label: "Privacy" },
    ],
  },
];
