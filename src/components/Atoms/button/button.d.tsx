import { TiconName } from "components/_settings/globalTypes/Types.d";

export interface ComponentButtonProps {
  className?: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  iconName?: TiconName;
  isBlock?: boolean;
  variant?: "outlined" | "text";
  size?: "xsmall" | "small" | "medium" | "default";
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
  children?: string;
}
