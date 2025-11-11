export interface GroupData {
  mes: string;
  meta: number;
  Grupo1: number;
  Grupo2: number;
  Grupo3: number;
  Grupo4: number;
}

export interface AnnualSummary {
  grupo: string;
  totalEntregado: number;
  promedioCumplimiento: number;
}

export interface MonthlyWinner {
  mes: string;
  ganador: string;
  valor: number;
}

export const GROUP_NAMES = {
  Grupo1: "Grupo 1",
  Grupo2: "Grupo 2",
  Grupo3: "Grupo 3",
  Grupo4: "Grupo 4",
} as const;

export type GroupKey = keyof typeof GROUP_NAMES;

export const initialData: GroupData[] = [
  {
    mes: "Enero",
    meta: 250,
    Grupo1: 210,
    Grupo2: 190,
    Grupo3: 240,
    Grupo4: 180,
  },
  {
    mes: "Febrero",
    meta: 280,
    Grupo1: 270,
    Grupo2: 250,
    Grupo3: 280,
    Grupo4: 260,
  },
  {
    mes: "Marzo",
    meta: 220,
    Grupo1: 220,
    Grupo2: 200,
    Grupo3: 210,
    Grupo4: 190,
  },
  {
    mes: "Abril",
    meta: 300,
    Grupo1: 290,
    Grupo2: 280,
    Grupo3: 300,
    Grupo4: 270,
  },
  {
    mes: "Mayo",
    meta: 260,
    Grupo1: 255,
    Grupo2: 240,
    Grupo3: 260,
    Grupo4: 250,
  },
  {
    mes: "Junio",
    meta: 270,
    Grupo1: 265,
    Grupo2: 250,
    Grupo3: 270,
    Grupo4: 240,
  },
  {
    mes: "Julio",
    meta: 240,
    Grupo1: 235,
    Grupo2: 220,
    Grupo3: 240,
    Grupo4: 210,
  },
  {
    mes: "Agosto",
    meta: 290,
    Grupo1: 285,
    Grupo2: 270,
    Grupo3: 290,
    Grupo4: 260,
  },
  {
    mes: "Septiembre",
    meta: 310,
    Grupo1: 300,
    Grupo2: 290,
    Grupo3: 310,
    Grupo4: 280,
  },
  {
    mes: "Octubre",
    meta: 260,
    Grupo1: 255,
    Grupo2: 240,
    Grupo3: 260,
    Grupo4: 250,
  },
  {
    mes: "Noviembre",
    meta: 280,
    Grupo1: 275,
    Grupo2: 260,
    Grupo3: 280,
    Grupo4: 270,
  },
  {
    mes: "Diciembre",
    meta: 320,
    Grupo1: 315,
    Grupo2: 300,
    Grupo3: 320,
    Grupo4: 290,
  },
];
