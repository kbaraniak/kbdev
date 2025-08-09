import { useState, useEffect, useRef } from "react";

export default function Header({ children }) {
  const headerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      if (scrollTop > header.offsetTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`w-full shadow-md transition-all duration-300 ${
        isSticky ? "sticky top-0 z-50" : "relative"
      }`}
      style={{}}
    >
      {children}
    </header>
  );
}
