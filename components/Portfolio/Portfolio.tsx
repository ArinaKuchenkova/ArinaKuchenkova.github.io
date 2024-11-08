"use client";
import React, { memo, useCallback, useRef, useState } from 'react';
import { animated, useSpringRef, useTransition, useChain, useSpring, config, useTrail } from 'react-spring';
import { useHover } from 'usehooks-ts'
import styles from './Portfolio.module.css';
import { AnimatedHeading } from './AnimatedHeading';
import { cn } from '@/lib/utils';
import Typography from '../Typography';
import { Button } from '../ui/button';
import IconClose from '@/icons/close.svg';
import { GalleryGridType, PortfolioData } from './types';
import { lock, unlock } from 'tua-body-scroll-lock';
import FsLightbox from 'fslightbox-react';

type PortfolioModalProps = {
  open?: boolean;
  data: PortfolioData;
  onClose?: () => void
}


const Gallery: React.FC<{ images: string[], gridType: GalleryGridType }> = ({ images = [], gridType = GalleryGridType.normal }) => {
    const [currentSlice, setCurrentSlice] = useState<undefined | number>(undefined);
    const [toggler, setToggler] = useState(false);

    return (
      <>
        <div className={cn("grid grid-cols-4 gap-1 sm:gap-5", styles.gallery, {
          [styles.hero]: gridType === GalleryGridType.hero,
          [styles.normal]: gridType === GalleryGridType.normal,
          [styles.same]: gridType === GalleryGridType.same,
        })}>
          {images.map((src, index) => <img onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setToggler(prev => !prev)
            setCurrentSlice(index + 1);
          }} alt={`Portfolio image #${index + 1}`} src={src} loading='lazy' key={src} className="rounded-lg w-full h-full object-cover border border-beige" />)}
        </div>
        <FsLightbox toggler={toggler} sources={images} slide={currentSlice} onClose={(e) => {
          console.log('close');
          setCurrentSlice(undefined);
        }}/>
      </>
  )
}

