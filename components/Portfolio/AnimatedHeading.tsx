import { CSSProperties, memo, useCallback, useEffect, useRef, useState } from "react"
import { SpringConfig, animated, useSpringRef, useTrail, useTransition } from "react-spring"
import styles from './AnimatedHeading.module.css';
import { cn } from "@/lib/utils";
import Typography from "../Typography";

const config: SpringConfig = {
  mass: 1,
  tension: 170,
  friction: 200,
  // tension: 210, friction: 20,
  damping: 0,
}

export const AnimatedHeading: React.FC<{
  heading: string,
  isHover: boolean;
  className?: string;
}> = memo(({ heading = 'Hello world', isHover = false, className = "" }) => {
  const letters = heading.split('') as string[];
  const [isAnimating, setIsAnimating] = useState(false);

  // const [heh, api] = useTrail(letters.length, () => ({
  //   translateY: "0%",
  //   delay: 0,
  //   config,
  // }))

  // useEffect(() => {
  //   if (isHover) {
  //     api.start({
  //       config: (key) => {
  //         return {

  //         }
  //       },
  //       translateY: "-30%",
  //       // onResolve: (_, ctrl) => {
  //       //   ctrl.start({
  //       //     translateY: "0%",
  //       //     delay: 150,
  //       //     config,
  //       //   })
  //       // },
  //     })
  //   }
  // }, [api, isHover])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isHover) {
      setIsAnimating(true);
    }

    timeoutId = setTimeout(() => {
      setIsAnimating(false);
    }, 300 + letters.length * 20)

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  }, [isHover, letters.length])

  return (
    <div className={cn("flex", styles.lettersWrapper, {
      [styles.isAnimating]: isAnimating,
    }, className)}>
      {/* {heh.map((style, index) => {
        const letter = letters[index]
        const ch = letter == " " ? <>&nbsp;</> : letter;
        return <animated.span style={style} key={index} >{ch}</animated.span>
      })} */}
      {letters.map((letter, index) => {
        const ch = letter == " " ? <>&nbsp;</> : letter;

        return (
          <Typography
            as="span"
            style={{ '--index': index } as CSSProperties}
            className={cn("inline-block pointer-events-none text-title3 sm:text-title2", styles.letter)}
            key={index}>
            {ch}
          </Typography>
        )
      })}
    </div>
  )
})
