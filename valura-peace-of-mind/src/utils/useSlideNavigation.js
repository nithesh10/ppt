import { useState, useEffect, useCallback } from 'react';

export default function useSlideNavigation(totalSlides) {
  const [current, setCurrent] = useState(0);
  const [showOverview, setShowOverview] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index) => {
    if (isTransitioning) return;
    const clamped = Math.max(0, Math.min(totalSlides - 1, index));
    if (clamped !== current) {
      setIsTransitioning(true);
      setCurrent(clamped);
      setHasInteracted(true);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  }, [current, totalSlides, isTransitioning]);

  const next = useCallback(() => {
    if (showOverview) return;
    goTo(current + 1);
  }, [current, goTo, showOverview]);

  const prev = useCallback(() => {
    if (showOverview) return;
    goTo(current - 1);
  }, [current, goTo, showOverview]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowOverview((v) => !v);
        return;
      }
      if (showOverview) {
        if (e.key >= '1' && e.key <= '9') {
          const idx = parseInt(e.key) - 1;
          if (idx < totalSlides) {
            goTo(idx);
            setShowOverview(false);
          }
        }
        return;
      }
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          next();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prev();
          break;
        default:
          if (e.key >= '1' && e.key <= '9') {
            const idx = parseInt(e.key) - 1;
            if (idx < totalSlides) goTo(idx);
          }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, prev, goTo, totalSlides, showOverview]);

  return { current, next, prev, goTo, showOverview, setShowOverview, hasInteracted, totalSlides };
}
