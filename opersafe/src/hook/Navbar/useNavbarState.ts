import { useState } from "react";

export const useNavbarState = () => {
  const [servicesAnchor, setServicesAnchor] = useState<null | HTMLElement>(
    null
  );

  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(
    null
  );

  const handleServicesClick = (event: React.MouseEvent<HTMLElement>) => {
    setServicesAnchor(event.currentTarget);
  };

  const handleServicesClose = () => {
    setServicesAnchor(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  return {
    servicesAnchor,
    mobileMenuAnchor,
    isServicesOpen: Boolean(servicesAnchor),
    isMobileOpen: Boolean(mobileMenuAnchor),
    handleServicesClick,
    handleServicesClose,
    handleMobileMenuOpen,
    handleMobileMenuClose,
  };
};
