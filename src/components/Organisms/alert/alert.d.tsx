import { ReactNode } from "react";

export interface ComponentAlertProps {
  children: React.ReactNode;
  className?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
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
