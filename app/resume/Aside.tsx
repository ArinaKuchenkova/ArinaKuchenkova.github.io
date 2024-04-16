"use client";
import Typography, { TypographyLink } from "@/components/Typography";
import clsx from "clsx";
import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import IconEmail from '@/icons/email.svg';
import IconBehance from '@/icons/behance.svg';
import IconTelegram from '@/icons/telegram.svg';
import IconDribbble from '@/icons/dribbble.svg';

export const useThrottledCallback = <
  Props extends readonly unknown[],
  Return,
  Cb extends (...props: Props) => Return
>(cb: Cb, deps: unknown[], wait: number) => {
  const state = useRef<{ tmpProps: Props, timeoutId?: NodeJS.Timeout }>({
    tmpProps: [] as unknown as Props,
  });

  useEffect(() => {
    const timeoutId = state.current.timeoutId;
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  }, [state])

  const throttledCb = useCallback((...props: Props) => {
    state.current.tmpProps = props

    if (state.current.timeoutId) {
      return;
    }

    state.current.timeoutId = setTimeout(() => {
      state.current.timeoutId = undefined;
      cb(...state.current.tmpProps);
    }, wait)
  }, deps)

  return throttledCb// as (props: Props) => Return;
}

export type Heading = {
  id: string;
  text: string;
  element: HTMLElement;
}

const clamp = (value: number) => Math.max(0, value);

// Check if number is between two values
const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil;

const useScrollSpy = (ids: string[], offset: number = 0) => {
  const [activeId, setActiveId] = useState(ids[0]);
  const prevRef = useRef<string>(ids[0]);

  const listener = useThrottledCallback(() => {
    const scroll = window.scrollY;

    const data = ids.map(id => {
      const element = document.getElementById(id) as HTMLElement;
      const rect = element.getBoundingClientRect();

      return {
        id,
        element,
        rect
      }
    })

    const position = ids
      .map((id) => {
        const element = document.getElementById(id);

        if (!element) return { id, top: -1, bottom: -1 };

        const rect = element.getBoundingClientRect();
        const top = clamp(rect.top + scroll - offset);
        const bottom = clamp(rect.bottom + scroll - offset);

        return { id, top, bottom };
      })
      .find(({ top, bottom }) => isBetween(scroll, top, bottom));

    if (position?.id) {
      prevRef.current = position?.id;
    }

    setActiveId(prevRef.current);
  }, [], 200);

  useEffect(() => {
    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [ids, listener, offset]);

  return activeId;
};

const navMenuItems = [
  {
    label: 'Обо мне',
    sectionId: 'about',
  },
  {
    label: 'Опыт работы',
    sectionId: 'experience'
  },
  {
    label: 'Навыки',
    sectionId: 'skills'
  },
  {
    label: 'Образование',
    sectionId: 'education'
  },
]

const Aside = () => {
  const activeSectionId = useScrollSpy(navMenuItems.map(i => i.sectionId), 200);

  return (
    <aside className="md:col-start-10 md:col-end-13 md:sticky top-5 self-start shrink-0 md:order-last flex flex-col gap-6 md:gap-10">
      <picture className="block size-36 bg-beige rounded-full overflow-hidden">
        <img src="/avatar.png" />
      </picture>
      <nav>
        <ul className="flex flex-col gap-3">
          {navMenuItems.map(item =>
            <li key={item.sectionId}>
              <Link href={'#' + item.sectionId} className={clsx("pb-1 hover:text-brown transition-colors", {
                'text-brown border-b border-brown': item.sectionId === activeSectionId
              })}>
                {item.label}
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <TypographyLink className="self-start animated-underline" href="/#portfolio">Портфолио →</TypographyLink>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <Link href="mailto:kuchenkova.av@yandex.ru">
            <IconEmail className="size-8 text-brown hover:text-light-brown transition-colors" />
          </Link>
          <Link href="https://t.me/chrysta_rina" target="_blank">
            <IconTelegram className="size-8 text-brown hover:text-light-brown transition-colors" />
          </Link>
          <Link href="https://www.behance.net/arina-art" target="_blank">
            <IconBehance className="size-8 text-brown hover:text-light-brown transition-colors" />
          </Link>
          <Link href="https://dribbble.com/arina_art" target="_blank">
            <IconDribbble className="size-8 text-brown hover:text-light-brown transition-colors" />
          </Link>
        </div>
        <Typography size="body2">г. Санкт-Петербург</Typography>
      </div>

    </aside>
  )
}

export default Aside
