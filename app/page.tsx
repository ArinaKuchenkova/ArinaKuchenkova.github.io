import { Badge, BadgeProps } from "@/components/Badge";
import { Card } from "@/components/Card";
import Typography, { TypographyLink } from "@/components/Typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import IconStar from '@/icons/star.svg'
import { PromoSection } from "./PromoSection";
import { AboutSection } from "./AboutSection";
import { SectionHeading } from "./SectionHeading";

const ContactsBadge: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) =>
  <Badge as={Link} href={href} size="large" className="sm:min-w-[200px] max-w-52 text-background flex justify-between">
    <span>{children}</span>
    <span>→</span>
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
      <ContactsBadge href="#">
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

const ContactsSection = () => {
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

const PortfolioSection = () =>
  <section className="container">
    <Typography family="mak" className="font-full-width font-bold ">Portfolio</Typography>
  </section>

const SectionItems = ({ items }) => {
  return (
    <div className="flex flex-wrap items-center gap-1">
      {items.map(i => <Badge size="large" key={i} className="flex gap-1" style={{ borderColor: 'rgba(37, 29, 21, 0.12)' }}>
        <IconStar className="size-5" /> <Typography className="text-body1">{i}</Typography>
      </Badge>)}
    </div>
  )
}


const SoftSection = () =>
  <section className="container mt-24">
    <SectionHeading>
      РАБОЧИЙ СОФТ
    </SectionHeading>
    <div className="flex flex-col gap-3 soft-wrapper lg:grid lg:grid-cols-4 lg:grid-flow-col lg:gap-5">
      <Card className="col-span-2 row-span-2 row-start-1 bg-[#E0D5CA]">
        <Typography className="text-title2 text-brown font-mak mb-3">
          Figma
        </Typography>
        <SectionItems items={[
          "Системы компонентов",
          "Создание интерфейсов",
          "Разработка пользовательских сценариев",
          "Проработка адаптивного дизайна",
          "Анимации",
          "Прототипирование",
          "Создание изображений",
          "Работа с векторными фигурами",
          "Отрисовка иконок",
          "Создание презентаций",
          "Подготовка макетов к вёрстке"
        ]} />
      </Card>
      <Card className="col-span-1 row-start-1 bg-beige">
        <Typography className="text-title2 text-brown font-mak mb-3">
          Adobe Illustrator
        </Typography>
        <SectionItems items={[
          "Векторные объекты",
          "Логотипы",
          "Иллюстрации"
        ]} />
      </Card>
      <Card className="col-span-1 row-start-1 bg-[#CFDCE7]">
        <Typography className="text-title2 text-brown font-mak mb-3">
          Adobe Photoshop
        </Typography>
        <SectionItems items={[
          "Растровые объекты",
          "Обработка фото",
          "Иллюстрации"
        ]} />
      </Card>
      <Card className="col-span-2 col-start-3 row-start-2 bg-peach">
        <Typography className="text-title2 text-brown font-mak mb-3">
          Вспомогательный софт
        </Typography>
        <div>
          <Typography>
            <b>Framer</b> – конструктор для создания сайтов
          </Typography>
          <Typography>
            <b>Stripo</b> – вёрстка писем для email-рассылок
          </Typography>
          <Typography>
            <b>Miro</b> – разработка структуры проекта, работа с вайрфреймами
          </Typography>
        </div>
      </Card>
    </div>
  </section>


export default function Home() {
  return (
    <>
      <PromoSection />
      <AboutSection />
      <SoftSection />
      <PortfolioSection />
      <ContactsSection />
    </>
  );
}
