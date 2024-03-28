import IconBulletPoint from '@/icons/bullet-point.svg';
import styles from './List.module.css';
import clsx from 'clsx';
import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef } from 'react';

export const List: React.FC<ComponentPropsWithoutRef<'ul'>> = ({ children, className, ...props }) =>
  <ul className={cn('flex flex-col gap-2', className)} {...props}>
    {children}
  </ul>

export const ListItem: React.FC<ComponentPropsWithoutRef<'li'>> = ({ children, className, ...props }) =>
  <li className={cn('flex gap-[6px] items-baseline', className)} {...props}>
    <span className={clsx("inline-flex items-center", styles.icon)}>
      <IconBulletPoint className={"size-4 flex-shrink-0"} />
    </span>
    <span>{children}</span>
  </li>
