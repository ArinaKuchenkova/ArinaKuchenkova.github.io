import Typography from "@/components/Typography"
import { cn } from "@/lib/utils"
import { SectionHeading } from "./SectionHeading"
import styles from './AboutSection.module.css';
import { Card } from "@/components/Card";

const WidthInfo = ({ className, width }) => <div className={cn("self-center", className, styles.widthInfo)}>
  <div className={styles.widthInfoLine} />
  <Typography className="absolute left-1/2 bottom-3 -translate-x-1/2 text-peach">{width} px</Typography>
</div>

const AboutItem = ({ title, subtitle, className }) => (
  <div className={cn(className, "px-10 py-5 rounded-full ring-1 ring-peach text-brown flex flex-col gap-1")}>
    <Typography as="span" className="text-title2 font-mak font-bold">
      {title}
    </Typography>
    <Typography as="span" className="text-body1">
      {subtitle}
    </Typography>
  </div>
)

export const AboutSection = () => {
  return <section className="container mt-24">
    <SectionHeading>ОБО МНЕ</SectionHeading>
    <div className="lg:grid lg:grid-cols-12 gap-5 gap-y-[1px]">
      <WidthInfo width={100} className="row-start-1 col-start-1 col-end-2 -mr-5" />
      <AboutItem
        title="3 года"
        subtitle="коммерческого опыта"
        className="row-start-1 col-start-2 col-end-5 mr-auto"
      />
      <WidthInfo width={200} className="row-start-2 col-start-1 col-end-3 -mr-5" />
      <AboutItem
        title="идеи,"
        subtitle="чтобы дизайн вызывал эмоции"
        className="row-start-2 col-start-3 col-end-7 mr-auto"
      />
      <AboutItem
        title="auto layout"
        subtitle="и всё, на чём строится хороший дизайн"
        className="row-start-3 col-start-1 col-end-6 mr-auto"
      />
      <div className="col-start-7 col-end-13 row-start-1 row-end-4">
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
    </div>
  </section>
}
