import { ReactNode } from "react";

export interface ComponentLinkProps {
  children: string & ReactNode;
  className?: string;
  ref?: string;
  target?: "_blank" | "_parent" | "_top" | "_seft";
  disabled: boolean;
  decorated: boolean;
  href?: string;
}
