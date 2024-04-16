"use client";
import useMeasure from "react-use-measure";
import Typography from "@/components/Typography";
import styles from './WidthInfo.module.css';
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const WidthInfo: React.FC<ComponentPropsWithoutRef<'div'>> = ({ className }) => {
  const [ref, { width }] = useMeasure()
  return (
    <div ref={ref} className={cn("self-center", className, styles.widthInfo)}>
      <div className={styles.widthInfoLine} />
      <Typography
        className="whitespace-nowrap absolute left-1/2 bottom-3 -translate-x-1/2 text-peach"
        aria-hidden="true"
      >
        {Math.round(width)} px
      </Typography>
    </div>
  )
}
