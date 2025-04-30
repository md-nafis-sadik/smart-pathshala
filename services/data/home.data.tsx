import colors from "@/lib/colors";
import { images } from "@/services";
import {
  BehanceIcon,
  DribbleIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinOutlinedIcon,
  TelegramOutlinedIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/services/assets/svgs";





export const faqData = [
  {
    question: "What services does Netro Creative offer?",
    answer:
      "Netro Creative offers a wide range of services including custom software development, mobile app development, web application development, enterprise software solutions, software consulting, and ongoing maintenance and support.",
  },
  {
    question: "What industries does Netro Creative specialize in?",
    answer:
      "Netro Creative specializes in a wide range of industries, including finance, healthcare, e-commerce, education, and more. We tailor our services to meet the unique needs of each industry.",
  },
  {
    question:
      "How does Netro Creative ensure the quality of its software products?",
    answer:
      "You can reach out to Netro Creative by email at 0o9oX@example.com or by filling out the contact form on our website. We look forward to hearing from you and discussing your project needs.",
  },
  {
    question: "What is Netro Creative's development process?",
    answer:
      "You can reach out to Netro Creative by email at 0o9oX@example.com or by filling out the contact form on our website. We look forward to hearing from you and discussing your project needs.",
  },
  {
    question: "How does Netro Creative handle data security and privacy?",
    answer:
      "You can reach out to Netro Creative by email at 0o9oX@example.com or by filling out the contact form on our website. We look forward to hearing from you and discussing your project needs.",
  },
  {
    question: "Does Netro Creative provide ongoing support and maintenance?",
    answer:
      "You can reach out to Netro Creative by email at 0o9oX@example.com or by filling out the contact form on our website. We look forward to hearing from you and discussing your project needs.",
  },
  {
    question: "What are Netro Creative's pricing models?",
    answer:
      "You can reach out to Netro Creative by email at 0o9oX@example.com or by filling out the contact form on our website. We look forward to hearing from you and discussing your project needs.",
  },
  {
    question: "How can I get started with Netro Creative?",
    answer:
      "You can reach out to Netro Creative by email at 0o9oX@example.com or by filling out the contact form on our website. We look forward to hearing from you and discussing your project needs.",
  },
];



export const pricingData = [
  {
    title: "UI/UX Design",
    subtitle: "For personal or Industrial",
    price: 29,
    period: "per hour",
    popular: false,
    features: [
      "Ensured proper UX",
      "Followed guide or create",
      "Modern softwares",
      "Scalable and ready to develop",
      "Collaborative",
    ],
  },
  {
    title: "Development",
    subtitle: "For personal or Industrial",
    price: 49,
    period: "per hour",
    popular: true,
    features: [
      "Frontend Development",
      "Backend Development",
      "Database, Server Setup",
      "DevOps and Deploy",
      "Bug Fixing",
      "After sales service",
    ],
  },
  {
    title: "Branding",
    subtitle: "For personal or Industrial",
    price: 19,
    period: "per hour",
    popular: false,
    features: [
      "Logo from scratch",
      "Brand Guideline",
      "Animation and Graphical assets",
      "3D Animation",
      "Brand Assets preparation",
    ],
  },
];

export const footerData = {
  inquiries: {
    title: "INQUIRIES",
    address:
      "290/737 York House Green Lane West, Garstang, Preston, Lancashire, England, PR3 1NJ",
    phone: "+880-990-0000",
    email: "hello@smartpathashala.com",
    description: "A Powerful School & College Management System Designed to Streamline Administration, Enhance Learning, and Connect Everyone Seamlessly."
  },
  companyInfo: {
    title: "Important Links",
    links: [
      { text: "Registration", href: "/about-us" },
      { text: "Goals", href: "/careers" },
      { text: "Features", href: "/process" },
      { text: "Benefits", href: "/reviews" },
      { text: "Pricing", href: "/portfolio" },
      { text: "Blogs", href: "/case-studies" },
    ],
  },
  services: {
    title: "Other Links",
    links: [
      { text: "UI/UX Design", href: "/services/ui-ux-design" },
      { text: "Branding & Identity", href: "/services/branding" },
      { text: "Web Development", href: "/services/web-development" },
      { text: "Mobile App Development", href: "/services/mobile-development" },
      { text: "SaaS Development", href: "/services/saas-development" },
      { text: "MVP Development", href: "/services/mvp-development" },
      { text: "3D Animation", href: "/services/3d-animation" },
    ],
  },
  support: {
    title: "Other Links",
    links: [
      { text: "Contact Us", href: "/help" },
      { text: "Privacy Policy", href: "/privacy-policy" },
      { text: "Terms of Service", href: "/terms-of-service" },
      
    ],
  },
  resources: {
    title: "RESOURCES",
    links: [
      { text: "Our Journal", href: "/journal" },
      { text: "Whitepapers & E-books", href: "/resources/whitepapers" },
      { text: "Tools & Templates", href: "/resources/tools" },
      { text: "Webinars / Workshops", href: "/resources/webinars" },
      { text: "FAQs", href: "/faqs" },
    ],
  },
  copyright: "© 2022 - 2025 • Netro Systems, All Rights Reserved.",
  socialLinks: [
    {
      platform: "twitter",
      href: "#",
      icon: (
        <TwitterIcon color={colors.black} className="h-5 w-5 md:h-6 md:w-6" />
      ),
    },
    {
      platform: "linkedin",
      href: "#",
      icon: (
        <LinkedinOutlinedIcon
          color={colors.black}
          className="h-5 w-5 md:h-6 md:w-6"
        />
      ),
    },
    {
      platform: "instagram",
      href: "#",
      icon: (
        <InstagramIcon color={colors.black} className="h-5 w-5 md:h-6 md:w-6" />
      ),
    },
    {
      platform: "youtube",
      href: "#",
      icon: (
        <YoutubeIcon color={colors.black} className="h-5 w-5 md:h-6 md:w-6" />
      ),
    },
    {
      platform: "facebook",
      href: "#",
      icon: (
        <FacebookIcon color={colors.black} className="h-5 w-5 md:h-6 md:w-6" />
      ),
    },
    {
      platform: "telegram",
      href: "#",
      icon: (
        <TelegramOutlinedIcon
          color={colors.black}
          className="h-5 w-5 md:h-6 md:w-6"
        />
      ),
    },
    {
      platform: "dribbble",
      href: "#",
      icon: (
        <DribbleIcon color={colors.black} className="h-5 w-5 md:h-6 md:w-6" />
      ),
    },
    {
      platform: "behance",
      href: "#",
      icon: (
        <BehanceIcon color={colors.black} className="h-5 w-5 md:h-6 md:w-6" />
      ),
    },
    {
      platform: "github",
      href: "#",
      icon: (
        <GithubIcon color={colors.black} className="h-5 w-5 md:h-6 md:w-6" />
      ),
    },
  ],
  actions: [{ text: "Go To Top", href: "#top" }],
};
