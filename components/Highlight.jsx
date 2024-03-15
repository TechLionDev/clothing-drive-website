import { useInView } from "react-intersection-observer";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useEffect, useState } from "react";

export default function Highlight({
  children,
  delay = 0,
  initialShow = false
}) {
  const [show, setShow] = useState(initialShow);
  const { ref, inView } = useInView({
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      setShow(true);
    }
  }, [inView]);

  return (
    <span className='inline' ref={ref}>
      <RoughNotation
        type='highlight'
        color='#df8e1d'
        show={show}
        order={delay}
        animationDelay={delay * 1000}
      >
        {children}
      </RoughNotation>
    </span>
  );
}
