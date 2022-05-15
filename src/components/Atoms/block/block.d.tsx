export type TVariants = "div" | "section" | "main" | undefined;

export interface ComponentBlockProps {
  children?: React.ReactNode;
  className?: string;
  variant?: TVariants;
}
