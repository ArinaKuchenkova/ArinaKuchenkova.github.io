import { Badge } from "@/components/Badge";
import Typography from "@/components/Typography";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

const ContactsBadge: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) =>
  <Badge as={Link} href={href} size="large" className="group sm:min-w-[200px] max-w-52 text-background flex justify-between">
    <span>{children}</span>
    <span className="group-hover:translate-x-[6px] transition-transform">→</span>
  </Badge>

const Contacts = () => {
  return <nav className="flex flex-col justify-between mt-10 lg:grid lg:grid-cols-12 gap-3">
    <div className="flex flex-col gap-3 col-start-1 col-end-3">
      <ContactsBadge href="#">
        Behance
      </ContactsBadge>
      <ContactsBadge href="#">
        Dribbble
      </ContactsBadge>
    </div>
    <div className="flex flex-col gap-3 col-start-4 col-end-6">
      <ContactsBadge href="#">
        Хабр карьера
      </ContactsBadge>
      <ContactsBadge href="#">
        hh.ru
      </ContactsBadge>
    </div>
    <div className="flex flex-col gap-3 col-start-7 col-end-9">
      <ContactsBadge href="#">
        Telegram
      </ContactsBadge>
      <ContactsBadge href="#">
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
    <div className="flex justify-between items-center">
      <Typography size="body2" className="text-background">
        Designed with ❤️ by me. Developed by <Typography as={Link} href="https://zhenya.dev/" target="_blank" className="text-background font-bold">Zhenya</Typography>.
      </Typography>
      <Typography size="body2" className="text-background">
        © Кученкова Арина, 2024
      </Typography>
    </div>
  </footer>
)

export const ContactsSection = () => {
  return (
    <section className="bg-brown pt-24 text-background footer">
      <div className="container">
        <Typography family="mak" size="title1" className="font-bold">КОНТАКТЫ</Typography>
        <Typography className="block mt-14 max-w-xl">
          Связаться со мной можно по почте kuchenkova.av@yandex.ru или через любой социальный профиль, указанный ниже.
        </Typography>
        <Contacts />
        <Footer className="mt-44 text-background" />
      </div>
    </section>
  )
}
