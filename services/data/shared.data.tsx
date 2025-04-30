import { images } from "../assets";
import {
  LinkedinOutlinedIcon,
  TelegramOutlinedIcon,
  WhatsappOutlinedIcon,
} from "../assets/svgs";

export const routes = {
  homepage: {
    name: "Home",
    link: "/",
    activeRoute: "/",
  },
  about: {
    name: "About us",
    link: "/about",
    activeRoute: "/about",
  },
  services: {
    name: "Services",
    link: "/services",
    activeRoute: "/services",
  },
  pricing: {
    name: "Pricing",
    link: "/pricing",
    activeRoute: "/pricing",
  },
  contact: {
    name: "Contact us",
    link: "/contact-us",
    activeRoute: "/contact-us",
  },

};

export const navbarData = [
  {
    name: routes.homepage.name,
    link: routes.homepage.link,
  },
  {
    name: routes.about.name,
    link: routes.about.link,
  },
  {
    name: routes.services.name,
    link: routes.services.link,
    megaMenu: false,
  },
  {
    name: routes.pricing.name,
    link: routes.pricing.link,
    megaMenu: false,
  },
  {
    name: routes.contact.name,
    link: routes.contact.link,
  },

];

export const successStoryData = [
  {
    type: "Experience",
    value: "5",
    ext: "YRS",
    color: "#91FF76",
  },
  {
    type: "Raised",
    value: "70",
    ext: "M",
    color: "#FFF146",
  },
  {
    type: "Happy Clients",
    value: "84",
    ext: "+",
    color: "#91FF76",
  },
  {
    type: "Projects",
    value: "153",
    ext: "+",
    color: "#FFF146",
  },
];

export const socialsData = [
  {
    icon: (
      <WhatsappOutlinedIcon className="!w-5 md:!w-6 !h-5 md:!h-6 !shrink-0" />
    ),
    link: "",
  },
  {
    icon: (
      <TelegramOutlinedIcon className="!w-5 md:!w-6 !h-5 md:!h-6 !shrink-0" />
    ),
    link: "",
  },
  {
    icon: (
      <LinkedinOutlinedIcon className="!w-5 md:!w-6 !h-5 md:!h-6 !shrink-0" />
    ),
    link: "",
  },
];

export const testimonialsData = [
  {
    id: 1,
    message:
      "I've been working with this team closely for a few years now and they have went above and beyond to bring my vision to life. Very talented and I look forward to continuing to make even more ideas a reality.",
    avatar: images.avatar1,
    name: "Benjamin Oakes",
    title: "Founder - TechV",
  },
  {
    id: 2,
    message:
      "The dedication and creativity of this team are unmatched. They exceeded my expectations and delivered exceptional results every time.",
    avatar: images.avatar2,
    name: "Sophia Lee",
    title: "CEO - InnovateNow",
  },
  {
    id: 3,
    message:
      "Working with this team has been an incredible experience. Their ability to bring ideas to life is truly remarkable, and I couldn't be happier with the results.",
    avatar: images.avatar1,
    name: "Michael Harper",
    title: "CTO - FutureTech Solutions",
  },
];
