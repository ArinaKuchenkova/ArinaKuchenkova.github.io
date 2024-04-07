import Typography, { TypographyProps } from "@/components/Typography";
import { cn } from "@/lib/utils";

export const SectionHeading: React.FC<TypographyProps> = ({ children, className, ...props }) =>
  <Typography family="mak" className={cn("font-bold text-title1 mb-8 md:mb-10 block text-brown", className)} {...props}>
    {children}
  </Typography>
