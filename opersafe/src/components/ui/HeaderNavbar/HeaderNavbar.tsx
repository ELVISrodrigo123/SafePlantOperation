// app/page.tsx
'use client';
import { useRef } from 'react';
import NavbarHeader from './Components/NavbarHeader';
import { VideoBackground } from '../VideoBackground/VideoBackground';

export default function HeaderNavbar() {
    const topRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <NavbarHeader topRef={topRef} />
            <VideoBackground
                videoSrc="/video/header.mp4"
                title="PROPÓSITO"
                subtitle="Innovar en la minería en Bolivia y el mundo para generar oportunidades y bienestar sostenible, convirtiéndonos en la minera número uno de plata globalmente."
                buttons={[
                    {
                        label: "Ver Servicios",
                        variant: "contained",
                    },
                    {
                        label: "Contactar",
                        variant: "outlined",
                        sx: { color: 'white', borderColor: 'white' }
                    }
                ]}
                minHeight="91vh"
            />
        </>
    );
}