const PortfolioModalContent: React.FC<PortfolioModalProps> = memo(({
  open,
  data,
  onClose,
}) => {
  const transApi = useSpringRef()
  const transition = useTransition(open ? data.headerImages : [], {
    ref: transApi,
    trail: 400 / data.headerImages.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  useChain([transApi], [open ? 0.1 : 0])

  return <div className="w-screen h-screen overflow-y-auto pb-5 sm:pb-10 relative pt-5 sm:pt-20">
    <Button
      onClick={onClose}
      variant="ghost"
      size="icon"
      className="text-brown hover:text-light-brown absolute right-2 sm:right-9 top-2 sm:top-9"
    >
      <IconClose />
    </Button>
    <Typography as='h1' className={cn('container text-title2 text-brown font-bold text-center pt-5 sm:pt-0 mb-5 sm:mb-9 transition-opacity', {
      "opacity-1": open,
      "opacity-0": !open
    })}>
      {data.title}
    </Typography>
    <div className="container grid grid-cols-12 grid-flow-col gap-5">
      <div className="col-start-1 col-end-13 sm:col-start-2 sm:col-end-12">
        <div className='grid grid-cols-4 gap-1 sm:gap-5'>
          {transition((style, src) => (
            <animated.img
              className="aspect-square bg-white rounded-lg border border-beige"
              style={style}
              src={src}
            />
          ))}
        </div>
        <div className='grid sm:grid-cols-2 gap-5 mt-10 empty:hidden mb-10'>
          {data.task && <div>
            <Typography as="h3" className='mb-4 text-title4 text-brown font-bold'>
              {data.taskTitle || 'Задача'}
            </Typography>
            {data.task}
          </div>}
          {data.implementation && <div>
            <Typography as="h3" className='mb-4 text-title4 text-brown font-bold'>
              {data.implementationTitle || 'Реализация'}
            </Typography>
            {data.implementation}
          </div>}
        </div>
        {data.images && <Gallery gridType={data.gridType} images={data.images} />}
        <div className='flex flex-col gap-16'>
          {data.sections?.map((section, index) => <div key={index}>
            <Typography className="text-title4 font-bold text-brown text-center mb-4">{section.name}</Typography>
            <Gallery gridType={GalleryGridType.hero} images={section.images} />
          </div>)}
        </div>
      </div>
      <div className='pt-8 col-start-1 col-end-13 flex items-center justify-center'>
        <Button onClick={onClose} variant={'ghost'} className='text-brown self-center'>
          Закрыть
        </Button>
      </div>
    </div>
  </div>
})

const preloadImage = (src?: string) => 
  new Promise((resolve, reject) => {
    if (!src) {
      resolve(null);
      return;
    }
    const image = new Image()
    image.onload = resolve
    image.onerror = reject
    image.src = src
  })

const PortfolioItem: React.FC<PortfolioData> = (data) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isHover = useHover(ref);
  const transApi = useSpringRef()
  const [open, setOpen] = useState(false);

  const animatedImages = useTransition(isHover ? data.headerImages : [], {
    ref: transApi,
    trail: 200 / data.headerImages.length,
    from: { opacity: 0, scale: 0, },
    enter: { opacity: 1, scale: 1, },
    leave: { opacity: 0, scale: 0, },
    reverse: true,
    config: {
      duration: 200,
    }
  })

  useChain([transApi], [
    0,
    0.2,
  ])

  const [modalStyles, api] = useSpring(
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
    []
  )

  const handleOpenModal = useCallback(async () => {
    if (!ref.current) {
      return
    }

    console.log('handle open modal');
    lock();
    // lock();
    setOpen(true);
    const wrapperSize = ref.current.getBoundingClientRect();
    api.set({
      opacity: 1,
      background: 'var(--color-peach)',
      display: 'block',
      left: wrapperSize.left,
      top: wrapperSize.top,
      height: wrapperSize.height,
      width: wrapperSize.width,
    });
    api.start({
      background: 'var(--color-background)',
      left: 0,
      top: 0,
      height: window.innerHeight,
      width: window.innerWidth,
      onResolve(result, ctrl, item) {
        ctrl.set({
          height: '100vh',
          width: '100vw',
        } as any)
      },
    })
  }, [data?.images, api, ref])

  const handleCloseModal = useCallback(async () => {
    if (!ref.current) {
      return
    }
    console.log('close');
    unlock();
    setOpen(false);
    api.set({
      height: window.innerHeight,
      width: window.innerWidth,
    } as any)
    const wrapperSize = ref.current.getBoundingClientRect();
    await api.start({
      left: wrapperSize.left,
      top: wrapperSize.top,
      height: wrapperSize.height,
      width: wrapperSize.width,
      background: 'var(--color-peach)',
      config: {
        duration: 350,
      },
      onResolve(result, ctrl, item) {
        ctrl.start({
          top: wrapperSize.top + wrapperSize.height / 2,
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
  }, [api, ref])

  return <>
    <animated.div style={modalStyles} className="rounded-sm fixed z-10 overflow-hidden">
      <PortfolioModalContent
        data={data}
        open={open}
        onClose={handleCloseModal}
      />
    </animated.div>
    <div ref={element => {
      ref.current = element;
    }} onMouseOver={() => {
      (data.images || []).slice(0, 4).map(preloadImage)
    }} className="group hover:bg-peach transition-colors cursor-pointer border-t border-peach last-of-type:border-b" onClick={handleOpenModal}>
      <div ref={ref} className="container flex justify-between items-center p-5 rounded-sm overflow-hidden">
        <div className='flex-1 relative'>
          <AnimatedHeading heading={String(data.title)} isHover={isHover} className="text-brown" />
        </div>
        <div className="hidden sm:flex h-16 gap-3 transform translate-x-2 group-hover:translate-x-0 transition-transform duration-200">
          {animatedImages((style, src, _, index) => (
            <animated.img style={style} className="size-16 rounded-lg" alt={`Preview image #${index + 1} for ${data.title}`} src={src} />
          ))}
        </div>
      </div>
    </div>
  </>
}

export const Portfolio: React.FC<{ data: any[] }> = ({ data }) => {
  return <div className='mt-10'>
    {data.map((item, index) =>
      <PortfolioItem
        key={index}
        {...item}
      />
    )}
  </div>
}
