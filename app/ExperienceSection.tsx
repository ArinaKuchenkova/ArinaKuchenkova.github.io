import { Badge } from "@/components/Badge";
import { SectionHeading } from "./SectionHeading";
import Typography from "@/components/Typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const ExperienceSection = () =>
  <section className="container" id="experience">

    <SectionHeading>
      ОПЫТ РАБОТЫ
    </SectionHeading>

    <div className="grid grid-cols-12 grid-flow-col gap-5">
      <div className="experience-wrapper flex flex-col gap-10 col-start-1 col-end-13 sm:col-start-2 sm:col-end-12">
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
          <div className="shrink-0 self-start">
            <Badge className="text-brown">2024–н.в.</Badge>
          </div>
          <div className="flex flex-col gap-4">
            <Typography size="title2" className="font-mak font-bold text-brown">
              Userstory
            </Typography>
            <Typography as="span" className="m-0">
              Работа в студии дизайна. Начинала с работы над визуалом, в дальнейшем подключилась к разработке дизайн-концепций и проектированию.
              <br/><br/>
              За это время успела поработать над очень непохожими друг на друга проектами с разными бизнес-требованиями и целевыми аудиториями. Улучшала существующие UX/UI-решения, предлагала свои, общалась с заказчиками, защищала и презентовала дизайн.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
          <div className="shrink-0 self-start">
            <Badge className="text-brown">2022–2024</Badge>
          </div>
          <div className="flex flex-col gap-4">
            <Typography size="title2" className="font-mak font-bold text-brown">
              Human
            </Typography>
            <Typography as="span" className="m-0">
              Работа в небольшом стартапе, тесное взаимодействие как с руководителем проекта
              (по вопросам UX/UI), так и с командой разработчиков.
              За это время было проделано много разношёрстной работы — от редизайна
              текущих страниц до разработки и проектирования новых пользовательских фич.
            </Typography>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
          <div className="shrink-0 self-start">
            <Badge className="text-brown">2021–2022</Badge>
          </div>
          <div className="flex flex-col gap-4">
            <Typography size="title2" className="font-mak font-bold text-brown">
              Крайт
            </Typography>
            <Typography as="span" className="m-0">
              Создавала дизайн-концепты шаблонов сайта на заданную тематику, одностраничные сайты, лендинги.
            </Typography>
          </div>
        </div>
        <Button variant={"link"} asChild className="mt-5 self-center">
          <Link href="/resume">
            Подробнее в Резюме →
          </Link>
        </Button>
      </div>
    </div>
  </section>
