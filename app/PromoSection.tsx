"use client";
import FigmaLogo from '@/icons/figma-logo.svg';
import IllustratorLogo from '@/icons/illustrator.svg';
import PhotoshopLogo from '@/icons/photoshop.svg';
import { Button } from "@/components/ui/button";
import Typography from '@/components/Typography';
import { useScroll, animated } from 'react-spring';

export const PromoSection = () => {
  const { scrollYProgress } = useScroll({
    default: {
      immediate: true,
      delay: 0,
      config: {
        duration: 10
      }
    },
  })

  return <div className="flex flex-col promo-wrapper ">
    <div className='container grid grid-cols-12 auto-rows-[76px] md:auto-rows-[160px] grid-flow-col gap-x-1 gap-y-[1px] md:gap-x-5 items-center'>
      <Typography
        style={{
          height: 'calc(100% + 2px)',
        }}
        className="-mr-1 md:-mr-5 col-start-1 col-end-7 md:col-end-4 h-full flex items-center text-title-promo text-brown font-bold font-mak rounded-r-full border border-peach border-l-0">
        UI / UX
      </Typography>
      <animated.div
        style={{
          translateX: scrollYProgress.to([0, 1], [0, 300]),
          rotate: scrollYProgress.to([0, 1], [0, 360]),
        }}
        className="ml-[1px] md:row-start-1 col-start-7 md:col-start-4 h-full rounded-full ring-1 ring-peach aspect-square flex items-center justify-center">
        <FigmaLogo className="size-[50px] md:size-[100px]" />
      </animated.div>
      <div
        style={{
          height: 'calc(100% + 2px)',
        }}
        className="row-start-2 col-start-1 col-end-6 md:col-end-2 md:hidden h-full flex items-center rounded-r-full border border-peach border-l-0">

      </div>
      <animated.div
        style={{
          translateX: scrollYProgress.to([0, 1], [0, -300]),
          rotate: scrollYProgress.to([0, 1], [0, -360]),
        }}
        className="row-start-2 col-start-1 md:col-start-1 h-full rounded-full ring-1 ring-peach aspect-square flex items-center justify-center">
        <IllustratorLogo className="size-[50px] md:size-[100px]" />
      </animated.div>
      <Typography
        className="text-center block row-start-2 md:row-start-2 col-start-9 md:col-start-4 text-title-promo text-brown font-bold font-mak">
        WEB
      </Typography>
      <Typography
        className="row-start-3 md:row-start-1 col-start-1 md:col-start-7 col-end-7 md:col-end-13 md:text-center text-title-promo text-brown font-bold font-mak block">
        DESIGNER
      </Typography>
      <animated.div
        style={{
          translateX: scrollYProgress.to([0, 1], [0, -300]),
          rotate: scrollYProgress.to([0, 1], [0, -360]),
        }}
        className="ml-auto row-start-3 col-start-9 md:row-start-2 md:col-start-11 md:col-end-13 h-full aspect-square rounded-full ring-1 ring-peach flex items-center justify-center">
        <PhotoshopLogo className="size-[50px] md:size-[100px]" />
      </animated.div>
      <Typography
        as="div"
        style={{
          height: 'calc(100% + 2px)',
        }}
        className="pl-[38px] md:pl-16 row-start-4 md:row-start-2 col-start-1 md:col-start-7 md:col-end-10 h-full flex items-center text-title3 text-brown rounded-l-full border border-peach border-r-0">
        Кученкова Арина
      </Typography>
      <div className="col-start-1 col-end-13 rounded-full h-full md:ring-1 ring-peach flex items-center justify-center gap-2">
        <Button>Связаться</Button>
        <Button variant="link">Резюме →</Button>
      </div>
    </div>
  </div>
}
