export type TSizes = "xsmall" | "small" | "medium" | "large" | "xlarge";
export type TVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | undefined;

export interface ComponentTypographyProps {
  className?: string;
  font?: string;
  size?: TSizes;
  children: string;
  variant?: TVariants
}