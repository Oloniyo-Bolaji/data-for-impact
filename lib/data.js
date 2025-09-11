import {
  Blocks,
  BookA,
  ChartNoAxesColumn,
  ChartSpline,
  History,
  MemoryStick,
} from "lucide-react";

export const quickLinks = [
  { href: "/about/#about", label: "About" },
  { href: "/expertise/#services", label: "Services" },
  { href: "/expertise/#faqs", label: "Faqs" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export const faqs = [
  {
    id: 1,
    question: "Do you offer training programs",
    answer:
      "Yes, we run bootcamps, workshops, and fellowships covering data science, AI, public health, and monitoring & evaluation",
  },
  {
    id: 2,
    question: "What is Data for Impact Bootcamp",
    answer:
      "The Data for Impact Bootcamp is a 4-weekend intensive program designed to empower young women with critical tech skills that can be immediately applied to secure gigs, internships and remote jobs with organizations in development, business, research and advocacy",
  },
  {
    id: 3,
    question: "When does the next cohort for the bootcamp start",
    answer:
      "Our cohorts usually run on a scheduled basis throughout the year. The exact start date for the next cohort will be announced on our website",
  },
  {
    id: 4,
    question: "Do you create custom visualizations",
    answer:
      "Yes, we design interactive dashboards, reports, and advocacy tools that translate complex data into compelling stories",
  },
  {
    id: 5,
    question: "Have you worked on global health projects",
    answer:
      "Yes, our team has contributed to Gates Foundation–funded measles modeling projects in Nigeria",
  },
  {
    id: 6,
    question: "Do you publish research",
    answer:
      "We support peer-reviewed publications and applied research projects, ensuring evidence translates into real-world impact",
  },
  {
    id: 7,
    question: "How much are your services",
    answer: "Free consultation, based on request",
  },
  {
    id: 8,
    question: "Is the bootcamp paid or free",
    answer: " Yes, absolutely free",
  },
];

export const metrics = [
  {
    metric: "6",
    title: "Mentors",
    plus: false,
  },
  {
    metric: "20+",
    title: "Mentees",
    plus: true,
  },
  {
    metric: "3",
    title: "Patners and Sponsors",
    plus: false,
  },
  {
    metric: "16+",
    title: "Graduates",
    plus: true,
  },
];

export const coreServices = [
  {
    icons: <MemoryStick />,
    color: "red",
    service: "Capacity Building",
    description:
      "Training and mentoring individuals and organizations to use data, AI and digital tools effectively through bootcamps, workshops and fellowship programs.",
  },
  {
    icons: <Blocks />,
    color: "orange",
    service: "Monitoring, Evaluation & Learning (MEL)",
    description:
      "Designing and strengthening MEL systems that enable evidence-based decision and real-time learning.",
  },
  {
    icons: <ChartSpline />,
    color: "green",
    service: "Data Science, AI & Innovation",
    description:
      "Applying modern analytics, predictive models, and AI solutions to solve health and development challenges.",
  },
  {
    icons: <ChartNoAxesColumn />,
    color: "blue",
    service: "Advanced Analytics & Modelling",
    description:
      "Using simulations, forecasting and geospatial analysis to improve planning, optimize resources, and inform policies.",
  },
  {
    icons: <History />,
    color: "violet",
    service: "Data Storytelling & Strategic Communication",
    description:
      "Transforming complex data into clear, compelling stories that drive advocacy, policy and funding decisions.",
  },
  {
    icons: <BookA />,
    color: "brown",
    service: "Research, Policy & Advocacy Support",
    description:
      "Bridging insights and action through connecting evidence to action through applied research and policy influence.",
  },
];
