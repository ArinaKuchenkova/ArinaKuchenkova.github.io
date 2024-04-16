import { Badge } from "@/components/Badge";
import Typography from "@/components/Typography";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { SectionHeading } from "./SectionHeading";

const ContactsBadge: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) =>
  <Badge as={Link} href={href} target="_blank" size="large" className="group sm:min-w-[200px] max-w-52 text-background flex justify-between">
    <span>{children}</span>
    <span className="group-hover:translate-x-[6px] transition-transform">→</span>
  </Badge>

const Contacts = () => {
  return <nav className="flex flex-col justify-between mt-10 lg:grid lg:grid-cols-12 gap-3">
    <div className="flex flex-col gap-3 col-start-1 col-end-3">
      <ContactsBadge href="https://www.behance.net/arina-art">
        Behance
      </ContactsBadge>
      <ContactsBadge href="https://dribbble.com/arina_art">
        Dribbble
      </ContactsBadge>
    </div>
    <div className="flex flex-col gap-3 col-start-4 col-end-6">
      <ContactsBadge href="https://career.habr.com/chrystarina">
        Хабр карьера
      </ContactsBadge>
      <ContactsBadge href="https://spb.hh.ru/resume/633c4a8cff096fb4290039ed1f787554544158">
        hh.ru
      </ContactsBadge>
    </div>
    <div className="flex flex-col gap-3 col-start-7 col-end-9">
      <ContactsBadge href="https://t.me/chrysta_rina">
        Telegram
      </ContactsBadge>
      <ContactsBadge href="mailto:kuchenkova.av@yandex.ru">
        Email
      </ContactsBadge>
    </div>
    <div className="flex flex-col gap-3 col-start-10 col-end-12">
      <ContactsBadge href="/resume">
        Резюме
      </ContactsBadge>
    </div>
  </nav>
}

const Footer: React.FC<ComponentPropsWithoutRef<'footer'>> = ({ className, ...props }) => (
  <footer className={cn("flex flex-col gap-3 py-6", className)} {...props}>
    <Typography size="title4" family="mak" className="text-background font-bold">@rina</Typography>
    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
      <Typography size="body2" className="text-background">
        Designed with ❤️ by me. Developed by <Typography as={Link} href="https://zhenya.dev/" target="_blank" className="text-background font-bold">Zhenya</Typography>.
      </Typography>
      <Typography size="body2" className="text-background opacity-60">
        © Кученкова Арина, {new Date(Date.now()).getFullYear()}
      </Typography>
    </div>
  </footer>
)

export const ContactsSection = () => {
  return (
    <section className="bg-brown pt-20 sm:pt-24 text-background footer" id="contacts">
      <div className="container">
        <SectionHeading className="!text-background">
          КОНТАКТЫ
        </SectionHeading>
        <Typography className="block mt-10 max-w-xl">
          Связаться со мной можно по почте <b>kuchenkova.av@yandex.ru</b> или через любой социальный профиль, указанный ниже.
        </Typography>
        <Contacts />
        <Footer className="mt-20 sm:mt-44 text-background" />
      </div>
    </section>
  )
}
