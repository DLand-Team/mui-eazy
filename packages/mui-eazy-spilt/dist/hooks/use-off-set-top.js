import { useState, useCallback, useEffect, useMemo } from 'react';
import { useScroll } from '../node_modules/.pnpm/framer-motion@10.18.0_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/value/use-scroll.js';

function useOffSetTop(top = 0, options) {
  const {
    scrollY
  } = useScroll(options);
  const [value, setValue] = useState(false);
  const onOffSetTop = useCallback(() => {
    scrollY.on('change', scrollHeight => {
      if (scrollHeight > top) {
        setValue(true);
      } else {
        setValue(false);
      }
    });
  }, [scrollY, top]);
  useEffect(() => {
    onOffSetTop();
  }, [onOffSetTop]);
  const memoizedValue = useMemo(() => value, [value]);
  return memoizedValue;
}

export { useOffSetTop };
