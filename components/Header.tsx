"use client"
import { usePathname } from "next/navigation"
import Typography from "./Typography";
import Link from "next/link";
import MenuIcon from '@/components/MenuIcon/MenuIcon';
import { useState } from "react";
import { cn } from "@/lib/utils";
import IconEmail from '@/icons/email.svg';
import IconBehance from '@/icons/behance.svg';
import IconTelegram from '@/icons/telegram.svg';
import IconDribbble from '@/icons/dribbble.svg';
import { lock, unlock } from 'tua-body-scroll-lock';

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
    unlock();
  }

  return (
    <header className={cn("container w-full mx-auto py-6 px-4 h-[100px] flex justify-between items-center lg:grid grid-cols-12 grid-flow-col gap-5", {
      "fixed top-0 left-0 bg-background z-50": menuOpen
    })}>
      <Typography as={Link} href="/" size="title4" family="mak" className="text-brown font-bold">@rina</Typography>
      <MenuIcon className={cn("sm:hidden", {
        "hidden": pathname.startsWith('/resume'),
      })} open={menuOpen} onClick={() => {
        if (!menuOpen) {
          lock()
        } else {
          unlock()
        }
        setMenuOpen(open => !open)
      }} />
      <div className={cn({
        "hidden": pathname.startsWith('/resume'),
        "contents": !menuOpen,
        "fixed top-[100px] w-screen left-0 h-screen bg-background z-50 p-5": menuOpen
      })}>
        <nav className={cn("hidden col-start-7 col-end-13 sm:flex gap-3 justify-between", {
          "!flex flex-col !justify-start items-start gap-6": menuOpen
        })}>
          <Link href="/#about" onClick={handleLinkClick} className="animated-underline">
            Обо мне
          </Link>
          <Link href="/#soft" onClick={handleLinkClick} className="animated-underline">
            Рабочий софт
          </Link>
          <Link href="/#experience" onClick={handleLinkClick} className="animated-underline">
            Опыт работы
          </Link>
          <Link href="/#portfolio" onClick={handleLinkClick} className="animated-underline">
            Портфолио
          </Link>
          <Link href="/#contacts" onClick={handleLinkClick} className="animated-underline">
            Контакты
          </Link>
        </nav>
        <div className={cn("gap-2 pt-6 mt-6 border-t border-peach", {
          "flex": menuOpen,
          "hidden": !menuOpen
        })}>
          <Link href="mailto:kuchenkova.av@yandex.ru" target="_blank">
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
      </div>

    </header>
  )
}

export default Header
