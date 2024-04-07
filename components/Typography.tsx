import { cn } from "@/lib/utils";
import { DynamicHTMLProps } from "@/types/dynamicProps";
import clsx from "clsx";
import Link from "next/link";
import { ElementType, FC, HTMLAttributes, ReactNode } from "react";

enum FontSize {
  'body1' = 'body1',
  'body2' = 'body2',
  'title1' = 'title1',
  'title2' = 'title2',
  'title3' = 'title3',
  'title4' = 'title4',
}

export type TypographyProps = HTMLAttributes<HTMLOrSVGElement> & {
  size?: keyof typeof FontSize;
  family?: 'mak' | 'evolventa'
  className?: string;
  children: ReactNode;
}

const Typography = <T extends ElementType = "p">({ as, size, family, className, children, ...otherProps }: DynamicHTMLProps<TypographyProps, T>) => {
  const Tag: ElementType = as || 'p';

  return (
    <Tag {...otherProps} className={clsx({
      'text-body1': size === 'body1',
      'text-body2': size === 'body2',
      'text-title1': size === 'title1',
      'text-title2': size === 'title2',
      'text-title3': size === 'title3',
      'text-title4': size === 'title4',
      'font-mak': family === 'mak',
      'font-evolventa': family === 'evolventa',
    }, className)}>
      {children}
    </Tag>
  )
}

type TypographyLinkProps = TypographyProps & {
  outlined?: boolean
}

export const TypographyLink = ({ children, as, className, outlined, ...props }: DynamicHTMLProps<TypographyLinkProps, typeof Link>) => {
  const Tag: ElementType = Link;

  return <Tag className={cn("text-brown font-bold", {
    "border-b border-brown": outlined
  }, className)} {...props}>{children}</Tag>
}

export default Typography
