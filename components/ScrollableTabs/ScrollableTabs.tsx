"use client";
import { cn } from "@/lib/utils";
// TODO: Add composition

import { useEffect, useRef } from "react";
import styles from './ScrollableTabs.module.css';

type TabItem<T> = {
  key: T;
  label: React.ReactNode;
  // children: React.ReactNode;
}

type ScrollableTabsProps<T> = {
  activeTab: T;
  onChange: (tabKey: T) => void;
  items: TabItem<T>[];
  className?: string;
}

export const ScrollableTabs = <T extends string,>({ items, activeTab, onChange, className }: ScrollableTabsProps<T>) => {
  const wrapperRef = useRef<HTMLElement>(null);
  const itemsRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const active = itemsRefs.current.find(i => i.getAttribute('data-key') === activeTab);
    const rect = active?.getBoundingClientRect();
    if (!rect) {
      return
    }
    wrapperRef.current?.scrollTo({
      left: rect.left - 16,
      behavior: 'smooth'
    })
    console.log(active);
  }, [activeTab])

  return (
    <nav className={cn("scroll-m-4 sm:w-full overflow-x-auto flex gap-6 scroll justify-between", styles.tabsWrapper, className)} ref={wrapperRef}>
      {items.map((item, index) => (
        <button
          onClick={() => onChange(item.key)}
          data-key={item.key}
          className={cn("border-b text-[1rem] sm:text-body1 hover:text-brown transition-colors", {
            "text-foreground border-transparent": activeTab !== item.key,
            "border-b border-brown text-brown": activeTab === item.key
          })}
          ref={element => {
            if (element) {
              itemsRefs.current[index] = element
            }
          }}
          key={item.key}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}
