export interface ComponentButtonProps {
  className?: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  iconName?: string;
  type?: string;
  variant?: "contained" | "outlaned"  | "default"
  notice?:
    | "success"
    | "info"
    | "warning"
    | "error"
    | "disabled"
    | "default"
    | undefined;
  children: string;
}
