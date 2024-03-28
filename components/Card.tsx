import { cn } from "@/lib/utils";

type CardProps = {
  children?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={cn("p-6 rounded-[20px]", className)}>{children}</div>
)
