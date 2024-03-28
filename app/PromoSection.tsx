"use client";
import FigmaLogo from '@/icons/figma-logo.svg';
import IllustratorLogo from '@/icons/illustrator.svg';
import PhotoshopLogo from '@/icons/photoshop.svg';
import { Button } from "@/components/ui/button";
import Typography from '@/components/Typography';
import { useScroll, animated, useSpring } from 'react-spring';


export const PromoSection = () => {

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      console.log({
        scrollYProgress
      })
    },
    default: {
      immediate: true,
      delay: 0,
      config: {
        duration: 10
      }
    },
  })

  return <div className="flex flex-col">
    <div className="box-content border-t border-peach">
      <div className="container h-40 grid grid-cols-12 grid-flow-col gap-5 items-center">
        <Typography
          style={{
            height: 'calc(100% + 2px)',
          }}
          className="-mr-5 col-start-1 col-end-4 h-full flex items-center text-title-promo text-brown font-bold font-mak rounded-r-full border border-peach border-l-0">
          UI / UX
        </Typography>
        <animated.div style={{
          transform: scrollYProgress.to(scrollP => {
            return `translateX(${scrollP * 300}%) rotate(${scrollP * 250}deg)`;
          }),
        }}
          className="ml-[1px] col-start-4 h-full rounded-full ring-1 ring-peach w-40 flex items-center justify-center">
          <FigmaLogo className="size-[100px]" />
        </animated.div>
        <div
          style={{
            height: 'calc(100% + 2px)',
          }}
          className="col-start-5 col-end-7 h-full flex items-center rounded-r-full border border-peach border-l-0">
        </div>
        <Typography
          className="text-center block col-start-7 col-end-13 text-title-promo text-brown font-bold font-mak">
          DESIGNER
        </Typography>
      </div>
    </div>
    <div className="box-content border-t border-peach">
      <div className='h-40 container grid grid-cols-12 grid-flow-col gap-5 items-center'>
        <animated.div style={{
          transform: scrollYProgress.to(scrollP => {
            return `translateX(${-scrollP * 300}%) rotate(${-scrollP * 250}deg)`;
          }),
        }} className="col-start-1 h-full rounded-full ring-1 ring-peach size-40 flex items-center justify-center">
          <IllustratorLogo className="size-[100px]" />
        </animated.div>
        <Typography
          className="text-center block col-start-4 text-title-promo text-brown font-bold font-mak">
          WEB
        </Typography>
        <Typography
          as="div"
          style={{
            height: 'calc(100% + 2px)',
          }}
          className="pl-16 col-start-7 col-end-10 h-full flex items-center text-title3 text-brown rounded-l-full border border-peach border-r-0">
          Кученкова Арина
        </Typography>
        <animated.div style={{
          transform: scrollYProgress.to(scrollP => {
            return `translateX(${-scrollP * 300}%) rotate(${-scrollP * 250}deg)`;
          }),
        }} className="ml-auto col-start-11 col-end-13 h-full rounded-full ring-1 ring-peach size-40 flex items-center justify-center">
          <PhotoshopLogo className="size-[100px]" />
        </animated.div>
      </div>
    </div>
    <div className="box-content border-t border-b border-peach">
      <div className='container h-40 grid grid-cols-12 grid-flow-col gap-5'>
        <div className="col-start-1 col-end-13 rounded-full h-full ring-1 ring-peach flex items-center justify-center">
          <Button>Связаться</Button>
          <Button variant="link">Резюме →</Button>
        </div>
      </div>
    </div>
  </div>
}
