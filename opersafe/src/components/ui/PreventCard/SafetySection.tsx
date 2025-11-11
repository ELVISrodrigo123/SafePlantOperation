'use client'

import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const PreventCardSection = () => {
    const images = [
        { src: "/img/210Chancado.webp", alt: "Seguridad en mina" },
        { src: "/img/220Domo.webp", alt: "Supervisión en operaciones" },
        { src: "/img/230Molienda.webp", alt: "Equipo de protección" },
        { src: "/img/240Flotacion.webp", alt: "Trabajador en faena" },
    ];
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <>
            <Grid px={6} py={6} container spacing={4} alignItems="center">
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ width: "90%", margin: "auto" }}>
                        <Typography variant="h3">
                            Prevención de Incidentes: 25 Años de Seguridad Industrial
                        </Typography>
                        <Typography
                            variant="h5"
                            color="textSecondary"
                            sx={{ py: 3 }}
                        >
                            En San Cristóbal S.A., nuestra misión es anticiparnos a los riesgos
                            y garantizar la seguridad en el sector minero. Con más de dos
                            décadas de experiencia, ofrecemos soluciones innovadoras que
                            protegen vidas y optimizan operaciones.
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <CheckCircleOutlineIcon />
                                    <Typography variant="body2" component="span">
                                        Cumplimiento de normativas internacionales
                                    </Typography>
                                </Box>
                                <Box py={2} display="flex" alignItems="center" gap={1}>
                                    <CheckCircleOutlineIcon />
                                    <Typography variant="body2" component="span">
                                        Cumplimiento de normativas internacionales
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <CheckCircleOutlineIcon />
                                    <Typography variant="body2" component="span">
                                        Cumplimiento de normativas internacionales
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <CheckCircleOutlineIcon />
                                    <Typography variant="body2" component="span">
                                        Cumplimiento de normativas internacionales
                                    </Typography>
                                </Box>
                                <Box py={2} display="flex" alignItems="center" gap={1}>
                                    <CheckCircleOutlineIcon />
                                    <Typography variant="body2" component="span">
                                        Cumplimiento de normativas internacionales
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <CheckCircleOutlineIcon />
                                    <Typography variant="body2" component="span">
                                        Cumplimiento de normativas internacionales
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Button sx={{ my: 5 }} variant='contained'>
                            <Typography variant="body2" component="span">
                                Conocer mas
                            </Typography>
                            <ArrowForwardIcon />
                        </Button>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Grid container spacing={2} justifyContent="center">
                        {images.map((image, i) => (
                            <Grid size={{ xs: 12, md: 6 }} key={i}>
                                <Box
                                    component="img"
                                    src={image.src}
                                    alt={image.alt}
                                    sx={{
                                        height: isSmallScreen ? 120 : 180,
                                        width: "100%",
                                        objectFit: "cover",
                                        display: "block",
                                        borderRadius: 2,
                                        transition: "transform 0.3s ease",
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default PreventCardSection