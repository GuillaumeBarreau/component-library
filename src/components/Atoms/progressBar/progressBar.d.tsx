export interface ComponentProgressBarProps {
  className?: string;
  progress: number;
  size?: "xsmall" | "small" | "medium" | "default";
  notice?:
    | "default"
    | "success"
    | "info"
    | "warning"
    | "error"
    | "disabled"
    | "primary"
    | "secondary"
    | undefined;
}
