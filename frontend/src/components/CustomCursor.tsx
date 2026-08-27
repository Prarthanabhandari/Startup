import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'view' | 'drag'>('default');
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide default cursor on desktop
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return; // Disable custom cursor on mobile/touch devices

    document.body.style.cursor = 'none';
    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Find closest interactive parent or target with cursor type
      const interactiveEl = target.closest('a, button, [role="button"], input, select, textarea, [data-cursor]');
      
      if (interactiveEl) {
        const customType = interactiveEl.getAttribute('data-cursor');
        if (customType === 'view') {
          setCursorType('view');
        } else if (customType === 'drag') {
          setCursorType('drag');
        } else {
          setCursorType('pointer');
        }
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-electric-cyan/40 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: cursorType === 'pointer' ? 1.5 : cursorType === 'view' || cursorType === 'drag' ? 2.2 : 1,
          backgroundColor: cursorType === 'pointer' ? 'rgba(34, 211, 238, 0.05)' : cursorType === 'view' ? 'rgba(168, 85, 247, 0.15)' : cursorType === 'drag' ? 'rgba(234, 88, 12, 0.15)' : 'rgba(0, 0, 0, 0)',
          borderColor: cursorType === 'pointer' ? '#22d3ee' : cursorType === 'view' ? '#a855f7' : cursorType === 'drag' ? '#ea580c' : 'rgba(34, 211, 238, 0.4)',
        }}
      >
        {/* Hover Labels */}
        {cursorType === 'view' && (
          <motion.span 
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[8px] font-black tracking-widest text-luminous-violet uppercase font-mono"
          >
            View
          </motion.span>
        )}
        {cursorType === 'drag' && (
          <motion.span 
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[8px] font-black tracking-widest text-brand-orange uppercase font-mono"
          >
            Drag
          </motion.span>
        )}
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-electric-cyan pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: cursorType !== 'default' ? 0.5 : 1,
          backgroundColor: cursorType === 'view' ? '#a855f7' : cursorType === 'drag' ? '#ea580c' : '#22d3ee',
        }}
      />
    </>
  );
}
