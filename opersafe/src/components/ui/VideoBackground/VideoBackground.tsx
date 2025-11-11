'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { VideoBackgroundProps } from './types/IProps';

export const VideoBackground = ({
    videoSrc,
    children,
    title,
    subtitle,
    buttons,
    overlayOpacity = 0.4,
    minHeight = '100vh',
    videoStyle,
    containerSx,
    contentSx,
    ...videoProps
}: VideoBackgroundProps) => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                minHeight,
                overflow: 'hidden',
                alignItems: 'center',
                justifyContent: 'center',
                ...containerSx
            }}
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    top: 0,
                    left: 0,
                    zIndex: 0,
                    ...videoStyle
                }}
                {...videoProps}
            >
                <source src={videoSrc} type="video/mp4" />
            </video>

            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: overlayOpacity,
                    zIndex: 1
                }}
            />

            {(children || title || subtitle || buttons) && (
                <Container
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: "100%",
                        py: 18,
                        ...contentSx
                    }}
                >
                    <Box sx={{ textAlign: 'center', color: "white" }}>
                        {title && (
                            <Typography
                                variant="h2"
                                component="h1"
                                gutterBottom
                                sx={{
                                    fontWeight: 'bold',
                                    textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
                                    my: 3
                                }}
                            >
                                {title}
                            </Typography>
                        )}

                        {subtitle && (
                            <Typography
                                variant="h4"
                                component="p"
                                gutterBottom
                                sx={{
                                    mb: 4,
                                    maxWidth: '800px',
                                    textShadow: '1px 1px 4px rgba(0,0,0,0.7)',
                                    fontWeight: 300
                                }}
                            >
                                {subtitle}
                            </Typography>
                        )}

                        {buttons && buttons.length > 0 && (
                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={2}
                                justifyContent="center"
                                sx={{ mt: 4, mx: 5 }}
                            >
                                {buttons.map((button, index) => (
                                    <Button
                                        key={index}
                                        variant={button.variant || 'contained'}
                                        size="large"
                                        onClick={button.onClick}
                                        sx={{
                                            ...button.sx
                                        }}
                                    >
                                        {button.label}
                                    </Button>
                                ))}
                            </Stack>
                        )}

                        {children}
                    </Box>
                </Container>
            )}
        </Box>
    );
};