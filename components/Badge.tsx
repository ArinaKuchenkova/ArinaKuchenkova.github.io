import { cn } from "@/lib/utils";
import { DynamicHTMLProps } from "@/types/dynamicProps";
import { cva } from "class-variance-authority";
import { ElementType } from "react";

export type BadgeProps = {
  children?: React.ReactNode;
  className?: string;
  size?: 'normal' | 'large';
}

export const Badge = <T extends ElementType = 'span'>({ children, size, as, postfix, className, ...props }: DynamicHTMLProps<BadgeProps, T>) => {
  const Tag: ElementType = as || 'span';

  return (
    <Tag className={cn(badgeClasses({ size, withPostfix: !!postfix }), className)} {...props}>
      {children}
    </Tag>
  )
}

const badgeClasses = cva(["flex items-center border border-peach"], {
  variants: {
    size: {
      normal: "py-2 px-4 rounded-[20px] text-body2",
      large: "py-[8px] min-h-[42px] px-[20px] rounded-[100px] text-body1",
    },
    withPostfix: {
      true: "flex justify-between",
    },
  },
  defaultVariants: {
    size: "normal",
    withPostfix: false,
  },
});
