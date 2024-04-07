import React from "react"
import { List, ListItem } from "../List/List"

export enum PortfolioType {
  product = 'product',
  site = 'site',
  landing = 'landing',
  creative = 'creative',
  illustration = 'illustration',
}

export const data = [
  {
    name: 'Web3 приложение Human',
    description: 'TODO',
    type: PortfolioType.product,
    headerImages: [
      '/images/sgraph/1.webp',
      '/images/sgraph/2.webp',
      '/images/sgraph/3.webp',
      '/images/sgraph/4.webp',
    ],
    modalImages: [
      '/images/sgraph/5.webp',
      '/images/sgraph/6.webp',
      '/images/sgraph/7.webp',
      '/images/sgraph/8.webp',
      '/images/sgraph/9.webp',
      '/images/sgraph/10.webp',
      '/images/sgraph/11.webp',
      '/images/sgraph/12.webp',
    ],
  },
  {
    name: 'Web3 приложение rebase',
    description: 'TODO',
    type: PortfolioType.product,
    headerImages: [
      '/images/sgraph/1.webp',
      '/images/sgraph/2.webp',
      '/images/sgraph/3.webp',
      '/images/sgraph/4.webp',
    ],
    modalImages: [
      '/images/sgraph/5.webp',
      '/images/sgraph/6.webp',
      '/images/sgraph/7.webp',
      '/images/sgraph/8.webp',
      '/images/sgraph/9.webp',
      '/images/sgraph/10.webp',
      '/images/sgraph/11.webp',
      '/images/sgraph/12.webp',
    ],
  },
  // {
  //   name: 'Web3 приложение Steaking',
  //   description: 'TODO',
  //   type: PortfolioType.product,
  //   headerImages: [
  //     '/images/sgraph/1.webp',
  //     '/images/sgraph/2.webp',
  //     '/images/sgraph/3.webp',
  //     '/images/sgraph/4.webp',
  //   ],
  //   modalImages: [
  //     '/images/sgraph/5.webp',
  //     '/images/sgraph/6.webp',
  //     '/images/sgraph/7.webp',
  //     '/images/sgraph/8.webp',
  //     '/images/sgraph/9.webp',
  //     '/images/sgraph/10.webp',
  //     '/images/sgraph/11.webp',
  //     '/images/sgraph/12.webp',
  //   ],
  // },
  {
    name: 'Сайт-портфолио разработчика',
    description: 'TODO',
    type: PortfolioType.site,
    headerImages: [
      '/images/zhenya/1.webp',
      '/images/zhenya/2.webp',
      '/images/zhenya/3.webp',
      '/images/zhenya/4.webp',
    ],
    modalImages: [
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
    name: 'Мой сайт-портфолио (bulochka)',
    description: 'TODO',
    type: PortfolioType.site,
    headerImages: [
      '/images/sgraph/1.webp',
      '/images/sgraph/2.webp',
      '/images/sgraph/3.webp',
      '/images/sgraph/4.webp',
    ],
    modalImages: [
      '/images/sgraph/5.webp',
      '/images/sgraph/6.webp',
      '/images/sgraph/7.webp',
      '/images/sgraph/8.webp',
      '/images/sgraph/9.webp',
      '/images/sgraph/10.webp',
      '/images/sgraph/11.webp',
      '/images/sgraph/12.webp',
    ],
  },
  {
    name: 'Лендинг для sGraph',
    headerImages: [
      '/images/sgraph/1.webp',
      '/images/sgraph/2.webp',
      '/images/sgraph/3.webp',
      '/images/sgraph/4.webp',
    ],
    modalImages: [
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
    type: PortfolioType.landing,
  },
  {
    name: 'Лендинги для Human',
    description: 'TODO',
    type: PortfolioType.landing,
    headerImages: [
      '/images/sgraph/1.webp',
      '/images/sgraph/2.webp',
      '/images/sgraph/3.webp',
      '/images/sgraph/4.webp',
    ],
    modalImages: [
      '/images/sgraph/5.webp',
      '/images/sgraph/6.webp',
      '/images/sgraph/7.webp',
      '/images/sgraph/8.webp',
      '/images/sgraph/9.webp',
      '/images/sgraph/10.webp',
      '/images/sgraph/11.webp',
      '/images/sgraph/12.webp',
    ],
  },
  {
    name: 'Лендинги для Rebase',
    description: 'TODO',
    type: PortfolioType.landing,
    headerImages: [
      '/images/sgraph/1.webp',
      '/images/sgraph/2.webp',
      '/images/sgraph/3.webp',
      '/images/sgraph/4.webp',
    ],
    modalImages: [
      '/images/sgraph/5.webp',
      '/images/sgraph/6.webp',
      '/images/sgraph/7.webp',
      '/images/sgraph/8.webp',
      '/images/sgraph/9.webp',
      '/images/sgraph/10.webp',
      '/images/sgraph/11.webp',
      '/images/sgraph/12.webp',
    ],
  },
  {
    name: 'Лендинг для The Likeness',
    description: 'TODO',
    type: PortfolioType.landing,
    headerImages: [
      '/images/sgraph/1.webp',
      '/images/sgraph/2.webp',
      '/images/sgraph/3.webp',
      '/images/sgraph/4.webp',
    ],
    modalImages: [
      '/images/sgraph/5.webp',
      '/images/sgraph/6.webp',
      '/images/sgraph/7.webp',
      '/images/sgraph/8.webp',
      '/images/sgraph/9.webp',
      '/images/sgraph/10.webp',
      '/images/sgraph/11.webp',
      '/images/sgraph/12.webp',
    ],
  },
  {
    name: 'Креативы для The Likeness',
    description: 'TODO',
    type: PortfolioType.creative,
    headerImages: [
      '/images/thelikeness-creative/1.webp',
      '/images/thelikeness-creative/2.webp',
      '/images/thelikeness-creative/3.webp',
      '/images/thelikeness-creative/4.webp',
    ],
    modalImages: [
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
    name: 'Креативы для rebase',
    description: 'TODO',
    type: PortfolioType.creative,
    headerImages: [
      '/images/sgraph/1.webp',
      '/images/sgraph/2.webp',
      '/images/sgraph/3.webp',
      '/images/sgraph/4.webp',
    ],
    modalImages: [
      '/images/sgraph/5.webp',
      '/images/sgraph/6.webp',
      '/images/sgraph/7.webp',
      '/images/sgraph/8.webp',
      '/images/sgraph/9.webp',
      '/images/sgraph/10.webp',
      '/images/sgraph/11.webp',
      '/images/sgraph/12.webp',
    ],
  },
  {
    name: 'Креативы для Human',
    description: 'TODO',
    type: PortfolioType.creative,
    headerImages: [
      '/images/sgraph/1.webp',
      '/images/sgraph/2.webp',
      '/images/sgraph/3.webp',
      '/images/sgraph/4.webp',
    ],
    modalImages: [
      '/images/sgraph/5.webp',
      '/images/sgraph/6.webp',
      '/images/sgraph/7.webp',
      '/images/sgraph/8.webp',
      '/images/sgraph/9.webp',
      '/images/sgraph/10.webp',
      '/images/sgraph/11.webp',
      '/images/sgraph/12.webp',
    ],
  },
  {
    name: 'Креативы для HumanIPO',
    description: 'TODO',
    type: PortfolioType.creative,
    headerImages: [
      '/images/humanipo-creative/1.webp',
      '/images/humanipo-creative/2.webp',
      '/images/humanipo-creative/3.webp',
      '/images/humanipo-creative/4.webp',
    ],
    modalImages: [
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
    name: 'Примеры векторных иллюстраций',
    description: 'TODO',
    type: PortfolioType.illustration,
    headerImages: [
      '/images/sgraph/1.webp',
      '/images/sgraph/2.webp',
      '/images/sgraph/3.webp',
      '/images/sgraph/4.webp',
    ],
    modalImages: [
      '/images/sgraph/5.webp',
      '/images/sgraph/6.webp',
      '/images/sgraph/7.webp',
      '/images/sgraph/8.webp',
      '/images/sgraph/9.webp',
      '/images/sgraph/10.webp',
      '/images/sgraph/11.webp',
      '/images/sgraph/12.webp',
    ],
  },
  {
    name: 'Circles',
    description: 'TODO',
    type: PortfolioType.illustration,
    headerImages: [
      '/images/sgraph/1.webp',
      '/images/sgraph/2.webp',
      '/images/sgraph/3.webp',
      '/images/sgraph/4.webp',
    ],
    modalImages: [
      '/images/sgraph/5.webp',
      '/images/sgraph/6.webp',
      '/images/sgraph/7.webp',
      '/images/sgraph/8.webp',
      '/images/sgraph/9.webp',
      '/images/sgraph/10.webp',
      '/images/sgraph/11.webp',
      '/images/sgraph/12.webp',
    ],
  },
  {
    name: 'Sladosti',
    description: 'TODO',
    type: PortfolioType.illustration,
    headerImages: [
      '/images/sgraph/1.webp',
      '/images/sgraph/2.webp',
      '/images/sgraph/3.webp',
      '/images/sgraph/4.webp',
    ],
    modalImages: [
      '/images/sgraph/5.webp',
      '/images/sgraph/6.webp',
      '/images/sgraph/7.webp',
      '/images/sgraph/8.webp',
      '/images/sgraph/9.webp',
      '/images/sgraph/10.webp',
      '/images/sgraph/11.webp',
      '/images/sgraph/12.webp',
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
