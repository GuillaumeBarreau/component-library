import { INotice } from "components/_settings/globalTypes/Types.d";

export type IProgressBarProps =
  | { progressBar?: number; progressBarLabel?: never }
  | { progressBar: number; progressBarLabel?: boolean }
  | { progressBarLabel: true; progressBar: number };

export interface ComponentAlertProps {
  children: React.ReactNode;
  className?: string;
  dismissible?: boolean;
  notice?: INotice;
}
