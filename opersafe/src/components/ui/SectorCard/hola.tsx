'use client';

import {
    Card,
    CardContent,
    Typography,
    Chip,
    LinearProgress,
    Box,
    Stack,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WorkIcon from "@mui/icons-material/Work";
import { blue } from "@mui/material/colors";

interface SectorCardProps {
    titulo: string;
    descripcion: string;
    trabajadores: number;
    riesgos: string[];
    medidas: string[];
    cumplimiento: number;
    riesgoNivel: "Alto" | "Medio" | "Bajo";
    imagen?: string;
}

export default function Noseque({
    titulo,
    descripcion,
    trabajadores,
    riesgos,
    medidas,
    cumplimiento,
    riesgoNivel,
    imagen,
}: SectorCardProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    const getColorByRiesgo = () => {
        switch (riesgoNivel) {
            case "Alto": return "error";
            case "Medio": return "warning";
            case "Bajo": return "success";
            default: return "default";
        }
    };

    const getRiesgoSize = () => isMobile ? "small" : "medium";

    return (
        <Card
            sx={{   
                borderRadius: 2,
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                '&:hover': {
                    transform: "translateY(-4px)",
                    boxShadow: theme.shadows[8],
                }
            }}
        >
            {/* Imagen superior */}
            <Box sx={{ 
                position: "relative", 
                height: isMobile ? 120 : isTablet ? 140 : 160 
            }}>
                {imagen ? (
                    <Image
                        src={imagen}
                        alt={titulo}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                    />
                ) : (
                    <Box
                        sx={{
                            height: "100%",
                            backgroundColor: "grey.800",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <WorkIcon sx={{ color: "grey.500", fontSize: 40 }} />
                    </Box>
                )}

                {/* Chip de Riesgo */}
                <Chip
                    label={`Riesgo ${riesgoNivel}`}
                    color={getColorByRiesgo()}
                    size={getRiesgoSize()}
                    sx={{ 
                        position: "absolute", 
                        top: 8, 
                        left: 8,
                        fontWeight: "bold",
                        fontSize: isMobile ? '0.7rem' : '0.8rem'
                    }}
                />
            </Box>

            {/* Contenido */}
            <CardContent sx={{ flexGrow: 1, p: isMobile ? 1.5 : 2 }}>
                {/* Título y trabajadores */}
                <Box display="flex" alignItems="flex-start" justifyContent="space-between" gap={1}>
                    <Typography
                        variant={isMobile ? "subtitle1" : "h6"}
                        component="div"
                        sx={{ 
                            display: "flex", 
                            alignItems: "center", 
                            gap: 1,
                            flex: 1
                        }}
                    >
                        <WorkIcon sx={{ 
                            color: blue[500], 
                            fontSize: isMobile ? 18 : 24 
                        }} />
                        {titulo}
                    </Typography>
                    <Chip
                        label={`${trabajadores}`}
                        size="small"
                        sx={{ 
                            fontWeight: "bold",
                            minWidth: 'auto'
                        }}
                        title={`${trabajadores} trabajadores`}
                    />
                </Box>

                <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    mt={1}
                    sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                    }}
                >
                    {descripcion}
                </Typography>

                {/* Riesgos principales */}
                <Typography variant="subtitle2" mt={2} fontWeight="bold">
                    Riesgos Principales:
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={0.5} mt={0.5}>
                    {riesgos.map((r, i) => (
                        <Chip 
                            key={i} 
                            label={r} 
                            size="small" 
                            color="primary"
                            sx={{ 
                                fontSize: isMobile ? '0.7rem' : '0.75rem',
                                height: isMobile ? 24 : 28 
                            }}
                        />
                    ))}
                </Stack>

                {/* Medidas de seguridad */}
                <Typography variant="subtitle2" mt={2} fontWeight="bold">
                    Medidas de Seguridad:
                </Typography>
                <Stack spacing={0.5} mt={1}>
                    {medidas.map((m, i) => (
                        <Box
                            key={i}
                            display="flex"
                            alignItems="flex-start"
                            gap={1}
                            color="success.main"
                        >
                            <CheckCircleIcon fontSize="small" />
                            <Typography 
                                variant="body2" 
                                sx={{ 
                                    fontSize: isMobile ? '0.8rem' : '0.875rem',
                                    lineHeight: 1.3 
                                }}
                            >
                                {m}
                            </Typography>
                        </Box>
                    ))}
                </Stack>

                {/* Cumplimiento */}
                <Box mt={2}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="caption" fontWeight="bold">
                            Cumplimiento
                        </Typography>
                        <Typography variant="caption" fontWeight="bold">
                            {cumplimiento}%
                        </Typography>
                    </Box>
                    <LinearProgress
                        variant="determinate"
                        value={cumplimiento}
                        sx={{ 
                            height: 6, 
                            borderRadius: 3, 
                            mt: 0.5,
                            backgroundColor: 'grey.200',
                            '& .MuiLinearProgress-bar': {
                                borderRadius: 3,
                            }
                        }}
                        color={cumplimiento >= 90 ? "success" : cumplimiento >= 70 ? "warning" : "error"}
                    />
                </Box>
            </CardContent>
        </Card>
    );
}