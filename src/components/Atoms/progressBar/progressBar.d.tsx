export interface ComponentProgressBarProps {
  className?: string;
  progessMin: number;
  progessMax: number;
  progress: number;
  size?: "xsmall" | "small" | "medium" | "default";
  notice?:
    | "success"
    | "info"
    | "warning"
    | "error"
    | "disabled"
    | "primary"
    | "secondary"
    | undefined;
}
