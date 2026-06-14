import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    // Check if the device has a fine pointer (mouse) and screen width is at least md (768px)
    const mediaQuery = window.matchMedia('(pointer: fine) and (min-width: 768px)');
    setIsVisible(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsVisible(e.matches);
    };

    // Modern browsers support addEventListener on MediaQueryList
    try {
      mediaQuery.addEventListener('change', handleMediaChange);
    } catch {
      // Fallback for older environments
      mediaQuery.addListener(handleMediaChange);
    }

    return () => {
      try {
        mediaQuery.removeEventListener('change', handleMediaChange);
      } catch {
        mediaQuery.removeListener(handleMediaChange);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const moveMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('hover-trigger')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleHoverStart);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleHoverStart);
    };
  }, [isVisible, cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      {/* Larger circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-primary rounded-full pointer-events-none z-[9998]"
        animate={{
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? 'rgba(201, 168, 76, 0.1)' : 'transparent',
        }}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}
