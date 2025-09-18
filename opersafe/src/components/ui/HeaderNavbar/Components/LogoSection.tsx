import Image from 'next/image';
import { Box, Typography } from '@mui/material';

export const LogoSection = () => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Box sx={{display: "flex", alignItems: "center" }}>
                <Image 
                    src="/img/logo.svg" 
                    alt="Minera San Cristobal" 
                    width={120} 
                    height={50}
                    priority
                />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography 
                    variant="h5" 
                    sx={{ 
                        display: { xs: "none", md: "flex" }, 
                        textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                    }}
                >   
                    MINERA
                </Typography>
                <Typography 
                    variant="h6" 
                    sx={{ 
                        display: { xs: "none", md: "flex" }, 
                        textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                    }}
                >
                    San Cristobal
                </Typography>
            </Box>
        </Box>
    );
};