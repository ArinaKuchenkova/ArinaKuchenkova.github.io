"use client";
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { animated, useSpringRef, useTransition, useChain, useSpring, config, useTrail, useSprings } from 'react-spring';
import { useHover } from 'usehooks-ts'
import styles from './Portfolio.module.css';
import { AnimatedHeading } from './AnimatedHeading';
import { cn } from '@/lib/utils';
import Typography from '../Typography';
import { Button } from '../ui/button';
import IconClose from '@/icons/close.svg';
import { lock, unlock } from 'tua-body-scroll-lock';
import FsLightbox from 'fslightbox-react';
import type { PortfolioItem as PortfolioItemType } from '@/types/strapi';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { GalleryGridType } from '@/graphql/generated';
import { NEXT_PUBLIC_IMAGES_PREFIX, NEXT_PUBLIC_STRAPI_URL } from '@/lib/env';
import Link from 'next/link';

type PortfolioModalProps = {
  open?: boolean;
  data: PortfolioItemType;
  onClose?: () => void
}

const Gallery: React.FC<{ images: string[], gridType: GalleryGridType }> = ({ images = [], gridType = GalleryGridType.simple }) => {
  const [currentSlice, setCurrentSlice] = useState<undefined | number>(undefined);
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <div className={cn("grid grid-cols-4 gap-1 sm:gap-5", styles.gallery, {
        [styles.hero]: gridType === GalleryGridType.hero,
        [styles.normal]: gridType === GalleryGridType.normal,
        [styles.simple]: gridType === GalleryGridType.simple,
      })}>
        {images.map((src, index) => <img onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setToggler(prev => !prev)
          setCurrentSlice(index + 1);
        }} alt={`Portfolio image #${index + 1}`} src={`${src}`} loading='lazy' key={src} className="rounded-lg w-full h-full object-cover border border-beige" />)}
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
  const transition = useTransition(open ? data.previewImages : [], {
    ref: transApi,
    trail: 400 / data.previewImages.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  })

  useChain([transApi], [open ? 0.1 : 0])

  console.log(data.content)

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
          {transition((style, image) => (
            <animated.img
              className="aspect-square bg-white rounded-lg border border-beige"
              style={style}
              src={`${NEXT_PUBLIC_IMAGES_PREFIX}${image!.url}`}
            />
          ))}
        </div>
        {data.links && data.links.length > 0 && <div className='inline-grid auto-cols-max grid-flow-row gap-2 mt-6'>
          {data.links.map(link => 
            <Button key={link?.id} asChild variant={"outlined"} className="flex justify-between group min-w-[200px] font-normal">
              <Link href={link?.url || '#'} target="_blank" rel="noopener noreferrer">
                <span className="">{link?.label}</span>
                <span className="group-hover:translate-x-[6px] transition-transform ml-3">→</span>
              </Link>
            </Button>
          )}
        </div>}
        <div className='mt-10 empty:hidden flex flex-col gap-10'>
          {data.content?.map(content => {
            if (!content) {
              return null
            }
            switch (content.__typename) {
              case 'ComponentProjectTextBlock': {
                return (
                  <div>
                    {content.title && <Typography as="h3" className='mb-4 text-title4 text-brown font-bold'>
                      {content.title}
                    </Typography>}
                    {content.content && <div className={styles.content}>
                      <BlocksRenderer content={content.content}/>
                    </div>}
                  </div>
                )
              }
              case 'ComponentProjectGallery': {
                return <Gallery gridType={content.layout!} images={content.images?.map(i => `${NEXT_PUBLIC_IMAGES_PREFIX}${i!.url}`) || []} />
              }
              default: {
                return null
              }
            }
          })}
        </div>
      </div>
      <div className='col-start-1 col-end-13 flex items-center justify-center'>
        <Button onClick={onClose} variant={'ghost'} className='text-brown self-center'>
          Закрыть
        </Button>
      </div>
    </div>
  </div>
})

const imageCache = new Map<string, HTMLImageElement>();

export const preloadImage = (src: string) => {
  if (imageCache.has(src)) {
    const img = imageCache.get(src)!;
    return img.complete
      ? Promise.resolve(img)
      : new Promise((res, rej) => {
          img.onload = () => res(img);
          img.onerror = rej;
        });
  }

  const img = new Image();
  imageCache.set(src, img);

  return new Promise((res, rej) => {
    img.onload = () => res(img);
    img.onerror = rej;
    img.src = src;
  });
};

const getImageSrc = (src: string) => {
  if (!imageCache.has(src)) {
    const img = new Image();
    img.src = src;
    imageCache.set(src, img);
  }
  return imageCache.get(src)!.src;
};


const PortfolioItem: React.FC<PortfolioItemType> = (data) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isHover = useHover(ref);
  const transApi = useSpringRef()
  const [open, setOpen] = useState(false);

  const [springs, previewApi] = useSprings(data.previewImages.length, index => ({
    opacity: 0,
    scale: 0.2,
    config: {
      tension: 320,
      friction: 26,
    },
  }));

  useEffect(() => {
    previewApi.start(index => ({
      opacity: isHover ? 1 : 0,
      scale: isHover ? 1 : 0.2,
      delay: isHover ? 50 + index * 60 : 50,
    }));
  }, [isHover, previewApi]);

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
  }, [api, ref])

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

  const preloadedRef = useRef(false);

  const handleMouseEnter = () => {
    if (preloadedRef.current) return;
    preloadedRef.current = true;

    const gallery = data?.content?.find(i => i?.__typename === 'ComponentProjectGallery');
    // @ts-ignore
    gallery?.images?.slice(0, 4).forEach(image => {
      preloadImage(`${NEXT_PUBLIC_IMAGES_PREFIX}${image?.url}`);
    });
  };

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
    }} onMouseEnter={handleMouseEnter} className="group hover:bg-peach transition-colors cursor-pointer border-t border-peach last-of-type:border-b" onClick={handleOpenModal}>
      <div ref={ref} className="container flex justify-between items-center p-5 rounded-sm overflow-hidden">
        <div className='flex-1 relative'>
          <AnimatedHeading heading={String(data.title)} isHover={isHover} className="text-brown" />
        </div>
        <div className="hidden sm:flex h-16 gap-3 transform translate-x-2 group-hover:translate-x-0 transition-transform duration-200">
          {springs.map((style, index) => (
            <animated.img
              key={data.previewImages?.[index]?.url}
              src={`${NEXT_PUBLIC_IMAGES_PREFIX}${data.previewImages?.[index]?.url}`}
              style={style}
              className="size-16 rounded-lg"
              alt={`Preview image #${index + 1} for ${data.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  </>
}

export const Portfolio: React.FC<{ data: PortfolioItemType[] }> = ({ data }) => {
  return <div className='mt-10'>
    {data.map((item, index) =>
      <PortfolioItem
        key={index}
        {...item}
      />
    )}
  </div>
}
