import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import { BarChartComponentProps } from "";
import { COLORS, GROUP_NAMES } from './constants';

const CustomTooltip = ({ active, payload, label, showPercentages }: any) => {
    if (active && payload && payload.length) {
        return (
            <div style={{
                backgroundColor: theme.custom.colors.paperBg,
                border: `1px solid ${theme.custom.colors.corporateLight}`,
                borderRadius: '6px',
                padding: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}>
                <p style={{
                    color: theme.custom.colors.primary,
                    fontWeight: 600,
                    marginBottom: '8px',
                    borderBottom: `1px solid ${theme.custom.colors.corporateLight}`,
                    paddingBottom: '4px'
                }}>
                    {`Mes: ${label}`}
                </p>
                {payload.map((entry: any, index: number) => (
                    <p key={`item-${index}`} style={{
                        color: theme.custom.colors.textPrimary,
                        margin: '4px 0',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <span style={{
                            display: 'inline-block',
                            width: '12px',
                            height: '12px',
                            backgroundColor: entry.color,
                            marginRight: '8px',
                            borderRadius: '2px'
                        }}></span>
                        {`${entry.name}: `}
                        <span style={{ fontWeight: 600, marginLeft: '4px' }}>
                            {showPercentages ? `${entry.value}%` : entry.value}
                        </span>
                    </p>
                ))}
            </div>
        );
    }

    return null;
};

const BarChartComponent: React.FC<BarChartComponentProps> = ({
    data,
    showPercentages,
    onBarClick
}) => {
    const grupos = ['grupo1', 'grupo2', 'grupo3', 'grupo4'] as const;

    const handleClick = (data: any) => {
        if (data && data.activePayload) {
            onBarClick(data.activePayload[0].payload.mes);
        }
    };

    return (
        <ResponsiveContainer width="100%" height={500}>
            <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                onClick={handleClick}
            >
                <CartesianGrid strokeDasharray="3 3" stroke={theme.custom.colors.corporateLight} />
                <XAxis dataKey="mes" stroke={theme.custom.colors.textPrimary} />
                <YAxis
                    stroke={theme.custom.colors.textPrimary}
                    label={{
                        value: showPercentages ? 'Porcentaje de Cumplimiento' : 'Formularios Entregados',
                        angle: -90,
                        position: 'insideLeft',
                        style: { textAnchor: 'middle', fill: theme.custom.colors.textPrimary }
                    }}
                />
                <Tooltip content={<CustomTooltip showPercentages={showPercentages} />} />
                <Legend />
                {grupos.map((grupo, index) => (
                    <Bar
                        key={grupo}
                        dataKey={grupo}
                        name={GROUP_NAMES[grupo]}
                        fill={COLORS[index]}
                    />
                ))}
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartComponent;