import { Theme } from "@mui/material/styles";

export type GroupKey = "Grupo1" | "Grupo2" | "Grupo3" | "Grupo4";

export const GROUP_KEYS: GroupKey[] = ["Grupo1", "Grupo2", "Grupo3", "Grupo4"];

export const GROUP_NAMES: Record<GroupKey, string> = {
  Grupo1: "Grupo 1",
  Grupo2: "Grupo 2",
  Grupo3: "Grupo 3",
  Grupo4: "Grupo 4",
};

export const getGroupColors = (theme: Theme): Record<GroupKey, string> => ({
  Grupo1: theme.custom.colors.primary.main,
  Grupo2: theme.custom.colors.info.main,
  Grupo3: theme.custom.colors.success.main,
  Grupo4: theme.custom.colors.warning.main,
});
