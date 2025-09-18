import { RefObject } from "react";

export interface NavbarHeaderProps {
  topRef?: RefObject<HTMLElement | null>;
}

export type NavItemType = "scroll" | "menu" | "link";

export type NavItem =
  | { label: string; type: "scroll" }
  | { label: string; type: "menu" }
  | { label: string; type: "link"; href: string };

export interface DesktopNavProps {
  items: NavItem[];
  onScrollToTop: () => void;
  onServicesClick: (event: React.MouseEvent<HTMLElement>) => void;
  isServicesOpen: boolean;
}

export interface MobileNavProps {
  items: NavItem[];
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
  onScrollToTop: () => void;
  onServicesClick: (event: React.MouseEvent<HTMLElement>) => void;
  servicesItems: string[];
}
