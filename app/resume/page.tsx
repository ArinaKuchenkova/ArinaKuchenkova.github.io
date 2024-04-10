import Footer from "@/components/Footer";
import { List, ListItem } from "@/components/List/List";
import Typography, { TypographyLink } from "@/components/Typography"
import { cn } from "@/lib/utils"
import Link from "next/link";
import Aside from "./Aside";
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";

const worksData = [
  {
    name: "Human",
    ages: '2022–2024',
    tasks: [
      <>создание дизайн-систем компонентов (для нескольких продуктов)</>,
      <>разработка концепций и их визуализация (от вайрфреймов до прототипов)</>,
      <>разработка интерфейсов (десктоп + адаптивы)</>,
      <>CJM</>,
      <>
        создание интерактивных прототипов (прототипы разного уровня — как для отработки
        одной конкретной фичи, так и для оценки флоу всего продукта)
      </>,
      <>создание карточек и креативов для соцсетей (иллюстрации, карусели и т.д.)</>,
      <>разработка визуальной идентификации продукта, фирменного стиля (лого, фавикон, баннеры и т.д.)</>,
      <>создание дизайна лендингов</>,
      <>создание лендингов в конструкторе Framer (с адаптивами)</>,
      <>дизайн электронных писем для уведомлений и email-рассылок (+ вёрстка этих писем в конструкторе Stripo)</>,
      <>тесное взаимодействие с командой разработчиков на постоянной основе (не только передача им макетов,
        но и постоянная связь для решения возникающих вопросов, сверки продукта и дизайна и т.д.)
      </>,
      <>проведение дизайн-ревью продукта, контроль качества вёрстки</>,
      <>мануальное тестирование продукта на предмет багов</>,
      <>формулировка и создание списка задач для разработчиков (организация работы по таскам
        и таймлайнам в Google Spreadshets и Gitlab)
      </>,
      <>
        разработка и составление пользовательских сценариев — отработка флоу и дизайна сложных пользовательских
        фич (формы оплаты, загрузка документов, чаты и комментарии с файлами и т.д.)
      </>
    ],
    description: <>
      <p>
        Работа в небольшом стартапе, тесное взаимодействие как с руководителем проекта (по вопросам UI/UX),
        так и с командой разработчиков.
      </p>
      <p>
        За это время было проделано много разношёрстной работы – от редизайна текущих страниц до разработки и проектирования
        новых пользовательских фич и создания дизайна нового продукта с нуля.
      </p>
    </>
  },
  {
    name: "Крайт",
    ages: '2021–2022',
    tasks: [
      <>разработка дизайн-концепта шаблона сайта (подбор шрифтов, фото и изображений, цветовых стилей и т.д.)</>,
      <>работа в конструкторе создания сайтов</>,
      <>обработка и стилизация фото и изображений</>,
    ],
    description: <>
      <p>
        Создавала дизайн-концепты шаблонов сайтов на заданную тематику — одностраничные сайты, лендинги.
      </p>
      <p>
        Получила опыт работы в коммерческой компании, работали по методологии agile (Битрикс 24).
      </p>
    </>
  }
]

const educationData = [
  {
    name: "Санкт-Петербургский государственный институт культуры (бывш. СПбГУКИ)",
    description: "Бакалавр социально-культурной деятельности, факультет социально-культурных технологий",
    ages: "2014–2018"
  },
  {
    name: "Художественная школа им. П.Е. Заболотского",
    description: "Основы академического рисунка, живописи и т.д.",
    ages: "2004–2009"
  }
]

