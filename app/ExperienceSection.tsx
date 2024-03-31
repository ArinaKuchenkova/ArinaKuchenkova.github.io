import { Badge } from "@/components/Badge";
import { SectionHeading } from "./SectionHeading";
import Typography from "@/components/Typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const ExperienceSection = () =>
  <section className="container mt-24">

    <SectionHeading>
      ОПЫТ РАБОТЫ
    </SectionHeading>

    <div className="grid grid-cols-12 grid-flow-col gap-5">
      <div className="experience-wrapper flex flex-col gap-10 col-start-2 col-end-12">
        <div className="flex gap-10">
          <div className="shrink-0">
            <Badge className="text-brown">2022–2024</Badge>
          </div>
          <div className="flex flex-col gap-4">
            <Typography size="title2" className="font-mak font-bold text-brown">
              Human
            </Typography>
            <Typography as="span" className="m-0">
              Работа в небольшом стартапе, тесное взаимодействие как с руководителем проекта
              (по вопросам UI/UX), так и с командой разработчиков.
              За это время было проделано много разношёрстной работы — от редизайна
              текущих страниц до разработки и проектирования новых пользовательских фич.
            </Typography>
          </div>
        </div>

        <div className="flex gap-10">
          <div className="shrink-0">
            <Badge className="text-brown">2022–2024</Badge>
          </div>
          <div className="flex flex-col gap-4">
            <Typography size="title2" className="font-mak font-bold text-brown">
              Human
            </Typography>
            <Typography as="span" className="m-0">
              Работа в небольшом стартапе, тесное взаимодействие как с руководителем проекта
              (по вопросам UI/UX), так и с командой разработчиков.
              За это время было проделано много разношёрстной работы — от редизайна
              текущих страниц до разработки и проектирования новых пользовательских фич.
            </Typography>
          </div>
        </div>
        <Button variant={"link"} asChild className="mt-5">
          <Link href="/resume">
            Подробнее в Резюме →
          </Link>
        </Button>
      </div>
    </div>
  </section>
