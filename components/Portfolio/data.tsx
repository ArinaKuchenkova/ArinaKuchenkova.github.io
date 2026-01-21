import React from "react"
import { List, ListItem } from "../List/List"
import { Button } from "../ui/button";
import Link from "next/link";
import { GalleryGridType } from "@/graphql/generated";

export enum PortfolioType {
  all = 'all',
  product = 'product',
  site = 'site',
  landing = 'landing',
  creative = 'creative',
  illustration = 'illustration',
}

export const data = [
  {
    title: 'Web3 приложение Human',
    gridType: GalleryGridType,
    type: PortfolioType.product,
    taskTitle: "О проекте",
    implementationTitle: "С чем работала",
    task: <>
      Human – web3 приложение, работающее с новым типом ценных бумаг, который обеспечивает доступ к активам, приносящим дивиденды.
    </>,
    implementation: <>
      Разработка дизайна с нуля — от разработки текстовых и цветовых стилей и базовой системы компонентов до внедрения сложных пользовательских фич.
    </>,
    headerImages: [
      '/images/human/1.webp',
      '/images/human/2.webp',
      '/images/human/3.webp',
      '/images/human/4.webp',
    ],
    images: [
      '/images/human/5.webp',
      '/images/human/6.webp',
      '/images/human/7.webp',
      '/images/human/8.webp',
      '/images/human/9.webp',
      '/images/human/10.webp',
      '/images/human/11.webp',
      '/images/human/12.webp',
      '/images/human/13.webp',
      '/images/human/14.webp',
      '/images/human/15.webp',
      '/images/human/16.webp',
      '/images/human/17.webp',
      '/images/human/18.webp',
      '/images/human/19.webp',
      '/images/human/20.webp',
    ],
  },
  {
    title: 'Web3 приложение rebase',
    type: PortfolioType.product,
    gridType: GalleryGridType.hero,
    taskTitle: "О проекте",
    implementationTitle: "С чем работала",
    task: <>
      <p>rebase – web3 приложение, социальная сеть, где каждый может создавать прогнозы и делать ставки на ожидаемые результаты грядущих событий.</p>
    </>,
    implementation: <>
      <p>Работа с дизайном по нарастающей — от редизайна отдельных компонентов и элементов страниц до внедрения сложных пользовательских фич.</p>
    </>,
    headerImages: [
      '/images/rebase/1.webp',
      '/images/rebase/2.webp',
      '/images/rebase/3.webp',
      '/images/rebase/4.webp',
    ],
    images: [
      '/images/rebase/5.webp',
      '/images/rebase/6.webp',
      '/images/rebase/7.webp',
      '/images/rebase/8.webp',
      '/images/rebase/9.webp',
      '/images/rebase/10.webp',
      '/images/rebase/11.webp',
      '/images/rebase/12.webp',
      '/images/rebase/13.webp',
      '/images/rebase/14.webp',
      '/images/rebase/15.webp',
      '/images/rebase/16.webp',
      '/images/rebase/17.webp',
      '/images/rebase/18.webp',
      '/images/rebase/19.webp',
      '/images/rebase/20.webp',
    ],
  },
  {
    title: 'Сайт-портфолио разработчика',
    type: PortfolioType.site,
    gridType: GalleryGridType.hero,
    headerImages: [
      '/images/zhenya/1.webp',
      '/images/zhenya/2.webp',
      '/images/zhenya/3.webp',
      '/images/zhenya/4.webp',
    ],
    images: [
      '/images/zhenya/5.webp',
      '/images/zhenya/6.webp',
      '/images/zhenya/7.webp',
      '/images/zhenya/8.webp',
      '/images/zhenya/9.webp',
      '/images/zhenya/10.webp',
      '/images/zhenya/11.webp',
      '/images/zhenya/12.webp',
    ],
    task: <>
      <p>
        Создать для разработчика дизайн его сайта-портфолио, который включает в себя главную страницу с основной информацией, блог и страницу блога.
      </p>
      <p>
        В частности:
      </p>
      <br />
      <List>
        <ListItem>
          разработать адаптивный дизайн
        </ListItem>
        <ListItem>
          сделать тёмную и светлую темы
        </ListItem>
        <ListItem>
          добавить микро-анимации
        </ListItem>
        <ListItem>
          предусмотреть быстрый доступ к контактам, пролинковку секций и навигацию в статьях
        </ListItem>
      </List>
    </>,
    implementation: <>
      <p>Для дизайна были разработаны цветовые стили, которые работают как для тёмной, так и для светлой версии.</p>
      <p>В качестве основного шрифта выбран Nunito с большим выбором начертаний, что необходимо для написания статей большого объёма. Начертание акцентного шрифта содержит мотивы шрифтов, используемых в программах для написания кода.</p>
      <p>Макеты для вёрстки и превью для статей выполнены в Figma.</p>
    </>,
  },
  {
    title: 'Мой сайт-портфолио',
    type: PortfolioType.site,
    gridType: GalleryGridType.hero,
    task: <>
      <p>Создать дизайн своего сайта-портфолио, который включает в себя главную страницу с основной информацией и резюме.</p>
      <p>
        В частности:
      </p>
      <br />
      <List>
        <ListItem>
          разработать адаптивный дизайн
        </ListItem>
        <ListItem>
          добавить микро-анимации
        </ListItem>
        <ListItem>
          создать отдельные окна для оформления и презентации примеров проектов, размещения кейсов
        </ListItem>
        <ListItem>
          предусмотреть быстрый доступ к контактам и пролинковку секций
        </ListItem>
      </List>
    </>,
    implementation: <>
      <p>В качестве основного был выбран шрифт с простым геометрическим начертанием Evolventa. В качестве акцентного шрифта выступает экспериментальный контрастный Mak.</p>
      <p>Дизайн лёгкий и воздушный, с ненавязчивыми анимациями и стилистическими элементами, вдохновлёнными художественными академическими мотивами и атмосферой. Также в дизайне используются графические элементы, отсылающие к работе с Figma.</p>
    </>,
    headerImages: [
      '/images/my-site/1.webp',
      '/images/my-site/2.webp',
      '/images/my-site/3.webp',
      '/images/my-site/4.webp',
    ],
    images: [
      '/images/my-site/5.webp',
      '/images/my-site/6.webp',
      '/images/my-site/7.webp',
      '/images/my-site/8.webp',
      '/images/my-site/9.webp',
      '/images/my-site/10.webp',
      '/images/my-site/11.webp',
      '/images/my-site/12.webp',
    ],
  },
  {
    title: 'Лендинг для sGraph',
    type: PortfolioType.landing,
    headerImages: [
      '/images/sgraph/1.webp',
      '/images/sgraph/2.webp',
      '/images/sgraph/3.webp',
      '/images/sgraph/4.webp',
    ],
    images: [
      '/images/sgraph/5.webp',
      '/images/sgraph/6.webp',
      '/images/sgraph/7.webp',
      '/images/sgraph/8.webp',
      '/images/sgraph/9.webp',
      '/images/sgraph/10.webp',
      '/images/sgraph/11.webp',
      '/images/sgraph/12.webp',
    ],
    task: <>
      <p>
        Разработать лендинг для протокола — открытого социального графа на базе блокчейна, который записывает любое событие или отношение в общую сеть Интернета.
      </p>
      <p>
        В частности:
      </p>
      <br />
      <List>
        <ListItem>
          рассказать про преимущества протокола, зачем им пользоваться, и что это даёт
        </ListItem>
        <ListItem>
          разместить все необходимые ссылки, указать контакты, а также дать возможность подписаться на email-рассылку
        </ListItem>
        <ListItem>
          разработать подходящий стиль
        </ListItem>
        <ListItem>
          создать серию иллюстраций для визуального сопровождения в общей тематике (были выбраны 3D фигуры)
        </ListItem>
      </List>
    </>,
    implementation: <>
      <p>
        Для лендинга было выбрано тёмное оформление, что было обусловлено темой и целевой аудиторией.
        Дизайн — минималистичный, с небольшим набором цветов для создания дизайн-решения, демонстрирующего серьёзность проекта.
      </p>
      <p>Макеты для вёрстки были выполнены в Figma.</p>
      <p>
        3D фигуры созданы в Adobe Illustrator в несколько этапов — от модельки до наложения ряда эффектов.
      </p>
      <p>
        Графические элементы — геометрические узоры, бэкграунды для карточек — выполнены в Figma с частичной обработкой в Adobe Illustrator.
      </p>
    </>,
    gridType: GalleryGridType.hero,
  },
  {
    title: 'Лендинги для HumanIPO',
    type: PortfolioType.landing,
    gridType: GalleryGridType.hero,
    task: <>
      <p>
        HumanIPO – быстроразвивающийся и быстроменяющийся стартап. Ниже приведены примеры лендингов для продуктов стартапа на разных этапах развития.
      </p>
      <p>
        Конечный результат сильно отличается от того, что было в самом начале.
      </p>
    </>,
    implementation: <>
      <p>
        Для создания графического оформления — паттерны, бэкграунды, векторные фигуры и элементы, работа с эффектами, обработка изображений и т.д. — использовались Adobe Illustrator, Adobe Photoshop и Figma (основной функционал, плагины, свободные материалы комьюнити и т.д.).
      </p>
      <p>
        Макеты для вёрстки были выполнены в Figma.
      </p>
    </>,
    headerImages: [
      '/images/human-ipo/1.webp',
      '/images/human-ipo/2.webp',
      '/images/human-ipo/3.webp',
      '/images/human-ipo/4.webp',
    ],
    sections: [
      {
        name: 'Лендинг №1',
        images: [
          '/images/human-ipo/5.webp',
          '/images/human-ipo/6.webp',
          '/images/human-ipo/7.webp',
          '/images/human-ipo/8.webp',
          '/images/human-ipo/9.webp',
          '/images/human-ipo/10.webp',
          '/images/human-ipo/11.webp',
          '/images/human-ipo/12.webp',
        ],
      },
      {
        name: 'Лендинг №2',
        images: [
          '/images/human-ipo/13.webp',
          '/images/human-ipo/14.webp',
          '/images/human-ipo/15.webp',
          '/images/human-ipo/16.webp',
          '/images/human-ipo/17.webp',
          '/images/human-ipo/18.webp',
          '/images/human-ipo/19.webp',
          '/images/human-ipo/20.webp',
        ],
      },
      {
        name: 'Лендинг №3',
        images: [
          '/images/human-ipo/21.webp',
          '/images/human-ipo/22.webp',
          '/images/human-ipo/23.webp',
          '/images/human-ipo/24.webp',
          '/images/human-ipo/25.webp',
          '/images/human-ipo/26.webp',
          '/images/human-ipo/27.webp',
          '/images/human-ipo/28.webp',
        ],
      }
    ]
  },
  {
    title: 'Креативы для The Likeness',
    type: PortfolioType.creative,
    gridType: GalleryGridType.normal,
    headerImages: [
      '/images/thelikeness-creative/1.webp',
      '/images/thelikeness-creative/2.webp',
      '/images/thelikeness-creative/3.webp',
      '/images/thelikeness-creative/4.webp',
    ],
    images: [
      '/images/thelikeness-creative/5.webp',
      '/images/thelikeness-creative/6.webp',
      '/images/thelikeness-creative/7.webp',
      '/images/thelikeness-creative/8.webp',
      '/images/thelikeness-creative/9.webp',
      '/images/thelikeness-creative/10.webp',
      '/images/thelikeness-creative/11.webp',
      '/images/thelikeness-creative/12.webp',
      '/images/thelikeness-creative/13.webp',
      '/images/thelikeness-creative/14.webp',
    ],
    task: <>
      <p>Создать креативы для соцсетей платформы The Likeness.</p>
      <p>Необходимо было учесть использование креативов в разных соцсетях, следовательно, была проведена работа с разными форматами. Также сами креативы были различного типа — посты, сторис, карусели и т.д.</p>
    </>,
    implementation: <>
      <p>Оформление креативов создавалось на основе дизайна самого продукта (шрифты, цветовая палитра, графические элементы, эффекты и т.д.).</p>
      <p>Ниже представлены примеры креативов из разных стилистических итераций.</p>
    </>,
  },
  {
    title: 'Креативы для rebase',
    type: PortfolioType.creative,
    task: <>
      <p>Создать креативы для соцсетей платформы rebase.</p>
      <p>Необходимо было учесть использование креативов в разных соцсетях, следовательно, была проведена работа с разными форматами. Также сами креативы были различного типа — посты, карусели, баннеры и т.д.</p>
    </>,
    implementation: <>
      <p>Оформление креативов создавалось на основе дизайна самого продукта на текущий момент (шрифты, цветовая палитра, графические элементы, эффекты и т.д.).</p>
      <p>Ниже представлены примеры креативов из разных стилистических итераций.</p>
    </>,
    gridType: GalleryGridType.normal,
    headerImages: [
      '/images/rebase-creative/1.webp',
      '/images/rebase-creative/2.webp',
      '/images/rebase-creative/3.webp',
      '/images/rebase-creative/4.webp',
    ],
    images: [
      '/images/rebase-creative/5.webp',
      '/images/rebase-creative/6.webp',
      '/images/rebase-creative/7.webp',
      '/images/rebase-creative/8.webp',
      '/images/rebase-creative/9.webp',
      '/images/rebase-creative/10.webp',
      '/images/rebase-creative/11.webp',
      '/images/rebase-creative/12.webp',
      '/images/rebase-creative/13.webp',
      '/images/rebase-creative/14.webp',
    ],
  },
  {
    title: 'Креативы для Human',
    type: PortfolioType.creative,
    task: <>
      <p>Создать креативы для соцсетей платформы Human.</p>
      <p>Необходимо было учесть использование креативов в разных соцсетях, следовательно, была проведена работа с разными форматами. Также сами креативы были различного типа — посты, сторис, баннеры и т.д.</p>
    </>,
    implementation: <>
      <p>Оформление креативов создавалось на основе дизайна самого продукта на текущий момент (шрифты, цветовая палитра, графические элементы, эффекты и т.д.).</p>
      <p>Ниже представлены примеры креативов из разных стилистических итераций.</p>
    </>,
    gridType: GalleryGridType.normal,
    headerImages: [
      '/images/human-creative/1.webp',
      '/images/human-creative/2.webp',
      '/images/human-creative/3.webp',
      '/images/human-creative/4.webp',
    ],
    images: [
      '/images/human-creative/5.webp',
      '/images/human-creative/6.webp',
      '/images/human-creative/7.webp',
      '/images/human-creative/8.webp',
      '/images/human-creative/9.webp',
      '/images/human-creative/10.webp',
      '/images/human-creative/11.webp',
      '/images/human-creative/12.webp',
      '/images/human-creative/13.webp',
      '/images/human-creative/14.webp',
    ],
  },
  {
    title: 'Креативы для HumanIPO',
    type: PortfolioType.creative,
    gridType: GalleryGridType.normal,
    headerImages: [
      '/images/humanipo-creative/1.webp',
      '/images/humanipo-creative/2.webp',
      '/images/humanipo-creative/3.webp',
      '/images/humanipo-creative/4.webp',
    ],
    images: [
      '/images/humanipo-creative/5.webp',
      '/images/humanipo-creative/6.webp',
      '/images/humanipo-creative/7.webp',
      '/images/humanipo-creative/8.webp',
      '/images/humanipo-creative/9.webp',
      '/images/humanipo-creative/10.webp',
      '/images/humanipo-creative/11.webp',
      '/images/humanipo-creative/12.webp',
      '/images/humanipo-creative/13.webp',
      '/images/humanipo-creative/14.webp',
    ],
    task: <>
      <p>Создать креативы для соцсетей платформы HumanIPO.</p>
      <p>Необходимо было учесть использование креативов в разных соцсетях, следовательно, была проведена работа с разными форматами. Также сами креативы были различного типа — посты, сторис и т.д.</p>
    </>,
    implementation: <>
      <p>Оформление креативов создавалось на основе дизайна самого продукта на текущий момент (шрифты, цветовая палитра, графические элементы, эффекты и т.д.).</p>
      <p>Ниже представлены примеры креативов из разных стилистических итераций.</p>
    </>,
  },
  {
    title: 'Примеры векторных иллюстраций',
    implementationTitle: <></>,
    type: PortfolioType.illustration,
    gridType: GalleryGridType.hero,
    taskTitle: <></>,
    task: <>
      <p>На этой странице представлены примеры векторных иллюстраций, бэкграундов и паттернов, выполненных в программе Adobe Illustrator. Больше моих работ можно найти в профиле на Dribbble.</p>
    </>,
    implementation: <>
      <Button variant={"outlined"} className="flex justify-between group min-w-[200px] font-normal">
        <Link href="https://dribbble.com/arina_art" target="_blank">
          <span className="">Dribbble</span>
          <span className="group-hover:translate-x-[6px] transition-transform">→</span>
        </Link>
      </Button>
    </>,
    headerImages: [
      '/images/illustrations/1.webp',
      '/images/illustrations/2.webp',
      '/images/illustrations/3.webp',
      '/images/illustrations/4.webp',
    ],
    images: [
      '/images/illustrations/5.webp',
      '/images/illustrations/6.webp',
      '/images/illustrations/7.webp',
      '/images/illustrations/8.webp',
      '/images/illustrations/9.webp',
      '/images/illustrations/10.webp',
      '/images/illustrations/11.webp',
      '/images/illustrations/12.webp',
    ],
  },
]

export const categoryNameByType: Record<PortfolioType, string> = {
  [PortfolioType.all]: 'Все',
  [PortfolioType.product]: 'Продукты',
  [PortfolioType.site]: 'Сайты',
  [PortfolioType.landing]: 'Лендинги',
  [PortfolioType.creative]: 'Креативы',
  [PortfolioType.illustration]: 'Иллюстрации',
}

export const dataCategories = Object.keys(categoryNameByType) as PortfolioType[];
