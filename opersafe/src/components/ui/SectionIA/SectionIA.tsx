'use client'

import { theme } from '@/src/themes'
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const SectionIA = () => {
    return (
        <>
            <Box sx={{
                background: theme.custom.colors.gradients.blue4,
            }}>
                <Typography variant='h1'>hola</Typography>
                <Typography variant='h1'>como esta</Typography>
                <Typography variant='h1'>leo</Typography>
                <Typography variant='h1'>no pues</Typography>
                <Typography variant='h1'>sisi si</Typography>
            </Box>
        </>
    )
}

export default SectionIA