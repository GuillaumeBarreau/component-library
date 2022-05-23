import { ReactNode, Ref } from "react";

export interface ComponentLinkProps {
  children: string & ReactNode;
  className?: string;
  notice?: "default" | "success" | "error" | "info" | "warning" | "disabled";
  target?: "_blank" | "_parent" | "_top" | "_seft";
  decorated?: boolean;
  href?: string;
  forwardedRef?: Ref<HTMLAnchorElement>;
}
