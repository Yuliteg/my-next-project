import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiViewColumns,
  HiEnvelope,
} from "react-icons/hi2";
import { PiCertificateFill } from "react-icons/pi";
//  links
export const links = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "projects", path: "/projects", icon: <HiViewColumns /> },
  {
    name: "certificates",
    path: "/certificates",
    icon: <PiCertificateFill />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

export const descContent = `
  Here, I share all my completed projects, certificates, and contact
  details. You can explore my diverse range of front-end development
  projects and check out the certifications I've earned. If you'd like
  to get in touch, feel free to reach out to me using the contact
  information.
`;