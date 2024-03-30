"use client";
import React, { Ref, RefObject, useEffect, useRef, useState } from 'react';
import { useScroll, animated, useSpringRef, useTransition, useChain, useSpring, config } from 'react-spring';
import { useHover } from 'usehooks-ts'
import styles from './Portfolio.module.css';
import useMeasure from 'react-use-measure';
import { data } from './data';

type PortfolioItemProps = {
  images: string[]
}

type GalleryProps = {
  open?: boolean;
  data: any[]
}

const Gallery: React.FC<GalleryProps> = ({ open, data }) => {
  const transApi = useSpringRef()
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  useChain([transApi], [
    0,
    open ? 0.1 : 0.6,
  ])

  return <div className={styles.container}>
    {transition((style, item) => (
      <animated.div
        className={styles.item}
        style={{ ...style, background: item.css }}
      />
    ))}
  </div>
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ images }) => {
  const [wrapperRef, wrapperSize] = useMeasure({ scroll: true });
  const ref = useRef<HTMLDivElement>(null);
  const isHover = useHover(ref);
  const transApi = useSpringRef()
  const [open, setOpen] = useState(false);

  const animatedImages = useTransition(isHover ? images : [], {
    ref: transApi,
    trail: 200 / images.length,
    from: { opacity: 0, scale: 0, },
    enter: { opacity: 1, scale: 1, },
    leave: { opacity: 0, scale: 0, },
    config: {
      duration: 200,
    }
  })

  useChain([transApi], [
    0,
    0.2,
  ])

  const [springs, api] = useSpring(
    () => ({
      opacity: 1,
      background: '#eee6e3',
      display: 'none',
      height: 0,
      width: 0,
      top: 0,
      left: 0,
      config: config.stiff,
    }),
    [wrapperSize.height, wrapperSize.width]
  )

  const handleOpenModal = () => {
    setOpen(true);
    api.set({
      opacity: 1,
      background: '#eee6e3',
      display: 'block',
      left: wrapperSize.left,
      top: wrapperSize.top,
      height: wrapperSize.height,
      width: wrapperSize.width,
    });
    api.start({
      // background: '#fffaf5',
      left: 0,
      top: 0,
      height: window.innerHeight,
      width: window.innerWidth,
    })
  }

  const handleCloseModal = async () => {
    await api.start({
      left: wrapperSize.left,
      top: wrapperSize.top,
      height: wrapperSize.height,
      width: wrapperSize.width,
      background: '#fffaf5',
      onResolve(result, ctrl, item) {
        ctrl.start({
          height: 0,
          opacity: 0,
          onResolve(result, ctrl, item) {
            ctrl.set({
              display: 'none'
            })
            setOpen(false)
          }
        })
      },
    })
  }

  return <>
    <animated.div style={springs} className="bg-beige rounded-sm fixed z-10">
      <div className="h-full w-full">
        <button onClick={handleCloseModal}>Close</button>
        <Gallery open={open} data={data} />
      </div>
    </animated.div>
    <div ref={wrapperRef} onClick={handleOpenModal}>
      <div ref={ref} className="group flex justify-between items-center p-5 rounded-sm overflow-hidden hover:bg-beige">
        <div className='flex-1 relative'>
          <animated.div className="text-title2 font-mak font-bold whitespace-nowrap">
            Web3 приложение Human
          </animated.div>
          {/* <animated.div style={text2SpringStyle} className="text-title2 font-bold whitespace-nowrap absolute left-0 top-0">
            Web3 приложение Human
          </animated.div> */}
        </div>
        <div className="flex gap-1 h-10 flex-row-reverse transform translate-x-2 group-hover:translate-x-0 transition-transform duration-200">
          {animatedImages((style, src) => (
            <animated.img style={style} className="size-10 rounded-sm" alt="heh" src={src} />
          ))}
          {/* {images.map((src) => )} */}
        </div>
      </div>
    </div>
  </>
}

export const Portfolio = () => {
  return <div>
    <PortfolioItem images={['/images/1.jpg', '/images/2.jpg', '/images/3.jpg']} />
  </div>
}