const Resume = () => {
  return (
    <div className="container">
      <div className="flex flex-col md:grid md:grid-cols-12 gap-5 pt-10">
        <Aside />
        <main className="md:col-start-2 md:col-span-8 max-w-[740px] flex flex-col gap-[80px]">
          <section id="about">
            <Typography size="title2" family="mak" className="text-brown font-bold">Обо мне</Typography>
            <p>
              Привет, меня зовут Арина, я занимаюсь UI/UX-дизайном, созданием интерфейсов и графики <strong>более 3-х лет</strong>.
            </p>
            <p>
              Люблю чистоту и организованность (как в проекте, так и в макетах), обоснованность решений
              и эстетичность не в ущерб удобству. Практикую простой дизайн сложных продуктов и консистентные дизайн-решения.
              Ориентируюсь на понятность, удобство, доступность и аккуратность.
            </p>
            <Card className="bg-beige mt-6">
              <div className="flex items-baseline gap-3">
                <span>👋</span>
                <span>
                  <strong>Ищу full-time работу</strong> в компании/ студии/ стартапе и т.д., рассматриваю удалённый или гибридный формат работы.
                </span>
              </div>
            </Card>
          </section>
          <section id="experience">
            <Typography size="title2" family="mak" className="text-brown font-bold">
              Опыт работы
            </Typography>
            {worksData.map(work =>
              <div key={work.name} className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8">
                <div className="shrink-0 self-start">
                  <Badge>{work.ages}</Badge>
                </div>
                <div className="flex flex-col gap-4">
                  <Typography size="title4" className="font-bold text-light-brown">{work.name}</Typography>
                  <Typography as="span" className="m-0">
                    {work.description}
                  </Typography>
                  <div>
                    <Typography className="font-bold">Основные задачи:</Typography>
                    <List className="mt-3">
                      {work.tasks.map((task, index) =>
                        <ListItem key={index}>
                          {task}
                        </ListItem>
                      )}
                    </List>
                  </div>
                </div>
              </div>
            )}
          </section>
          <section id="skills">
            <Typography size="title2" family="mak" className="text-brown font-bold">
              Навыки
            </Typography>
            <Typography size="title4" className="text-light-brown mt-8 font-bold">
              Hard skills
            </Typography>
            <div className="flex flex-col gap-3 mt-4">
              <span>
                <b>Создание пользовательских интерфейсов</b> — проектирование и разработка.
              </span>
              <span>
                <b>Адаптивный дизайн</b> — создаю и отдаю приоритет.
              </span>
              <span>
                <b>Дизайн-системы</b> — умею пользоваться, поддерживать и работать в рамках заданной дизайн-системы.
                Также создаю новые с нуля.
              </span>
              <span>
                <b>Гайдлайны</b> — обращаюсь к лучшим практикам HIG, Google Material Design.
              </span>
              <span>
                <b>User flow</b> — создание и работа, от вайрфреймов до кликабельных прототипов.
              </span>
              <span>
                <b>Работа с типографикой, текстом и композицией.</b>
              </span>
              <span>
                <b>Микро-анимации</b> — создание в Figma, поиск и подбор готовых решений.
              </span>
              <span>
                <b>Тесное взаимодействие с разработчиками</b> — помогаю с созданием переменных для дизайн-токенов, делаю дизайн ревью, помогаю планировать спринт.
              </span>
              <span>
                <b>Работа с типографикой, текстом и композицией.</b>
              </span>
              <span>
                <b>Графический дизайн</b> — создание паттернов, бэкграундов, иллюстраций, иконок, логотипов, баннеры, креативы для соцсетей и т.д.
              </span>
            </div>
            <Card className="bg-beige mt-6 sm:grid sm:grid-cols-3 flex flex-col gap-5">
              <List>
                <ListItem>Figma</ListItem>
                <ListItem>Adobe Illustrator</ListItem>
                <ListItem>Adobe Photoshop</ListItem>
              </List>
              <List>
                <ListItem>Framer</ListItem>
                <ListItem>Stripo</ListItem>
                <ListItem>Miro</ListItem>
              </List>
              <List>
                <ListItem>PostHog</ListItem>
                <ListItem>Gitlab</ListItem>
                <ListItem>Google Spreadsheets</ListItem>
              </List>
            </Card>
            <Typography size="title4" className="text-light-brown mt-8 font-bold">
              Soft skills
            </Typography>
            <div className="flex flex-col gap-3 mt-4">
              <span>Умею работать с большим объёмом информации.</span>
              <span>Эффективно работаю с задачами — ставлю приоритеты, оцениваю время выполнения.</span>
              <span>Есть опыт управления внутренними процессами в проекте.</span>
              <span>Обосновываю и защищаю свои дизайн-решения.</span>
              <span>Внимательность, аккуратность, работа с деталями.</span>
              <span>Быстро осваиваю новое, слежу за новинками и трендами.</span>
            </div>
          </section>
          <section id="education">
            <Typography size="title2" family="mak" className="text-brown font-bold">
              Образование
            </Typography>
            {educationData.map(education =>
              <div key={education.name} className="flex gap-8 mt-8">
                <div className="shrink-0">
                  <Badge>{education.ages}</Badge>
                </div>
                <div className="flex flex-col gap-4">
                  <Typography size="title4" className="font-bold text-light-brown">{education.name}</Typography>
                  <Typography as="span" className="m-0">
                    {education.description}
                  </Typography>
                </div>
              </div>
            )}
          </section>
          <TypographyLink href="/#portfolio">
            <Card className="bg-beige p-6 flex items-center justify-center">
              Портфолио →
            </Card>
          </TypographyLink>
        </main>
      </div>
      <Footer className="mt-[80px]" />
    </div >
  )
}

export default Resume
