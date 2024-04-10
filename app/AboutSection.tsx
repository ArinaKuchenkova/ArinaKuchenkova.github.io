import Typography from "@/components/Typography"
import { cn } from "@/lib/utils"
import { SectionHeading } from "./SectionHeading"
import { Card } from "@/components/Card";
import { WidthInfo } from "@/components/WidthInfo/WidthInfo";
import { ComponentPropsWithoutRef } from "react";

type AboutItemProps = ComponentPropsWithoutRef<'div'> & {
  title: React.ReactNode,
  subtitle: React.ReactNode,
}

const AboutItem: React.FC<AboutItemProps> = ({ title, subtitle, className }) => (
  <div className={cn(className, "px-6 py-3 md:px-10 md:py-5 rounded-full ring-1 ring-peach text-brown flex flex-col md:gap-1")}>
    <Typography as="span" className="text-title2 font-mak font-bold leading-tight">
      {title}
    </Typography>
    <Typography as="span" className="text-body2 sm:text-body1 leading-tight">
      {subtitle}
    </Typography>
  </div>
)

export const AboutSection = () => {
  return <section className="container" id="about">
    <SectionHeading>ОБО МНЕ</SectionHeading>
    <div className="grid grid-cols-12 gap-x-1 md:gap-x-5 gap-y-[1px]">
      <div className="col-start-1 col-end-13 md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-4 mb-8">
        <Typography>Привет,</Typography>
        <Typography>
          меня зовут Арина, я занимаюсь веб-дизайном, созданием интерфейсов
          и иллюстраций <b>более 3-х лет.</b>
        </Typography>
        <Typography>
          Люблю чистоту и организованность (как в проекте, так и в макетах),
          обоснованность решений и эстетичность не в ущерб удобству.
          Практикую простой дизайн сложных продуктов и доступные дизайн-решения.
          Ориентируюсь на понятность, удобство и аккуратность.
        </Typography>
        <Card className="bg-beige mt-10">
          <b>Ищу full-time работу</b> в компании/ студии/ стартапе и т.д., рассматриваю удалённый или гибридный формат работы.
        </Card>
      </div>
      <WidthInfo className="md:row-start-1 col-start-1 col-end-3 md:col-end-2 md:-mr-5" />
      <AboutItem
        title="3 года"
        subtitle="коммерческого опыта"
        className="md:row-start-1 col-start-3 md:col-start-2 col-end-12 md:col-end-5 mr-auto"
      />
      <WidthInfo className="md:row-start-2 col-start-1 col-end-5 md:col-end-3 md:-mr-5" />
      <AboutItem
        title="идеи,"
        subtitle="чтобы дизайн вызывал эмоции"
        className="md:row-start-2 col-start-5 col-end-13 md:col-start-3 md:col-end-7 mr-auto"
      />
      <AboutItem
        title="auto layout"
        subtitle="и всё, на чём строится хороший дизайн"
        className="md:row-start-3 col-start-1 col-end-11 md:col-start-1 md:col-end-6 mr-auto"
      />
    </div>
  </section>
}
