import { ReactNode, CSSProperties, VideoHTMLAttributes } from "react";
import { SxProps, Theme, ButtonProps } from "@mui/material";

export interface VideoButton {
  label: string;
  onClick?: () => void;
  variant?: ButtonProps["variant"];
  sx?: SxProps<Theme>;
}

export interface VideoBackgroundProps
  extends VideoHTMLAttributes<HTMLVideoElement> {
  videoSrc: string;
  children?: ReactNode;
  title?: string;
  subtitle?: string;
  buttons?: VideoButton[];
  overlayOpacity?: number;
  overlayColor?: string;
  minHeight?: string | number;
  videoStyle?: CSSProperties;
  containerSx?: SxProps<Theme>;
  contentSx?: SxProps<Theme>;
}
