// components/Navbar/components/DesktopNav.tsx
import Link from 'next/link';
import { Button, Box } from '@mui/material';
import { DesktopNavProps } from '../types/IProps';

export const DesktopNav = ({items, onScrollToTop, onServicesClick}: DesktopNavProps) => {
    return (
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {items.map(item => {
                if (item.type === "scroll") {
                    return (
                        <Button 
                            key={item.label} 
                            onClick={onScrollToTop} 
                            sx={{ my: 2, mx: 1}}
                        >
                            {item.label}
                        </Button>
                    );
                }

                if (item.type === "menu") {
                    return (
                        <Button
                            key={item.label}
                            onClick={onServicesClick}
                            sx={{ my: 2, mx: 1}}
                        >
                            {item.label}
                        </Button>
                    );
                }

                return (
                    <Button 
                        key={item.label} 
                        component={Link} 
                        href={item.href!} 
                        sx={{ my: 2, mx: 1}}
                    >
                        {item.label}
                    </Button>
                );
            })}
        </Box>
    );
};