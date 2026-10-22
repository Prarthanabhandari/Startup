import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    document.body.style.cursor = 'auto';
  }, []);

  return null;
}
