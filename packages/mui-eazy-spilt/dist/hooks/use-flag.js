import { useState, useCallback } from 'react';

function useFlag(defaultValue) {
  const [value, setValue] = useState(!!defaultValue);
  const onTrue = useCallback(() => {
    setValue(true);
  }, []);
  const onFalse = useCallback(() => {
    setValue(false);
  }, []);
  const onToggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);
  return {
    value,
    onTrue,
    onFalse,
    onToggle,
    setValue
  };
}

export { useFlag };
