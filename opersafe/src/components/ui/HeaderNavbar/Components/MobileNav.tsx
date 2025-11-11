import Link from 'next/link';
import { Menu, MenuItem, Box, Button, IconButton, Collapse } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ThemeToggle from '@/src/components/ThemeToggle';
import { MobileNavProps } from '../types/IProps';
import { useState } from 'react';

export const MobileNav = ({
    items,
    isOpen,
    anchorEl,
    onClose,
    onScrollToTop,
    onServicesClick,
    servicesItems
}: MobileNavProps) => {
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
                size="large"
                aria-label="open menu"
                onClick={onServicesClick}
            >
                <MenuIcon />
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={isOpen}
                onClose={onClose}
                PaperProps={{
                    style: {
                        marginRight: 2
                    }
                }}
            >
                {items.map(item => {
                    if (item.type === "scroll") {
                        return (
                            <MenuItem
                                sx={{ fontSize: 16 }}
                                key={item.label}
                                onClick={() => {
                                    onScrollToTop();
                                    onClose();
                                }}
                            >
                                {item.label}
                            </MenuItem>
                        );
                    }

                    if (item.type === "menu") {
                        return (
                            <Box key={item.label}>
                                <MenuItem
                                    onClick={() => setServicesOpen(!servicesOpen)}
                                    sx={{
                                        fontSize: 16,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    {item.label}
                                    {servicesOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </MenuItem>

                                <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
                                    <Box sx={{ pl: 2 }}>
                                        {servicesItems.map(service => (
                                            <MenuItem
                                                key={service}
                                                onClick={() => {
                                                    onClose();
                                                }}
                                                sx={{
                                                    fontSize: 13,
                                                }}
                                            >
                                                {service}
                                            </MenuItem>
                                        ))}
                                    </Box>
                                </Collapse>
                            </Box>
                        );
                    }

                    return (
                        <MenuItem
                            sx={{ fontSize: 16 }}
                            key={item.label}
                            onClick={onClose}
                            component={Link}
                            href={item.href!}
                        >
                            {item.label}
                        </MenuItem>
                    );
                })}

                <MenuItem>
                    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <ThemeToggle />
                    </Box>
                </MenuItem>

                <MenuItem>
                    <Button variant="outlined" fullWidth>
                        Special
                    </Button>
                </MenuItem>
                <MenuItem>
                    <Button variant="contained" fullWidth>
                        Login
                    </Button>
                </MenuItem>
            </Menu>
        </Box>
    );
};