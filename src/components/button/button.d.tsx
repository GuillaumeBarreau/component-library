
export interface ComponentButtonProps {
  className?: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  iconName?: string;
  type?: string;
  notice?: "success" | "info" | "warning" | "error" | "disabled" | "default" | undefined;
  children: string;
}
