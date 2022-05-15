import { TiconName } from "components/_settings/globalTypes/Types.d";

export interface ComponentButtonProps {
  className?: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  iconName?: TiconName;
  type?: string;
  isBlock?: boolean;
  variant?: "contained" | "outlaned" | "default";
  size?: "xsmall" | "small" | "medium";
  notice?:
    | "success"
    | "info"
    | "warning"
    | "error"
    | "disabled"
    | "primary"
    | "secondary"
    | "default"
    | undefined;
  children: string;
}
