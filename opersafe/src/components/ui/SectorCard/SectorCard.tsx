'use client';

import { Grid, Typography } from "@mui/material";
import Noseque from "./hola";

export default function SectorCard() {

    return (
        <>
            <Typography variant="h4" sx={{ border: "solid", width: "50%", textAlign: "center", margin: "auto" }}>Áreas Especializadas</Typography>
            <Typography variant="h2" textAlign="center" sx={{ py: 3 }}>
                9 Áreas de Operación Minera
            </Typography>
            <Typography variant="h6" width="70%" textAlign="center" margin="auto">
                Cobertura completa de seguridad para todos los procesos de la cadena productiva minera, desde la extracción hasta el producto final
            </Typography>
            <Grid marginX="2rem" marginTop="4rem" container spacing={6} >
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>

                    < Noseque
                        titulo="Chancado "
                        descripcion="Trituración inicial del mineral extraído con equipos de alta capacidad"
                        trabajadores={45}
                        riesgos={["Ruido extremo", "Polvo", "Atrapamiento", "Vibraciones"]}
                        medidas={[
                            "Protección auditiva obligatoria",
                            "Sistemas de ventilación",
                            "Procedimientos LOTO",
                        ]}
                        cumplimiento={92}
                        riesgoNivel="Bajo"
                        imagen="/img/210Chancado.webp"
                    />

                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    < Noseque
                        titulo="Domo "
                        descripcion="Trituración inicial del mineral extraído con equipos de alta capacidad"
                        trabajadores={45}
                        riesgos={["Ruido extremo", "Polvo", "Atrapamiento", "Vibraciones"]}
                        medidas={[
                            "Protección auditiva obligatoria",
                            "Sistemas de ventilación",
                            "Procedimientos LOTO",
                        ]}
                        cumplimiento={92}
                        riesgoNivel="Alto"
                        imagen="/img/220Domo.webp"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    < Noseque
                        titulo="Molienda"
                        descripcion="Trituración inicial del mineral extraído con equipos de alta capacidad"
                        trabajadores={45}
                        riesgos={["Ruido extremo", "Polvo", "Atrapamiento", "Vibraciones"]}
                        medidas={[
                            "Protección auditiva obligatoria",
                            "Sistemas de ventilación",
                            "Procedimientos LOTO",
                        ]}
                        cumplimiento={92}
                        riesgoNivel="Alto"
                        imagen="/img/230Molienda.webp"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>

                    < Noseque
                        titulo="Flotacion Plomo"
                        descripcion="Trituración inicial del mineral extraído con equipos de alta capacidad"
                        trabajadores={45}
                        riesgos={["Ruido extremo", "Polvo", "Atrapamiento", "Vibraciones"]}
                        medidas={[
                            "Protección auditiva obligatoria",
                            "Sistemas de ventilación",
                            "Procedimientos LOTO",
                        ]}
                        cumplimiento={92}
                        riesgoNivel="Alto"
                        imagen="/img/240Flotacion.webp"
                    />

                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    < Noseque
                        titulo="Flotacion Zinc"
                        descripcion="Trituración inicial del mineral extraído con equipos de alta capacidad"
                        trabajadores={45}
                        riesgos={["Ruido extremo", "Polvo", "Atrapamiento", "Vibraciones"]}
                        medidas={[
                            "Protección auditiva obligatoria",
                            "Sistemas de ventilación",
                            "Procedimientos LOTO",
                        ]}
                        cumplimiento={92}
                        riesgoNivel="Alto"
                        imagen="/img/250Flotacion.webp"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    < Noseque
                        titulo="Reactivos"
                        descripcion="Trituración inicial del mineral extraído con equipos de alta capacidad"
                        trabajadores={45}
                        riesgos={["Ruido extremo", "Polvo", "Atrapamiento", "Vibraciones"]}
                        medidas={[
                            "Protección auditiva obligatoria",
                            "Sistemas de ventilación",
                            "Procedimientos LOTO",
                        ]}
                        cumplimiento={92}
                        riesgoNivel="Alto"
                        imagen="/img/270Reactivos.webp"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>

                    < Noseque
                        titulo="Chancado Primario"
                        descripcion="Trituración inicial del mineral extraído con equipos de alta capacidad"
                        trabajadores={45}
                        riesgos={["Ruido extremo", "Polvo", "Atrapamiento", "Vibraciones"]}
                        medidas={[
                            "Protección auditiva obligatoria",
                            "Sistemas de ventilación",
                            "Procedimientos LOTO",
                        ]}
                        cumplimiento={92}
                        riesgoNivel="Alto"
                        imagen="/img/220Domo.webp"
                    />

                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    < Noseque
                        titulo="Chancado Primario"
                        descripcion="Trituración inicial del mineral extraído con equipos de alta capacidad"
                        trabajadores={45}
                        riesgos={["Ruido extremo", "Polvo", "Atrapamiento", "Vibraciones"]}
                        medidas={[
                            "Protección auditiva obligatoria",
                            "Sistemas de ventilación",
                            "Procedimientos LOTO",
                        ]}
                        cumplimiento={92}
                        riesgoNivel="Alto"
                        imagen="/img/230Molienda.webp"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    < Noseque
                        titulo="Carguio"
                        descripcion="Trituración inicial del mineral extraído con equipos de alta capacidad"
                        trabajadores={45}
                        riesgos={["Ruido extremo", "Polvo", "Atrapamiento", "Vibraciones"]}
                        medidas={[
                            "Protección auditiva obligatoria",
                            "Sistemas de ventilación",
                            "Procedimientos LOTO",
                        ]}
                        cumplimiento={92}
                        riesgoNivel="Alto"
                        imagen="/img/330Carguio.webp"
                    />
                </Grid>
            </Grid>
        </>
    );
}