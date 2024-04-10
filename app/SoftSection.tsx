import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import Typography, { TypographyLink } from "@/components/Typography";
import IconStar from '@/icons/star.svg'
import { SectionHeading } from "./SectionHeading";
import { ComponentPropsWithoutRef } from "react";

const SectionItems: React.FC<ComponentPropsWithoutRef<'div'> & {
  items: string[]
}> = ({ items }) => (
  <div className="flex flex-wrap items-center gap-1">
    {items.map(i => <Badge size="large" key={i} className="flex gap-1" style={{ borderColor: 'rgba(37, 29, 21, 0.12)' }}>
      <IconStar className="size-5" /> <Typography className="text-body1">{i}</Typography>
    </Badge>)}
  </div>
)

export const SoftSection = () =>
  <section className="container" id="soft">
    <SectionHeading>
      РАБОЧИЙ СОФТ
    </SectionHeading>
    <div className="flex flex-col gap-3 soft-wrapper lg:grid lg:grid-cols-4 lg:grid-flow-col lg:gap-5">
      <Card className="col-span-2 row-span-2 row-start-1 bg-[#E0D5CA]">
        <Typography className="text-title2 text-brown font-mak mb-3 font-bold leading-tight">
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
        <Typography className="text-title2 text-brown font-mak mb-3 font-bold leading-tight">
          Adobe Illustrator
        </Typography>
        <SectionItems items={[
          "Векторные объекты",
          "Логотипы",
          "Иллюстрации"
        ]} />
      </Card>
      <Card className="col-span-1 row-start-1 bg-[#CFDCE7]">
        <Typography className="text-title2 text-brown font-mak mb-3 font-bold leading-tight">
          Adobe Photoshop
        </Typography>
        <SectionItems items={[
          "Растровые объекты",
          "Обработка фото",
          "Иллюстрации"
        ]} />
      </Card>
      <Card className="col-span-2 col-start-3 row-start-2 bg-peach">
        <Typography className="text-title2 text-brown font-mak mb-3 font-bold leading-tight">
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
