import { NavItem } from "../types/IProps";

export const Nav_Items: NavItem[] = [
  { label: "Home", type: "scroll" },
  { label: "About Us", type: "link", href: "/about" },
  { label: "Services", type: "menu" },
  { label: "Projects", type: "link", href: "/projects" },
  { label: "Contact", type: "link", href: "/contact" },
];

export const Services_Items: string[] = [
  "210-Chancado",
  "220-Domo",
  "230-Molienda",
  "240-Flotacion Plomo",
  "250-Flotacion Zinc",
  "270-Reactivos",
  "310-Espezadores",
  "320-Filtros",
  "330-Carguio"
];