"use client";

import React, { useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import {
    Box,
    Typography,
    Button,
    Paper,
    IconButton,
    MobileStepper,
    useTheme
} from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { initialData } from '../types/IProps';
import { getGroupColors, GroupKey } from '@/src/themes/tokens/groups';

interface TooltipPayloadItem {
    dataKey: string;
    value: number;
    color: string;
    payload: Record<string, unknown>;
}

interface CustomTooltipProps {
    active?: boolean;
    payload?: TooltipPayloadItem[];
    label?: string;
    showPercentages: boolean;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
    active,
    payload,
    label,
    showPercentages
}) => {
    if (!active || !payload || !payload.length || !label) return null;

    const metaPayload = payload.find((p) => p.dataKey === 'meta');
    const actualPayload = payload.find((p) => p.dataKey === 'actual');
    
    const metaValue = metaPayload?.value || 0;
    const actualValue = actualPayload?.value || 0;
    const percentage = Math.round((actualValue / metaValue) * 100);

    return (
        <Paper elevation={3} sx={{ p: 1.5 }}>
            <Typography variant="h6" gutterBottom >
                {label}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2">Meta:</Typography>
                    <Typography variant="body2">
                        {showPercentages ? `${metaValue}%` : metaValue}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" >Actual:</Typography>
                    <Typography variant="body2">
                        {showPercentages ? `${actualValue}%` : actualValue}
                    </Typography>
                </Box>
                {!showPercentages && (
                    <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                        <Typography variant="body2">Cumplimiento:</Typography>
                        <Typography variant="body2" sx={{
                            paddingLeft: 2,
                            color: percentage >= 100 ? 'success.main' : 'warning.main'
                        }}>
                            {percentage}%
                        </Typography>
                    </Box>
                )} 
            </Box>
        </Paper>
    );
};

const MobileView = () => {
    const theme = useTheme();
    const GROUP_COLORS = getGroupColors(theme);
    const [showPercentages, setShowPercentages] = useState(false);
    const [activeStep, setActiveStep] = useState(initialData.length - 1);

    const currentMonthData = initialData[activeStep];

    const mobileData = [
        { grupo: 'Grupo 1', meta: currentMonthData.meta, actual: currentMonthData.Grupo1 },
        { grupo: 'Grupo 2', meta: currentMonthData.meta, actual: currentMonthData.Grupo2 },
        { grupo: 'Grupo 3', meta: currentMonthData.meta, actual: currentMonthData.Grupo3 },
        { grupo: 'Grupo 4', meta: currentMonthData.meta, actual: currentMonthData.Grupo4 }
    ];

    const processedData = showPercentages
        ? mobileData.map(item => ({
            grupo: item.grupo,
            meta: 100,
            actual: Math.round((item.actual / item.meta) * 100)
        }))
        : mobileData;

    const toggleView = () => {
        setShowPercentages(!showPercentages);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % initialData.length);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep - 1 + initialData.length) % initialData.length);
    };

    return (
        <Box sx={{ p: 1.5, minHeight: '100vh' }}>
            <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Typography variant="h6" component="h1" gutterBottom >
                    Progreso de Grupos
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                    <IconButton onClick={handleBack}>
                        <KeyboardArrowLeft />
                    </IconButton>

                    <Typography variant="h6" sx={{
                        mx: 2,
                    }}>
                        {currentMonthData.mes}
                    </Typography>

                    <IconButton onClick={handleNext}>
                        <KeyboardArrowRight />
                    </IconButton>
                </Box>

                <MobileStepper
                    variant="dots"
                    steps={initialData.length}
                    position="static"
                    activeStep={activeStep}
                    sx={{
                        justifyContent: 'center',
                        background: 'transparent',
                        '& .MuiMobileStepper-dot': {
                            width: 8,
                            height: 8,
                        }
                    }}
                    nextButton={<div style={{ width: 24 }} />}
                    backButton={<div style={{ width: 24 }} />}
                />

                <Button
                    variant="contained"
                    onClick={toggleView}
                    startIcon={showPercentages ? <TrendingDownIcon /> : <TrendingUpIcon />}
                    sx={{
                        mt: 1,
                        py: 0.5,
                        background: showPercentages
                            ? theme.custom.colors.gradients.orange1
                            : theme.custom.colors.gradients.orange2,
                    }}
                >
                    {showPercentages ? 'Valores Absolutos' : 'Porcentajes'}
                </Button>
            </Box>

            <Paper elevation={2} sx={{ p: 1, borderRadius: 2, mb: 2 }}>
                <ResponsiveContainer width="100%" height={220}>
                    <BarChart
                        data={processedData}
                        margin={{ top: 15, right: 15, left: 0, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="2 2" stroke="#e0e0e0" />
                        <XAxis
                            dataKey="grupo"
                            tick={{ fontSize: '0.7rem' }}
                        />
                        <YAxis
                            tick={{ fontSize: '0.7rem' }}
                            label={{
                                value: showPercentages ? 'Porcentaje' : 'Cantidad',
                                angle: -90,
                                position: 'insideLeft',
                                style: { fontSize: '0.7rem' }
                            }}
                        />
                        <Tooltip content={<CustomTooltip showPercentages={showPercentages} />} />
                        <Bar
                            dataKey="meta"
                            fill={theme.custom.colors.graphPrimary}
                            name="Meta"
                            radius={[4, 4, 0, 0]}
                        />
                        <Bar
                            dataKey="actual"
                            fill={theme.custom.colors.graphSecond}
                            name="Actual"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </Paper>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {mobileData.map((item, index) => {
                    const percentage = Math.round((item.actual / item.meta) * 100);
                    const grupoKey = `Grupo${index + 1}` as keyof typeof GROUP_COLORS;

                    return (
                        <Paper key={index} elevation={1} sx={{ p: 1.5 }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 1,
                                borderBottom: `2px solid ${GROUP_COLORS[grupoKey as GroupKey]}`,
                                pb: 0.5
                            }}>
                                <Box
                                    sx={{
                                        display: 'inline-block',
                                        width: 12,
                                        height: 12,
                                        backgroundColor: GROUP_COLORS[grupoKey as GroupKey],
                                        mr: 1,
                                        borderRadius: '2px'
                                    }}
                                />
                                <Typography variant="subtitle2" sx={{ fontSize: '0.8rem' }}>
                                    {item.grupo}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                <Typography variant="h6" >Meta:</Typography>
                                <Typography variant="h6">
                                    {item.meta}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                <Typography variant="h6">Actual:</Typography>
                                <Typography variant="h6">
                                    {item.actual}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography variant="h6">Cumplimiento:</Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: percentage >= 100 ? 'success.main' : percentage >= 80 ? 'warning.main' : 'error.main'
                                    }}
                                >
                                    {percentage}%
                                </Typography>
                            </Box>
                        </Paper>
                    );
                })}
            </Box>
        </Box>
    );
};

export default MobileView;