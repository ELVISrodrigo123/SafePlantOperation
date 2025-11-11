"use client";

import React, { useMemo } from 'react';
import {
    Box,
    Typography,
    Paper,
    useTheme,
    styled
} from '@mui/material';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import { FeatureCardProps, FeaturesSectionProps } from './types/IProps';


const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: 'center',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: theme.shadows[8],
        backgroundColor: theme.palette.background.paper,
    },
}));

const IconContainer = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
    '& .MuiSvgIcon-root': {
        fontSize: '5rem',
    }
}));
const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
    return (
        <StyledPaper elevation={2}>
            <IconContainer>
                {icon}
            </IconContainer>
            <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {title}
            </Typography>
            <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                    lineHeight: 1.6,
                }}
            >
                {description}
            </Typography>
        </StyledPaper>
    );
};

const FEATURES_DATA = [
    {
        icon: <ShieldOutlinedIcon />,
        title: "Seguridad Industrial",
        description: "Implementamos sistemas de seguridad de clase mundial para operaciones mineras."
    },
    {
        icon: <PeopleOutlinedIcon />,
        title: "Capacitación Especializada",
        description: "Programas de entrenamiento certificados para personal de todos los niveles."
    },
    {
        icon: <CardMembershipIcon />,
        title: "Auditorías y Certificaciones",
        description: "Evaluaciones completas bajo estándares internacionales de seguridad."
    },
    {
        icon: <ManageHistoryIcon />,
        title: "Gestión de Riesgos",
        description: "Identificación, evaluación y mitigación de riesgos operacionales."
    }
];

const FeaturesSection = ({
    maxWidth = "1200px",
    spacing = 3

}: FeaturesSectionProps) => {
    const theme = useTheme();

    const featureCards = useMemo(() =>
        FEATURES_DATA.map((feature, index) => (
            <FeatureCard
                key={`feature-${index}-${feature.title}`}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
            />
        ))
        , []);

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 6, md: 8 },
                px: { xs: 2, sm: 3 },
                backgroundColor: 'background.default'
            }}
        >
            <Box
                sx={{
                    textAlign: 'center',
                    maxWidth: '600px',
                    mx: 'auto',
                    mb: { xs: 4, md: 6 }
                }}
            >
                <Typography
                    variant="h2"
                    component="h2"
                    gutterBottom
                    sx={{
                        fontWeight: 700,
                        mb: 3,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                    }}
                >
                    Nuestros Servicios
                </Typography>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{
                        lineHeight: 1.6,
                        fontSize: { xs: '1rem', md: '1.1rem' }
                    }}
                >
                    Soluciones integrales en seguridad industrial adaptadas a las necesidades específicas de cada operación minera
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(4, 1fr)'
                    },
                    gap: spacing,
                    maxWidth: maxWidth,
                    mx: 'auto',
                    px: { xs: 2, sm: 3 }
                }}
            >
                {featureCards}
            </Box>
        </Box>
    );
};

export default React.memo(FeaturesSection);