(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9446:function(e,i,s){Promise.resolve().then(s.bind(s,7888)),Promise.resolve().then(s.bind(s,6036)),Promise.resolve().then(s.bind(s,5674)),Promise.resolve().then(s.bind(s,6747)),Promise.resolve().then(s.t.bind(s,5250,23))},7888:function(e,i,s){"use strict";s.r(i),s.d(i,{PortfolioSection:function(){return B}});var a,t,r,n,l=s(7437),m=s(2265),o=s(5713),c=s(307),p=s(1268),d=s.n(p),h=s(441),g=s.n(h),b=s(1657),x=s(4);let u=(0,m.memo)(e=>{let{heading:i="Hello world",isHover:s=!1,className:a=""}=e,t=i.split(""),[r,n]=(0,m.useState)(!1);return(0,m.useEffect)(()=>{let e;return s&&n(!0),e=setTimeout(()=>{n(!1)},300+20*t.length),()=>{e&&clearTimeout(e)}},[s,t.length]),(0,l.jsx)("div",{className:(0,b.cn)("flex",g().lettersWrapper,{[g().isAnimating]:r},a),children:t.map((e,i)=>{let s=" "==e?(0,l.jsx)(l.Fragment,{children:"\xa0"}):e;return(0,l.jsx)(x.Z,{as:"span",style:{"--index":i},className:(0,b.cn)("inline-block pointer-events-none text-title3 sm:text-title2",g().letter),children:s},i)})})});var w=s(5754),f=s(981);s(2846);var v=e=>(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 40 40",...e,children:(0,f.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:1.4,d:"M28 12 12 28m0-16 16 16"})});(a=r||(r={})).hero="hero",a.normal="normal",a.same="same";var j=s(4283);let y=e=>{let{images:i=[],gridType:s=r.normal}=e;return(0,l.jsx)("div",{className:(0,b.cn)("grid grid-cols-4 gap-1 sm:gap-5",d().gallery,{[d().hero]:s===r.hero,[d().normal]:s===r.normal,[d().same]:s===r.same}),children:i.map(e=>(0,l.jsx)("img",{src:e,loading:"lazy",className:"rounded-lg w-full h-full object-cover border border-beige"},e))})},k=(0,m.memo)(e=>{var i;let{open:s,data:a,onClose:t}=e,n=(0,o.ZI)(),m=(0,o.Yz)(s?a.headerImages:[],{ref:n,trail:400/a.headerImages.length,from:{opacity:0,scale:0},enter:{opacity:1,scale:1},leave:{opacity:0,scale:0}});return(0,o.Ab)([n],[s?.1:0]),(0,l.jsxs)("div",{className:"w-screen h-screen overflow-y-auto pb-5 sm:pb-10 relative pt-5 sm:pt-20",children:[(0,l.jsx)(w.z,{onClick:t,variant:"ghost",size:"icon",className:"text-brown hover:text-light-brown absolute right-2 sm:right-9 top-2 sm:top-9",children:(0,l.jsx)(v,{})}),(0,l.jsx)(x.Z,{as:"h1",className:(0,b.cn)("container text-title2 text-brown font-bold text-center pt-5 sm:pt-0 mb-5 sm:mb-9 transition-opacity",{"opacity-1":s,"opacity-0":!s}),children:a.title}),(0,l.jsxs)("div",{className:"container grid grid-cols-12 grid-flow-col gap-5",children:[(0,l.jsxs)("div",{className:"col-start-1 col-end-13 sm:col-start-2 sm:col-end-12",children:[(0,l.jsx)("div",{className:"grid grid-cols-4 gap-1 sm:gap-5",children:m((e,i)=>(0,l.jsx)(o.q.img,{className:"aspect-square bg-white rounded-lg border border-beige",style:e,src:i}))}),(0,l.jsxs)("div",{className:"grid sm:grid-cols-2 gap-5 mt-10 empty:hidden mb-10",children:[a.task&&(0,l.jsxs)("div",{children:[(0,l.jsx)(x.Z,{as:"h3",className:"mb-4 text-title4 text-brown font-bold",children:a.taskTitle||"Задача"}),a.task]}),a.implementation&&(0,l.jsxs)("div",{children:[(0,l.jsx)(x.Z,{as:"h3",className:"mb-4 text-title4 text-brown font-bold",children:a.implementationTitle||"Реализация"}),a.implementation]})]}),a.images&&(0,l.jsx)(y,{gridType:a.gridType,images:a.images}),(0,l.jsx)("div",{className:"flex flex-col gap-16",children:null===(i=a.sections)||void 0===i?void 0:i.map((e,i)=>(0,l.jsxs)("div",{children:[(0,l.jsx)(x.Z,{className:"text-title4 font-bold text-brown text-center mb-4",children:e.name}),(0,l.jsx)(y,{gridType:r.hero,images:e.images})]},i))})]}),(0,l.jsx)("div",{className:"pt-8 col-start-1 col-end-13 flex items-center justify-center",children:(0,l.jsx)(w.z,{onClick:t,variant:"ghost",className:"text-brown self-center",children:"Закрыть"})})]})]})}),_=e=>{let i=(0,m.useRef)(null),s=(0,c.XI)(i),a=(0,o.ZI)(),[t,r]=(0,m.useState)(!1),n=(0,o.Yz)(s?e.headerImages:[],{ref:a,trail:200/e.headerImages.length,from:{opacity:0,scale:0},enter:{opacity:1,scale:1},leave:{opacity:0,scale:0},reverse:!0,config:{duration:200}});(0,o.Ab)([a],[0,.2]);let[p,d]=(0,o.q_)(()=>({opacity:1,background:"#eee6e3",display:"none",height:0,width:0,top:0,left:0,config:o.vc.stiff}),[]),h=(0,m.useCallback)(()=>{if(!i.current)return;console.log("handle open modal"),(0,j.dR)(),r(!0);let e=i.current.getBoundingClientRect();d.set({opacity:1,background:"var(--color-peach)",display:"block",left:e.left,top:e.top,height:e.height,width:e.width}),d.start({background:"var(--color-background)",left:0,top:0,height:window.innerHeight,width:window.innerWidth,onResolve(e,i,s){i.set({height:"100vh",width:"100vw"})}})},[d,i]),g=(0,m.useCallback)(async()=>{if(!i.current)return;console.log("close"),(0,j.Un)(),r(!1),d.set({height:window.innerHeight,width:window.innerWidth});let e=i.current.getBoundingClientRect();await d.start({left:e.left,top:e.top,height:e.height,width:e.width,background:"var(--color-peach)",config:{duration:350},onResolve(i,s,a){s.start({top:e.top+e.height/2,height:0,opacity:0,onResolve(e,i,s){i.set({display:"none"}),r(!1)}})}})},[d,i]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.q.div,{style:p,className:"rounded-sm fixed z-10 overflow-hidden",children:(0,l.jsx)(k,{data:e,open:t,onClose:g})}),(0,l.jsx)("div",{ref:e=>{i.current=e},className:"group hover:bg-peach transition-colors cursor-pointer border-t border-peach last-of-type:border-b",onClick:h,children:(0,l.jsxs)("div",{ref:i,className:"container flex justify-between items-center p-5 rounded-sm overflow-hidden",children:[(0,l.jsx)("div",{className:"flex-1 relative",children:(0,l.jsx)(u,{heading:String(e.title),isHover:s,className:"text-brown"})}),(0,l.jsx)("div",{className:"hidden sm:flex h-16 gap-3 transform translate-x-2 group-hover:translate-x-0 transition-transform duration-200",children:n((e,i)=>(0,l.jsx)(o.q.img,{style:e,className:"size-16 rounded-lg",alt:"heh",src:i}))})]})})]})},N=e=>{let{data:i}=e;return(0,l.jsx)("div",{className:"mt-10",children:i.map(e=>(0,l.jsx)(_,{...e},e.name))})};var F=s(3873),z=s.n(F);let I=e=>{let{items:i,activeTab:s,onChange:a,className:t}=e,r=(0,m.useRef)(null),n=(0,m.useRef)([]);return(0,m.useEffect)(()=>{var e;let i=n.current.find(e=>e.getAttribute("data-key")===s),a=null==i?void 0:i.getBoundingClientRect();a&&(null===(e=r.current)||void 0===e||e.scrollTo({left:a.left-16,behavior:"smooth"}),console.log(i))},[s]),(0,l.jsx)("nav",{className:(0,b.cn)("scroll-m-4 sm:w-full overflow-x-auto flex gap-6 scroll justify-between",z().tabsWrapper,t),ref:r,children:i.map((e,i)=>(0,l.jsx)("button",{onClick:()=>a(e.key),"data-key":e.key,className:(0,b.cn)("border-b text-[1rem] sm:text-body1 hover:text-brown transition-colors",{"text-foreground border-transparent":s!==e.key,"border-b border-brown text-brown":s===e.key}),ref:e=>{e&&(n.current[i]=e)},children:e.label},e.key))})};var T=s(1755),H=s(2298),A=s.n(H),C=s(3167);let P=e=>{let{children:i,className:s,...a}=e;return(0,l.jsx)("ul",{className:(0,b.cn)("flex flex-col gap-2",s),...a,children:i})},R=e=>{let{children:i,className:s,...a}=e;return(0,l.jsxs)("li",{className:(0,b.cn)("flex gap-[6px] items-baseline",s),...a,children:[(0,l.jsx)("span",{className:(0,C.Z)("inline-flex items-center",A().icon),children:(0,l.jsx)(T.default,{className:"size-4 flex-shrink-0"})}),(0,l.jsx)("span",{children:i})]})};var M=s(8792);(t=n||(n={})).all="all",t.product="product",t.site="site",t.landing="landing",t.creative="creative",t.illustration="illustration";let V=[{title:"Web3 приложение Human",gridType:r.hero,type:"product",taskTitle:"О проекте",implementationTitle:"С\xa0чем\xa0работала",task:(0,l.jsx)(l.Fragment,{children:"Human – web3\xa0приложение, работающее с\xa0новым типом ценных бумаг, который обеспечивает доступ к\xa0активам, приносящим дивиденды."}),implementation:(0,l.jsx)(l.Fragment,{children:"Разработка дизайна с\xa0нуля\xa0— от\xa0разработки текстовых и\xa0цветовых стилей и\xa0базовой системы компонентов до\xa0внедрения сложных пользовательских\xa0фич."}),headerImages:["/images/human/1.webp","/images/human/2.webp","/images/human/3.webp","/images/human/4.webp"],images:["/images/human/5.webp","/images/human/6.webp","/images/human/7.webp","/images/human/8.webp","/images/human/9.webp","/images/human/10.webp","/images/human/11.webp","/images/human/12.webp","/images/human/13.webp","/images/human/14.webp","/images/human/15.webp","/images/human/16.webp","/images/human/17.webp","/images/human/18.webp","/images/human/19.webp","/images/human/20.webp"]},{title:"Web3 приложение rebase",type:"product",gridType:r.hero,taskTitle:"О проекте",implementationTitle:"С\xa0чем\xa0работала",task:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("p",{children:"rebase – web3\xa0приложение, социальная сеть, где\xa0каждый может создавать прогнозы и\xa0делать ставки на\xa0ожидаемые результаты грядущих событий."})}),implementation:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("p",{children:"Работа с\xa0дизайном по\xa0нарастающей\xa0— от\xa0редизайна отдельных компонентов и\xa0элементов страниц до\xa0внедрения сложных пользовательских\xa0фич."})}),headerImages:["/images/rebase/1.webp","/images/rebase/2.webp","/images/rebase/3.webp","/images/rebase/4.webp"],images:["/images/rebase/5.webp","/images/rebase/6.webp","/images/rebase/7.webp","/images/rebase/8.webp","/images/rebase/9.webp","/images/rebase/10.webp","/images/rebase/11.webp","/images/rebase/12.webp","/images/rebase/13.webp","/images/rebase/14.webp","/images/rebase/15.webp","/images/rebase/16.webp","/images/rebase/17.webp","/images/rebase/18.webp","/images/rebase/19.webp","/images/rebase/20.webp"]},{title:"Сайт-портфолио разработчика",type:"site",gridType:r.hero,headerImages:["/images/zhenya/1.webp","/images/zhenya/2.webp","/images/zhenya/3.webp","/images/zhenya/4.webp"],images:["/images/zhenya/5.webp","/images/zhenya/6.webp","/images/zhenya/7.webp","/images/zhenya/8.webp","/images/zhenya/9.webp","/images/zhenya/10.webp","/images/zhenya/11.webp","/images/zhenya/12.webp"],task:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:"Создать для\xa0разработчика дизайн его\xa0сайта-портфолио, который включает в\xa0себя главную страницу с\xa0основной информацией, блог и\xa0страницу блога."}),(0,l.jsx)("p",{children:"В\xa0частности:"}),(0,l.jsx)("br",{}),(0,l.jsxs)(P,{children:[(0,l.jsx)(R,{children:"разработать адаптивный дизайн"}),(0,l.jsx)(R,{children:"сделать тёмную и\xa0светлую темы"}),(0,l.jsx)(R,{children:"добавить микро-анимации"}),(0,l.jsx)(R,{children:"предусмотреть быстрый доступ к\xa0контактам, пролинковку секций и\xa0навигацию в\xa0статьях"})]})]}),implementation:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:"Для\xa0дизайна были разработаны цветовые стили, которые работают как\xa0для\xa0тёмной, так\xa0и\xa0для\xa0светлой версии."}),(0,l.jsx)("p",{children:"В\xa0качестве основного шрифта выбран Nunito с\xa0большим выбором начертаний, что\xa0необходимо для\xa0написания статей большого объёма. Начертание акцентного шрифта содержит мотивы шрифтов, используемых в\xa0программах для\xa0написания кода."}),(0,l.jsx)("p",{children:"Макеты для\xa0вёрстки и\xa0превью для\xa0статей выполнены в\xa0Figma."})]})},{title:"Мой сайт-портфолио",type:"site",gridType:r.hero,task:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:"Создать дизайн своего\xa0сайта-портфолио, который включает в\xa0себя главную страницу с\xa0основной информацией и\xa0резюме."}),(0,l.jsx)("p",{children:"В\xa0частности:"}),(0,l.jsx)("br",{}),(0,l.jsxs)(P,{children:[(0,l.jsx)(R,{children:"разработать адаптивный дизайн"}),(0,l.jsx)(R,{children:"добавить микро-анимации"}),(0,l.jsx)(R,{children:"создать отдельные окна для\xa0оформления и\xa0презентации примеров проектов, размещения кейсов"}),(0,l.jsx)(R,{children:"предусмотреть быстрый доступ к\xa0контактам и\xa0пролинковку секций"})]})]}),implementation:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:"В\xa0качестве основного был\xa0выбран шрифт с\xa0простым геометрическим начертанием Evolventa. В\xa0качестве акцентного шрифта выступает экспериментальный контрастный Mak."}),(0,l.jsx)("p",{children:"Дизайн лёгкий и\xa0воздушный, с\xa0ненавязчивыми анимациями и\xa0стилистическими элементами, вдохновлёнными художественными академическими мотивами и\xa0атмосферой. Также\xa0в\xa0дизайне используются графические элементы, отсылающие к\xa0работе с\xa0Figma."})]}),headerImages:["/images/my-site/1.webp","/images/my-site/2.webp","/images/my-site/3.webp","/images/my-site/4.webp"],images:["/images/my-site/5.webp","/images/my-site/6.webp","/images/my-site/7.webp","/images/my-site/8.webp","/images/my-site/9.webp","/images/my-site/10.webp","/images/my-site/11.webp","/images/my-site/12.webp"]},{title:"Лендинг для sGraph",type:"landing",headerImages:["/images/sgraph/1.webp","/images/sgraph/2.webp","/images/sgraph/3.webp","/images/sgraph/4.webp"],images:["/images/sgraph/5.webp","/images/sgraph/6.webp","/images/sgraph/7.webp","/images/sgraph/8.webp","/images/sgraph/9.webp","/images/sgraph/10.webp","/images/sgraph/11.webp","/images/sgraph/12.webp"],task:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:"Разработать лендинг для\xa0протокола\xa0— открытого социального графа на\xa0базе блокчейна, который записывает любое событие или\xa0отношение в\xa0общую сеть Интернета."}),(0,l.jsx)("p",{children:"В\xa0частности:"}),(0,l.jsx)("br",{}),(0,l.jsxs)(P,{children:[(0,l.jsx)(R,{children:"рассказать про\xa0преимущества протокола, зачем им\xa0пользоваться, и\xa0что\xa0это\xa0даёт"}),(0,l.jsx)(R,{children:"разместить все\xa0необходимые ссылки, указать контакты, а\xa0также дать возможность подписаться на\xa0email-рассылку"}),(0,l.jsx)(R,{children:"разработать подходящий стиль"}),(0,l.jsx)(R,{children:"создать серию иллюстраций для\xa0визуального сопровождения в\xa0общей тематике (были выбраны 3D фигуры)"})]})]}),implementation:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:"Для\xa0лендинга было выбрано тёмное оформление, что\xa0было обусловлено темой и\xa0целевой аудиторией. Дизайн\xa0— минималистичный, с\xa0небольшим набором цветов для\xa0создания дизайн-решения, демонстрирующего серьёзность проекта."}),(0,l.jsx)("p",{children:"Макеты для\xa0вёрстки были выполнены в\xa0Figma."}),(0,l.jsx)("p",{children:"3D фигуры созданы в\xa0Adobe Illustrator в\xa0несколько этапов\xa0— от\xa0модельки до\xa0наложения ряда эффектов."}),(0,l.jsx)("p",{children:"Графические элементы\xa0— геометрические узоры, бэкграунды для\xa0карточек\xa0— выполнены в\xa0Figma с\xa0частичной обработкой в\xa0Adobe Illustrator."})]}),gridType:r.hero},{title:"Лендинги для HumanIPO",type:"landing",gridType:r.hero,task:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:"HumanIPO – быстроразвивающийся и\xa0быстроменяющийся стартап. Ниже приведены примеры лендингов для\xa0продуктов стартапа на\xa0разных этапах развития."}),(0,l.jsx)("p",{children:"Конечный результат сильно отличается от\xa0того, что\xa0было в\xa0самом начале."})]}),implementation:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:"Для\xa0создания графического оформления\xa0— паттерны, бэкграунды, векторные фигуры и\xa0элементы, работа с\xa0эффектами, обработка изображений\xa0и\xa0т.д. —\xa0использовались Adobe Illustrator, Adobe Photoshop и\xa0Figma (основной функционал, плагины, свободные материалы комьюнити\xa0и\xa0т.д.)."}),(0,l.jsx)("p",{children:"Макеты для\xa0вёрстки были выполнены в\xa0Figma."})]}),headerImages:["/images/human-ipo/1.webp","/images/human-ipo/2.webp","/images/human-ipo/3.webp","/images/human-ipo/4.webp"],sections:[{name:"Лендинг №1",images:["/images/human-ipo/5.webp","/images/human-ipo/6.webp","/images/human-ipo/7.webp","/images/human-ipo/8.webp","/images/human-ipo/9.webp","/images/human-ipo/10.webp","/images/human-ipo/11.webp","/images/human-ipo/12.webp"]},{name:"Лендинг №2",images:["/images/human-ipo/13.webp","/images/human-ipo/14.webp","/images/human-ipo/15.webp","/images/human-ipo/16.webp","/images/human-ipo/17.webp","/images/human-ipo/18.webp","/images/human-ipo/19.webp","/images/human-ipo/20.webp"]},{name:"Лендинг №3",images:["/images/human-ipo/21.webp","/images/human-ipo/22.webp","/images/human-ipo/23.webp","/images/human-ipo/24.webp","/images/human-ipo/25.webp","/images/human-ipo/26.webp","/images/human-ipo/27.webp","/images/human-ipo/28.webp"]}]},{title:"Креативы для The Likeness",type:"creative",gridType:r.normal,headerImages:["/images/thelikeness-creative/1.webp","/images/thelikeness-creative/2.webp","/images/thelikeness-creative/3.webp","/images/thelikeness-creative/4.webp"],images:["/images/thelikeness-creative/5.webp","/images/thelikeness-creative/6.webp","/images/thelikeness-creative/7.webp","/images/thelikeness-creative/8.webp","/images/thelikeness-creative/9.webp","/images/thelikeness-creative/10.webp","/images/thelikeness-creative/11.webp","/images/thelikeness-creative/12.webp","/images/thelikeness-creative/13.webp","/images/thelikeness-creative/14.webp"],task:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:"Создать креативы для\xa0соцсетей платформы The Likeness."}),(0,l.jsx)("p",{children:"Необходимо было учесть использование креативов в\xa0разных соцсетях, следовательно, была проведена работа с\xa0разными форматами. Также\xa0сами креативы были различного типа\xa0— посты, сторис, карусели\xa0и\xa0т.д."})]}),implementation:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:"Оформление креативов создавалось на\xa0основе дизайна самого продукта (шрифты, цветовая палитра, графические элементы, эффекты\xa0и\xa0т.д.)."}),(0,l.jsx)("p",{children:"Ниже представлены примеры креативов из\xa0разных стилистических итераций."})]})},{title:"Креативы для rebase",type:"creative",task:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:"Создать креативы для\xa0соцсетей платформы rebase."}),(0,l.jsx)("p",{children:"Необходимо было учесть использование креативов в\xa0разных соцсетях, следовательно, была проведена работа с\xa0разными форматами. Также\xa0сами креативы были различного типа\xa0— посты, карусели, баннеры\xa0и\xa0т.д."})]}),implementation:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:"Оформление креативов создавалось на\xa0основе дизайна самого продукта на\xa0текущий момент (шрифты, цветовая палитра, графические элементы, эффекты\xa0и\xa0т.д.)."}),(0,l.jsx)("p",{children:"Ниже представлены примеры креативов из\xa0разных стилистических итераций."})]}),gridType:r.normal,headerImages:["/images/rebase-creative/1.webp","/images/rebase-creative/2.webp","/images/rebase-creative/3.webp","/images/rebase-creative/4.webp"],images:["/images/rebase-creative/5.webp","/images/rebase-creative/6.webp","/images/rebase-creative/7.webp","/images/rebase-creative/8.webp","/images/rebase-creative/9.webp","/images/rebase-creative/10.webp","/images/rebase-creative/11.webp","/images/rebase-creative/12.webp","/images/rebase-creative/13.webp","/images/rebase-creative/14.webp"]},{title:"Креативы для Human",type:"creative",task:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:"Создать креативы для\xa0соцсетей платформы Human."}),(0,l.jsx)("p",{children:"Необходимо было учесть использование креативов в\xa0разных соцсетях, следовательно, была проведена работа с\xa0разными форматами. Также\xa0сами креативы были различного типа\xa0— посты, сторис, баннеры\xa0и\xa0т.д."})]}),implementation:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:"Оформление креативов создавалось на\xa0основе дизайна самого продукта на\xa0текущий момент (шрифты, цветовая палитра, графические элементы, эффекты\xa0и\xa0т.д.)."}),(0,l.jsx)("p",{children:"Ниже представлены примеры креативов из\xa0разных стилистических итераций."})]}),gridType:r.normal,headerImages:["/images/human-creative/1.webp","/images/human-creative/2.webp","/images/human-creative/3.webp","/images/human-creative/4.webp"],images:["/images/human-creative/5.webp","/images/human-creative/6.webp","/images/human-creative/7.webp","/images/human-creative/8.webp","/images/human-creative/9.webp","/images/human-creative/10.webp","/images/human-creative/11.webp","/images/human-creative/12.webp","/images/human-creative/13.webp","/images/human-creative/14.webp"]},{title:"Креативы для HumanIPO",type:"creative",gridType:r.normal,headerImages:["/images/humanipo-creative/1.webp","/images/humanipo-creative/2.webp","/images/humanipo-creative/3.webp","/images/humanipo-creative/4.webp"],images:["/images/humanipo-creative/5.webp","/images/humanipo-creative/6.webp","/images/humanipo-creative/7.webp","/images/humanipo-creative/8.webp","/images/humanipo-creative/9.webp","/images/humanipo-creative/10.webp","/images/humanipo-creative/11.webp","/images/humanipo-creative/12.webp","/images/humanipo-creative/13.webp","/images/humanipo-creative/14.webp"],task:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:"Создать креативы для\xa0соцсетей платформы HumanIPO."}),(0,l.jsx)("p",{children:"Необходимо было учесть использование креативов в\xa0разных соцсетях, следовательно, была проведена работа с\xa0разными форматами. Также\xa0сами креативы были различного типа\xa0— посты, сторис\xa0и\xa0т.д."})]}),implementation:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:"Оформление креативов создавалось на\xa0основе дизайна самого продукта на\xa0текущий момент (шрифты, цветовая палитра, графические элементы, эффекты\xa0и\xa0т.д.)."}),(0,l.jsx)("p",{children:"Ниже представлены примеры креативов из\xa0разных стилистических итераций."})]})},{title:"Примеры векторных иллюстраций",implementationTitle:(0,l.jsx)(l.Fragment,{}),type:"illustration",gridType:r.hero,taskTitle:(0,l.jsx)(l.Fragment,{}),task:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("p",{children:"На\xa0этой странице представлены примеры векторных иллюстраций, бэкграундов и\xa0паттернов, выполненных в\xa0программе Adobe Illustrator. Больше моих работ можно найти в\xa0профиле на\xa0Dribbble."})}),implementation:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(w.z,{asChild:!0,variant:"outlined",className:"flex justify-between group min-w-[200px] font-normal",children:(0,l.jsxs)(M.default,{href:"/#",children:[(0,l.jsx)("span",{className:"",children:"Dribbble"}),(0,l.jsx)("span",{className:"group-hover:translate-x-[6px] transition-transform",children:"→"})]})})}),headerImages:["/images/illustrations/1.webp","/images/illustrations/2.webp","/images/illustrations/3.webp","/images/illustrations/4.webp"],images:["/images/illustrations/5.webp","/images/illustrations/6.webp","/images/illustrations/7.webp","/images/illustrations/8.webp","/images/illustrations/9.webp","/images/illustrations/10.webp","/images/illustrations/11.webp","/images/illustrations/12.webp"]}],W={all:"Все",product:"Продукты",site:"Сайты",landing:"Лендинги",creative:"Креативы",illustration:"Иллюстрации"},Z=Object.keys(W);var q=e=>(0,f.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 1180 150",...e,children:[(0,f.jsx)("path",{fill:"#724F2C",d:"M30.984 137H8.07V24.521h106.346V137H91.5V27.103H30.984zm97.114-55.836c0-40.666 34.05-59.063 67.455-59.063s67.455 18.397 67.455 59.063c0 40.828-34.05 58.418-67.455 58.418-33.243 0-67.455-17.59-67.455-58.418m67.455-56.481c-24.206 0-43.733 14.2-43.733 56.158 0 42.119 19.527 56.32 43.733 56.32s43.733-14.201 43.733-56.32c0-41.957-19.527-56.158-43.733-56.158m81.212-.162h22.915v37.44c3.551-20.98 10.812-39.86 35.987-39.86 23.884 0 44.378 8.875 44.378 36.955 0 33.243-26.788 39.053-53.254 39.053H299.68V137h-22.915zm28.886 23.884c-6.778 24.852-5.971 47.283-5.971 47.283h23.4c15.492 0 33.566-2.582 33.566-36.632 0-19.043-.807-34.696-20.334-34.696-15.169 0-26.626 9.36-30.661 24.045m123.142-21.302h-46.315v-2.582h115.707v2.582H451.87V137h-22.915zm66.97 54.223c0-36.149 30.661-46.96 63.904-46.96h2.582V24.52h23.722v9.844h2.582c33.082 0 63.744 10.812 63.744 46.96s-30.823 45.67-64.066 45.67h-2.582V137h-23.077v-10.005h-2.743c-33.244 0-64.066-9.521-64.066-45.67m63.259-44.217c-24.206 0-39.86 13.878-39.86 43.41s15.654 43.732 39.86 43.732h3.389V37.109zm26.788 0v87.142h3.389c24.045 0 39.86-14.201 39.86-43.732 0-29.532-15.815-43.41-39.86-43.41zm77.789 44.055c0-40.666 34.051-59.063 67.455-59.063 33.405 0 67.455 18.397 67.455 59.063 0 40.828-34.05 58.418-67.455 58.418-33.243 0-67.455-17.59-67.455-58.418m67.455-56.481c-24.206 0-43.733 14.2-43.733 56.158 0 42.119 19.527 56.32 43.733 56.32 24.207 0 43.733-14.201 43.733-56.32 0-41.957-19.526-56.158-43.733-56.158M799.426 137l38.73-112.479h24.367L906.095 137H882.05L839.77 28.394 802.33 137zm119.531 0V24.521h22.915v109.736c14.04 0 57.288-5.326 60.518-67.94V24.522h22.91V137h-22.91V86.49c-6.941 30.177-28.727 50.51-60.518 50.51zm120.033-55.836c0-40.666 34.05-59.063 67.45-59.063 33.41 0 67.46 18.397 67.46 59.063 0 40.828-34.05 58.418-67.46 58.418-33.24 0-67.45-17.59-67.45-58.418m67.45-56.481c-24.21 0-43.73 14.2-43.73 56.158 0 42.119 19.52 56.32 43.73 56.32s43.73-14.201 43.73-56.32c0-41.957-19.52-56.158-43.73-56.158"}),(0,f.jsx)("path",{fill:"#FFFAF5",d:"M0 110h1180v40H0z"})]});let B=()=>{let[e,i]=(0,m.useState)("all");return(0,l.jsxs)("section",{id:"portfolio",children:[(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(q,{className:"w-full mb-5"}),(0,l.jsx)(I,{activeTab:e,onChange:i,items:Z.map(e=>({key:String(e),label:W[e]}))})]}),(0,l.jsx)(N,{data:"all"===e?V:V.filter(i=>i.type===e)})]})}},6036:function(e,i,s){"use strict";s.r(i),s.d(i,{PromoSection:function(){return d}});var a=s(7437),t=s(981);s(2846);var r=e=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 100 100",...e,children:(0,t.jsxs)("g",{opacity:.6,children:[(0,t.jsx)("path",{fill:"#0ACF83",d:"M38.558 85.416c6.521 0 11.814-5.293 11.814-11.815V61.787H38.558c-6.522 0-11.814 5.293-11.814 11.814 0 6.522 5.292 11.814 11.814 11.814"}),(0,t.jsx)("path",{fill:"#A259FF",d:"M26.744 49.973c0-6.522 5.292-11.815 11.814-11.815h11.814v23.629H38.558c-6.522 0-11.814-5.293-11.814-11.815"}),(0,t.jsx)("path",{fill:"#F24E1E",d:"M26.743 26.345c0-6.522 5.293-11.815 11.814-11.815h11.814V38.16H38.557c-6.521 0-11.814-5.293-11.814-11.814"}),(0,t.jsx)("path",{fill:"#FF7262",d:"M50.371 14.53h11.815C68.707 14.53 74 19.823 74 26.344c0 6.522-5.293 11.815-11.814 11.815H50.37z"}),(0,t.jsx)("path",{fill:"#1ABCFE",d:"M74 49.973c0 6.521-5.293 11.814-11.814 11.814-6.522 0-11.815-5.293-11.815-11.815s5.293-11.814 11.815-11.814S74 43.451 74 49.972"})]})}),n=e=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 100 100",...e,children:[(0,t.jsx)("g",{clipPath:"url(#illustrator_svg__a)",opacity:.6,children:(0,t.jsx)("path",{fill:"#FF9A00",d:"M48.374 62.216H30.152L26.43 73.727a.857.857 0 0 1-.93.686h-9.21c-.538 0-.685-.294-.538-.882l15.773-45.408c.147-.49.294-1.028.49-1.616.195-1.029.293-2.106.293-3.184-.049-.245.147-.49.392-.539h12.687c.392 0 .588.147.637.392L63.902 73.63c.147.54 0 .784-.49.784H53.175c-.343.049-.686-.196-.784-.539zm-15.38-9.944h12.441a70 70 0 0 0-1.127-3.526c-.44-1.323-.881-2.744-1.322-4.213-.49-1.519-.93-2.988-1.42-4.507s-.931-2.939-1.323-4.359c-.392-1.372-.735-2.645-1.078-3.82h-.098a60 60 0 0 1-1.665 6.318c-.735 2.351-1.47 4.8-2.254 7.25a96 96 0 0 1-2.155 6.857m41.831-20.916c-1.616.05-3.184-.587-4.36-1.714a6.36 6.36 0 0 1-1.665-4.506 5.76 5.76 0 0 1 1.764-4.36c1.175-1.127 2.743-1.715 4.36-1.715 1.91 0 3.38.588 4.457 1.715a6.19 6.19 0 0 1 1.616 4.36c.05 1.665-.539 3.281-1.714 4.506-1.127 1.176-2.792 1.812-4.458 1.714M69.34 73.874V36.157c0-.49.196-.686.637-.686h9.699c.44 0 .636.245.636.686v37.717c0 .539-.196.784-.636.784h-9.601c-.49 0-.735-.294-.735-.784"})}),(0,t.jsx)("defs",{children:(0,t.jsx)("clipPath",{id:"illustrator_svg__a",children:(0,t.jsx)("rect",{width:90.256,height:88,x:4.744,y:6,fill:"#fff",rx:44})})})]}),l=e=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 100 100",...e,children:[(0,t.jsx)("g",{fill:"#31A8FF",clipPath:"url(#photoshop_svg__a)",opacity:.6,children:(0,t.jsx)("path",{d:"M14.923 74.99V21.494c0-.364.156-.572.52-.572.884 0 1.716 0 2.912-.052 1.247-.052 2.547-.052 3.95-.104s2.912-.052 4.524-.104c1.611-.052 3.171-.052 4.73-.052 4.264 0 7.8.52 10.71 1.612 2.6.884 4.991 2.34 6.967 4.263a16.55 16.55 0 0 1 3.795 5.927c.78 2.183 1.196 4.419 1.196 6.758q0 6.707-3.12 11.074c-2.079 2.911-4.99 5.095-8.37 6.343-3.535 1.3-7.434 1.767-11.697 1.767-1.248 0-2.08 0-2.6-.052s-1.247-.052-2.235-.052V74.94c.052.364-.208.675-.572.727H15.547c-.416 0-.624-.208-.624-.675m11.334-44.034v17.468c.728.052 1.404.104 2.027.104h2.756a19.4 19.4 0 0 0 5.979-.936c1.663-.468 3.119-1.455 4.263-2.755 1.091-1.3 1.611-3.067 1.611-5.355a8.56 8.56 0 0 0-1.195-4.627c-.884-1.351-2.132-2.391-3.64-2.963-1.923-.78-4.003-1.092-6.134-1.04-1.352 0-2.548 0-3.536.052-1.04-.052-1.767 0-2.131.052M86.668 45.253c-1.56-.832-3.223-1.404-4.99-1.768-1.924-.416-3.848-.675-5.823-.675-1.04-.053-2.132.103-3.12.363-.675.156-1.247.52-1.611 1.04-.26.416-.416.936-.416 1.404s.208.936.52 1.352c.468.572 1.092 1.04 1.767 1.403a48 48 0 0 0 3.692 1.716 37.7 37.7 0 0 1 8.006 3.795c1.716 1.092 3.12 2.548 4.107 4.315a11.2 11.2 0 0 1 1.196 5.355 12.1 12.1 0 0 1-2.028 6.915 13.03 13.03 0 0 1-5.823 4.627c-2.547 1.091-5.666 1.663-9.41 1.663-2.391 0-4.73-.208-7.07-.676a21 21 0 0 1-5.303-1.663c-.364-.208-.624-.572-.572-.988v-9.046c0-.156.052-.364.208-.468s.312-.052.468.052a22.3 22.3 0 0 0 6.447 2.547c1.975.52 4.055.78 6.134.78 1.976 0 3.38-.26 4.315-.728.832-.364 1.404-1.247 1.404-2.183 0-.728-.416-1.404-1.248-2.08-.831-.675-2.547-1.455-5.094-2.443a31.8 31.8 0 0 1-7.383-3.743 13.5 13.5 0 0 1-3.951-4.42 11.16 11.16 0 0 1-1.196-5.302c0-2.236.624-4.367 1.768-6.29 1.3-2.08 3.223-3.744 5.459-4.784 2.443-1.248 5.51-1.82 9.202-1.82 2.131 0 4.315.157 6.446.468 1.56.208 3.068.624 4.471 1.196.208.052.416.26.52.468.052.208.104.416.104.624v8.474a.64.64 0 0 1-.26.52c-.468.104-.728.104-.936 0"})}),(0,t.jsx)("defs",{children:(0,t.jsx)("clipPath",{id:"photoshop_svg__a",children:(0,t.jsx)("rect",{width:90.256,height:88,x:5,y:6,fill:"#fff",rx:44})})})]}),m=s(5754),o=s(4),c=s(5713),p=s(8792);let d=()=>{let{scrollYProgress:e}=(0,c.vO)({default:{immediate:!0,delay:0,config:{duration:10}}});return(0,a.jsx)("section",{className:"flex flex-col promo-wrapper overflow-hidden",children:(0,a.jsxs)("div",{className:"container grid grid-cols-12 auto-rows-[76px] md:auto-rows-[160px] grid-flow-col gap-x-1 gap-y-[1px] md:gap-x-5 items-center",children:[(0,a.jsx)(o.Z,{style:{height:"calc(100% + 2px)"},className:"-mr-1 md:-mr-5 col-start-1 col-end-7 md:col-end-4 h-full flex items-center text-title-promo text-brown font-bold font-mak rounded-r-full border border-peach border-l-0",children:"UI / UX"}),(0,a.jsx)(c.q.div,{style:{translateX:e.to([0,1],[0,600]),rotate:e.to([0,1],[0,700])},className:"ml-[1px] md:row-start-1 col-start-7 md:col-start-4 h-full rounded-full ring-1 ring-peach aspect-square flex items-center justify-center",children:(0,a.jsx)(r,{className:"size-[50px] md:size-[100px]"})}),(0,a.jsx)("div",{style:{height:"calc(100% + 2px)"},className:"row-start-2 col-start-1 col-end-6 md:col-end-2 md:hidden h-full flex items-center rounded-r-full border border-peach border-l-0"}),(0,a.jsx)(c.q.div,{style:{translateX:e.to([0,1],[0,-600]),rotate:e.to([0,1],[0,-700])},className:"row-start-2 col-start-1 md:col-start-1 h-full rounded-full ring-1 ring-peach aspect-square flex items-center justify-center",children:(0,a.jsx)(n,{className:"size-[50px] md:size-[100px]"})}),(0,a.jsx)(o.Z,{className:"text-center block row-start-2 md:row-start-2 col-start-9 md:col-start-4 text-title-promo text-brown font-bold font-mak",children:"WEB"}),(0,a.jsx)(o.Z,{className:"row-start-3 md:row-start-1 col-start-1 md:col-start-7 col-end-7 md:col-end-13 md:text-center text-title-promo text-brown font-bold font-mak block",children:"DESIGNER"}),(0,a.jsx)(c.q.div,{style:{translateX:e.to([0,1],[0,-600]),rotate:e.to([0,1],[0,-700])},className:"ml-auto row-start-3 col-start-9 md:row-start-2 md:col-start-11 md:col-end-13 h-full aspect-square rounded-full ring-1 ring-peach flex items-center justify-center",children:(0,a.jsx)(l,{className:"size-[50px] md:size-[100px]"})}),(0,a.jsx)(o.Z,{as:"div",style:{height:"calc(100% + 2px)"},className:"pl-[38px] md:pl-16 row-start-4 md:row-start-2 col-start-1 md:col-start-7 md:col-end-10 h-full flex items-center text-title3 text-brown rounded-l-full border border-peach border-r-0",children:"Кученкова Арина"}),(0,a.jsxs)("div",{className:"col-start-1 col-end-13 rounded-full h-full md:ring-1 ring-peach flex items-center justify-center gap-8",children:[(0,a.jsx)(m.z,{asChild:!0,children:(0,a.jsx)(p.default,{href:"/#contacts",children:"Связаться"})}),(0,a.jsx)(m.z,{variant:"link",asChild:!0,children:(0,a.jsx)(p.default,{href:"/resume",children:"Резюме →"})})]})]})})}},4:function(e,i,s){"use strict";s.d(i,{n:function(){return o}});var a,t,r=s(7437),n=s(1657),l=s(3167),m=s(8792);(a=t||(t={})).body1="body1",a.body2="body2",a.title1="title1",a.title2="title2",a.title3="title3",a.title4="title4";let o=e=>{let{children:i,as:s,className:a,outlined:t,...l}=e,o=m.default;return(0,r.jsx)(o,{className:(0,n.cn)("text-brown font-bold",{"border-b border-brown":t},a),...l,children:i})};i.Z=e=>{let{as:i,size:s,family:a,className:t,children:n,...m}=e;return(0,r.jsx)(i||"p",{...m,className:(0,l.Z)({"text-body1":"body1"===s,"text-body2":"body2"===s,"text-title1":"title1"===s,"text-title2":"title2"===s,"text-title3":"title3"===s,"text-title4":"title4"===s,"font-mak":"mak"===a,"font-evolventa":"evolventa"===a},t),children:n})}},5674:function(e,i,s){"use strict";s.r(i),s.d(i,{WidthInfo:function(){return o}});var a=s(7437),t=s(4520),r=s(4),n=s(3219),l=s.n(n),m=s(1657);let o=e=>{let{className:i}=e,[s,{width:n}]=(0,t.Z)();return(0,a.jsxs)("div",{ref:s,className:(0,m.cn)("self-center",i,l().widthInfo),children:[(0,a.jsx)("div",{className:l().widthInfoLine}),(0,a.jsxs)(r.Z,{className:"whitespace-nowrap absolute left-1/2 bottom-3 -translate-x-1/2 text-peach",children:[Math.round(n)," px"]})]})}},5754:function(e,i,s){"use strict";s.d(i,{z:function(){return o}});var a=s(7437),t=s(2265),r=s(6316),n=s(7742),l=s(1657);let m=(0,n.j)("font-bold inline-flex items-center justify-center rounded-full text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{primary:"bg-brown text-background hover:bg-light-brown",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-brown animated-underline !py-1 !px-0",outlined:"text-brown border border-peach"},size:{default:"py-3 px-6",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"primary",size:"default"}}),o=t.forwardRef((e,i)=>{let{className:s,variant:t,size:n,asChild:o=!1,loading:c,...p}=e,d=o?r.g7:"button";return(0,a.jsx)(d,{disabled:c,className:(0,l.cn)(m({variant:t,size:n,className:s})),ref:i,...p})});o.displayName="Button"},1657:function(e,i,s){"use strict";s.d(i,{cn:function(){return t}});var a=s(3167);function t(){for(var e=arguments.length,i=Array(e),s=0;s<e;s++)i[s]=arguments[s];return(0,a.W)(i)}},2298:function(e){e.exports={icon:"List_icon__KIRnf"}},441:function(e){e.exports={lettersWrapper:"AnimatedHeading_lettersWrapper__S_3p9",isAnimating:"AnimatedHeading_isAnimating__NQRvl",letter:"AnimatedHeading_letter__hxeXy",jump:"AnimatedHeading_jump__DxNwi"}},1268:function(e){e.exports={trailsText:"Portfolio_trailsText__Nj4zn",item:"Portfolio_item__5VM8q",gallery:"Portfolio_gallery__c0mhx",container:"Portfolio_container__dA0OF",hero:"Portfolio_hero__aC65U",normal:"Portfolio_normal__F81hS"}},3873:function(e){e.exports={tabsWrapper:"ScrollableTabs_tabsWrapper__zIC0_"}},3219:function(e){e.exports={widthInfoLine:"WidthInfo_widthInfoLine__RNuqv",widthInfo:"WidthInfo_widthInfo__TySpR"}},1755:function(e,i,s){"use strict";s.r(i);var a=s(981);s(2846),i.default=e=>(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",...e,children:[(0,a.jsx)("g",{clipPath:"url(#bullet-point_svg__a)",children:(0,a.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M7 11.9a4.905 4.905 0 0 0-4.9-4.891c2.706 0 4.9-2.198 4.9-4.91a4.905 4.905 0 0 0 4.9 4.892A4.905 4.905 0 0 0 7 11.9",clipRule:"evenodd"})}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"bullet-point_svg__a",children:(0,a.jsx)("path",{fill:"#fff",d:"M0 0h14v14H0z"})})})]})},6747:function(e,i,s){"use strict";s.r(i);var a=s(981);s(2846),i.default=e=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",...e,children:(0,a.jsx)("path",{fill:"#251D15",fillRule:"evenodd",d:"M10 17c-.014-3.861-3.143-6.987-7-6.987 3.866 0 7-3.14 7-7.013.014 3.861 3.143 6.987 7 6.987-3.866 0-7 3.14-7 7.013",clipRule:"evenodd"})})}},function(e){e.O(0,[533,479,971,69,744],function(){return e(e.s=9446)}),_N_E=e.O()}]);