import { useState, useCallback } from 'react';

function useBoolean(defaultValue) {
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

export { useBoolean };