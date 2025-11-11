"use client";

import React, { useMemo, useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import {
    Box,
    Typography,
    Button,
    Paper,
    useTheme,
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { GroupData, initialData } from '../types/IProps';
import { GroupKey, GROUP_NAMES, getGroupColors } from '@/src/themes/tokens/groups';

const GROUP_KEYS: GroupKey[] = ["Grupo1", "Grupo2", "Grupo3", "Grupo4"];

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
    data: GroupData[];
    groupColors: Record<GroupKey, string>;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
    active,
    payload,
    label,
    showPercentages,
    data,
    groupColors
}) => {
    if (!active || !payload || !payload.length || !label) return null;

    const mesData = data.find(d => d.mes === label);
    let winner: GroupKey = "Grupo1";
    let maxValue = 0;

    if (mesData) {
        GROUP_KEYS.forEach(grupo => {
            const value = mesData[grupo];
            if (value > maxValue) {
                maxValue = value;
                winner = grupo;
            }
        });
    }

    return (
        <Paper elevation={3} sx={{ p: 2, minWidth: 200 }}>
            <Typography
                variant="subtitle2"
                component="div"
                gutterBottom
                sx={{
                    borderBottom: `2px solid ${groupColors[winner]}`,
                    pb: 1,
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <EmojiEventsIcon sx={{
                    fontSize: 15,
                    mr: 1,
                    color: groupColors[winner]
                }} />
                {`${label} - ${GROUP_NAMES[winner]}`}
            </Typography>
            {payload.map((entry, index) => {
                const groupKey = entry.dataKey as GroupKey;
                return (
                    <Box
                        key={`item-${index}`}
                        sx={{
                            color: 'text.primary',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mt: 1,
                            fontSize: '14px',
                            backgroundColor: groupKey === winner ? 'rgba(123, 128, 48, 0.05)' : 'transparent',
                            p: 0.5,
                            borderRadius: 1
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box
                                sx={{
                                    display: 'inline-block',
                                    width: 12,
                                    height: 12,
                                    backgroundColor: entry.color,
                                    mr: 1,
                                    borderRadius: '2px'
                                }}
                            />
                            {`${GROUP_NAMES[groupKey]}: `}
                        </Box>
                        <Box component="span" sx={{ fontWeight: 'bold' }}>
                            {showPercentages ? `${entry.value}%` : entry.value}
                        </Box>
                    </Box>
                );
            })}
        </Paper>
    );
};

interface ChartClickEvent {
    activeLabel?: string;
}

const DesktopView: React.FC = () => {
    const theme = useTheme();
    const groupColors = getGroupColors(theme);
    const [data] = useState<GroupData[]>(initialData);
    const [showPercentages, setShowPercentages] = useState(false);

    const processedData = useMemo(() => {
        return showPercentages
            ? data.map(item => {
                const newItem: Record<string, string | number> = {
                    mes: item.mes,
                    meta: 100
                };

                GROUP_KEYS.forEach(key => {
                    newItem[key] = Math.round((item[key] / item.meta) * 100);
                });

                return newItem;
            })
            : data;
    }, [data, showPercentages]);

    const toggleView = () => {
        setShowPercentages(prev => !prev);
    };

    const handleChartClick = (e: ChartClickEvent) => {
        if (e?.activeLabel) {
        }
    };

    return (
        <Box sx={{ px: 3,pt: 4, minHeight: '100vh' }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Button
                    variant="outlined"
                    onClick={toggleView}
                    startIcon={showPercentages ? <TrendingDownIcon /> : <TrendingUpIcon />}
                >
                    {showPercentages ? 'Ver Valores Absolutos' : 'Ver Porcentajes'}
                </Button>
            </Box>

            <Paper elevation={3} sx={{ p: 2, backgroundColor: 'background.paper', borderRadius: 2 }}>
                <ResponsiveContainer width="100%" height={600}>
                    <LineChart
                        data={processedData}
                        margin={{ top: 20, right: 50, left: 30 }}
                        onClick={handleChartClick}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="mes" fontSize="12" />
                        <YAxis
                            fontSize="18"
                            label={{
                                angle: -90,
                                position: 'insideLeft',
                            }}
                        />
                        <Tooltip
                            content={
                                <CustomTooltip
                                    showPercentages={showPercentages}
                                    data={data}
                                    groupColors={groupColors}
                                />
                            }
                        />
                        <Legend wrapperStyle={{ paddingTop: '10px', fontSize: '18px' }} />

                        {GROUP_KEYS.map(groupKey => (
                            <Line
                                key={groupKey}
                                type="monotone"
                                dataKey={groupKey}
                                stroke={groupColors[groupKey]}
                                strokeWidth={3}
                                name={GROUP_NAMES[groupKey]}
                                dot={{
                                    r: 6,
                                    fill: groupColors[groupKey],
                                    strokeWidth: 3
                                }}
                                activeDot={{
                                    r: 9,
                                    fill: groupColors[groupKey]
                                }}
                                connectNulls={true}
                            />
                        ))}
                    </LineChart>
                </ResponsiveContainer>
            </Paper>
        </Box>
    );
};

export default DesktopView;