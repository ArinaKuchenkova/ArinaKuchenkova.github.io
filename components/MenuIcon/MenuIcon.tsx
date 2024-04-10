import { ComponentPropsWithoutRef } from 'react'
import styles from './MenuIcon.module.css'
import { cn } from '@/lib/utils'

type MenuIconProps = {
  open: boolean;
} & ComponentPropsWithoutRef<'button'>;

const SvgComponent: React.FC<MenuIconProps> = ({ className, ...props }) => (
  <button className={cn('size-8 py-2 px-1', className)} {...props}>
    <div className={cn(styles.icon, {
      [styles.open]: props.open
    })}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </button>
)

export default SvgComponent
