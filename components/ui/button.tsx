import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ElementType } from "react";
import { DynamicHTMLProps } from "@/types/dynamicProps";
import { fixedForwardRef } from "@/lib/fixedForwardRef";

const buttonVariants = cva(
  "font-bold inline-flex items-center justify-center rounded-full text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: 'bg-brown text-background hover:bg-light-brown',
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-brown animated-underline !py-1 !px-0",
        outlined: "text-brown border border-peach",
      },
      size: {
        // empty: "",
        default: "py-3 px-6",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ButtonOwnProps = {
  loading?: boolean;
  className?: string;
} & VariantProps<typeof buttonVariants>;


type ButtonProps<As extends ElementType = 'button'> = DynamicHTMLProps<ButtonOwnProps, As>

const ButtonRaw = <
  As extends React.ElementType = "button"
>(
  props: ButtonProps<As>,
  ref: React.Ref<Element>
) => {
    const { as, className, loading, variant, size, ...rest } = props;
    const Tag: React.ElementType = as ?? "button";

    return (
      <Tag
        disabled={loading}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...rest}
      />
    );
  }

ButtonRaw.displayName = "Button";

const Button = fixedForwardRef(ButtonRaw);

export { Button, buttonVariants };
