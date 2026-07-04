"use client";
import { useEffect, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export function useScrollReveal(threshold = 0.1) {
  const elementsRef = useRef([]);
  const { noAnim } = useLanguage();

  useEffect(() => {
    if (noAnim) {
      elementsRef.current.forEach((el) => {
        if (el) el.classList.add('revealed');
      });
      return;
    }
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
            }
          });
        },
        { threshold: threshold }
      );

      elementsRef.current.forEach((el) => {
        if (el) observer.observe(el);
      });

      return () => {
        elementsRef.current.forEach((el) => {
          if (el) observer.unobserve(el);
        });
      };
    } else {
      elementsRef.current.forEach((el) => {
        if (el) el.classList.add('revealed');
      });
    }
  }, [threshold, noAnim]);

  return elementsRef;
}

export function useParallax(speed = 0.5) {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const scrolled = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
      const elementTop = elementRef.current.offsetTop;
      const elementHeight = elementRef.current.offsetHeight;
      
      if (scrolled + window.innerHeight > elementTop && scrolled < elementTop + elementHeight) {
        const yPos = -(scrolled - elementTop) * speed;
        
        if (elementRef.current.style.transform !== undefined) {
          elementRef.current.style.transform = `translateY(${yPos}px)`;
        } else {
          elementRef.current.style.top = yPos + 'px';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return elementRef;
}

export function ScrollReveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const { noAnim } = useLanguage();

  useEffect(() => {
    if (!ref.current) return;

    if (noAnim) {
      ref.current.classList.add('revealed');
      return;
    }

    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add('revealed');
              }, delay);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(ref.current);

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    } else {
      setTimeout(() => {
        if (ref.current) {
          ref.current.classList.add('revealed');
        }
      }, delay);
    }
  }, [delay, noAnim]);

  return (
    <div ref={ref} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  );
}

export function Parallax({ children, speed = 0.5, className = "" }) {
  const ref = useParallax(speed);

  return (
    <div ref={ref} className={`parallax ${className}`}>
      {children}
    </div>
  );
}

export function useHoverAnimation() {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return elementRef;
}
