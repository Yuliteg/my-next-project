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
