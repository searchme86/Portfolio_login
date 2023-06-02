import { useRef, useEffect } from 'react';

function useDebounceRefactor<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
) {
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => {
      if (!timer.current) {
        return;
      }
      clearTimeout(timer.current);
    };
  }, []);

  const debouncedFunction = (...args: Parameters<T>): ReturnType<T> => {
    let result: any;
    const newTimer = setTimeout(() => {
      result = callback(...args);
    }, delay);
    clearTimeout(newTimer);
    timer.current = newTimer;
    return result;
  };

  return debouncedFunction;
}

export default useDebounceRefactor;
