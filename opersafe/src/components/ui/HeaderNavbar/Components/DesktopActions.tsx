import { Button, Box } from '@mui/material';
import ThemeToggle from '@/src/components/ThemeToggle';

export const DesktopActions: React.FC = () => {
    return (
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1}}>
            <ThemeToggle />
            <Button
                variant="outlined"
            >
                Special
            </Button>

            <Button variant="contained">
                Login
            </Button>
        </Box>
    );
};