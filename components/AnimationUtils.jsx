"use client";
import { useEffect, useRef } from "react";

/**
 * Hook do obsługi scroll reveal animations
 * Kompatybilny z IE 11+ dzięki IntersectionObserver polyfill
 */
export function useScrollReveal(threshold = 0.1) {
  const elementsRef = useRef([]);

  useEffect(() => {
    // Sprawdź czy IntersectionObserver jest wspierany
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
      // Fallback dla IE 10 i starszych - od razu pokazuj elementy
      elementsRef.current.forEach((el) => {
        if (el) el.classList.add('revealed');
      });
    }
  }, [threshold]);

  return elementsRef;
}

/**
 * Hook do obsługi parallax efektu
 * Kompatybilny z IE 11+
 */
export function useParallax(speed = 0.5) {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const scrolled = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
      const elementTop = elementRef.current.offsetTop;
      const elementHeight = elementRef.current.offsetHeight;
      
      // Sprawdź czy element jest w viewport
      if (scrolled + window.innerHeight > elementTop && scrolled < elementTop + elementHeight) {
        const yPos = -(scrolled - elementTop) * speed;
        
        // Użyj transform dla lepszej wydajności
        if (elementRef.current.style.transform !== undefined) {
          elementRef.current.style.transform = `translateY(${yPos}px)`;
        } else {
          // Fallback dla bardzo starych przeglądarek
          elementRef.current.style.top = yPos + 'px';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Wywołaj od razu

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return elementRef;
}

/**
 * Komponent ScrollReveal - automatycznie animuje dzieci przy scrollowaniu
 */
export function ScrollReveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    // Sprawdź czy IntersectionObserver jest wspierany
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
      // Fallback - pokaż od razu
      setTimeout(() => {
        if (ref.current) {
          ref.current.classList.add('revealed');
        }
      }, delay);
    }
  }, [delay]);

  return (
    <div ref={ref} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  );
}

/**
 * Komponent Parallax - dodaje efekt parallax do dziecka
 */
export function Parallax({ children, speed = 0.5, className = "" }) {
  const ref = useParallax(speed);

  return (
    <div ref={ref} className={`parallax ${className}`}>
      {children}
    </div>
  );
}

/**
 * Hook do animacji przy najeżdżaniu myszką
 */
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
