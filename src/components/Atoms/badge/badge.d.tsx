import { TBadgeIconName } from "components/_settings/globalTypes/Types.d";

export interface ComponentBadgeProps {
  children: string;
  notice?: "default" | "success" | "error" | "info" | "warning";
  className?: string;
  size?: "xsmall" | "small" | "default";
  iconName?: TBadgeIconName;
}
