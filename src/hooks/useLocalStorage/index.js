import { useState, useEffect } from 'react';

export const useLocalStorage = key => {
  const [value, setValue] = useState(() => localStorage.getItem(key));

  useEffect(() => {
    if (value) {
      localStorage.setItem(key, value);
    }
  }, [value])

  return [value, setValue];
}