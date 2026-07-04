"use client";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../contexts/LanguageContext";

export default function NavMenu({ defaultActive = 0 }) {
  const { t, language, noAnim } = useLanguage();
  const router = useRouter();
  const [active, setActive] = useState(defaultActive);
  const [mobileOpen, setMobileOpen] = useState(false);
  const buttonsRef = useRef([]);
  const indicatorRef = useRef(null);

  const posRef = useRef({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    vx: 0,
    vy: 0,
    vw: 0,
    vh: 0,
  });

  const menuItems = [
    { label: t.nav.aboutMe, id: "aboutme" },
    { label: t.nav.projects, id: "projects" },
    { label: t.nav.collaboration, id: "collaboration" },
    { label: t.nav.support, id: "support" }
  ];

  const springAnim = (target, current, velocity, mass = 1, stiffness = 0.1, damping = 0.6) => {
    const force = -stiffness * (current - target);
    const acceleration = force / mass;
    velocity += acceleration;
    velocity *= damping;
    current += velocity;
    return [current, velocity];
  };

  useEffect(() => {
    if (noAnim) return;
    const targetBtn = buttonsRef.current[active];
    const indicator = indicatorRef.current;
    if (!targetBtn || !indicator) return;

    const target = {
      left: targetBtn.offsetLeft - 8,
      top: 0,
      width: targetBtn.offsetWidth,
      height: targetBtn.offsetHeight,
    };

    let animationFrameId;

    if (
      posRef.current.width === 0 &&
      posRef.current.height === 0 &&
      posRef.current.left === 0 &&
      posRef.current.top === 0
    ) {
      posRef.current = {
        left: target.left,
        top: 0,
        width: target.width,
        height: target.height,
        vx: 0,
        vy: 0,
        vw: 0,
        vh: 0,
      };
      indicator.style.width = `${target.width}px`;
      indicator.style.height = `${target.height}px`;
      indicator.style.transform = `translate(${target.left}px, ${target.top}px)`;
      indicator.style.borderColor = "white";
      indicator.style.borderWidth = "3px";
      indicator.style.opacity = "1";
      return;
    }

    const animate = () => {
      let { left, top, width, height, vx, vy, vw, vh } = posRef.current;

      [left, vx] = springAnim(target.left, left, vx);
      [top, vy] = springAnim(target.top, top, vy);
      [width, vw] = springAnim(target.width, width, vw);
      [height, vh] = springAnim(target.height, height, vh);

      posRef.current = { left, top, width, height, vx, vy, vw, vh };

      indicator.style.width = `${width}px`;
      indicator.style.height = `${height}px`;
      indicator.style.transform = `translate(${left}px, ${top}px)`;

      const isNear =
        Math.abs(left - target.left) < 0.1 &&
        Math.abs(top - target.top) < 0.1 &&
        Math.abs(width - target.width) < 0.1 &&
        Math.abs(height - target.height) < 0.1 &&
        Math.abs(vx) < 0.1 &&
        Math.abs(vy) < 0.1 &&
        Math.abs(vw) < 0.1 &&
        Math.abs(vh) < 0.1;

      if (!isNear) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        indicator.style.width = `${target.width}px`;
        indicator.style.height = `${target.height}px`;
        indicator.style.transform = `translate(${target.left}px, ${target.top}px)`;
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [active, language, noAnim]);

  const handleClick = (index) => {
    setActive(index);
    setMobileOpen(false);
    if (index === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.replaceState(null, "", window.location.pathname);
    } else {
      const id = menuItems[index].id;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", `#${id}`);
      } else {
        const prefix = language === 'pl_PL' ? '' : '/en';
        router.push(`${prefix}/#${id}`);
      }
    }
  };

  return (
    <>
      {/* Desktop Nav */}
      <nav className="relative hidden md:flex items-center gap-2 bg-neutral-900 p-2 rounded-full w-fit mx-auto">
        <span
          ref={indicatorRef}
          className="absolute rounded-full md:border-white md:border-[3px]"
          style={{ pointerEvents: "none", opacity: noAnim ? 0 : 1 }}
        />
        {menuItems.map((item, index) => (
          <button
            key={index}
            ref={(el) => (buttonsRef.current[index] = el)}
            onClick={() => handleClick(index)}
            className="px-4 py-2 rounded-full relative z-10 text-white hover:text-gray-200 transition-colors duration-200"
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobile Hamburger Container */}
      <div className="md:hidden relative">
        <button 
          className="relative flex justify-center items-center p-2 bg-neutral-900 rounded-md hover:bg-neutral-800 transition-colors cursor-pointer z-[9999]" 
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="text-white">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <>
            {/* Invisible backdrop to catch clicks */}
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
              onClick={() => setMobileOpen(false)}
            />
            
            <div 
               className="fixed top-16 mt-2 w-[95vw] max-w-lg bg-neutral-900 rounded-xl shadow-2xl p-6 border border-white/10 z-[9999]"
              style={{ 
                left: '2.5vw',
                animation: 'fadeIn 0.2s ease-out'
              }}
            >
            {/* Menu Items */}
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`
                    w-full py-3 px-4 rounded-lg text-left text-base font-medium
                    transition-all duration-200 smooth-transition
                    ${active === index 
                      ? 'bg-gradient-to-r from-red-900 to-red-700 text-white shadow-lg' 
                      : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700 hover:text-white'
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <svg 
                      className={`w-4 h-4 transition-transform ${active === index ? 'rotate-90' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </nav>
          </div>
          </>
        )}
      </div>

    </>
  );
}