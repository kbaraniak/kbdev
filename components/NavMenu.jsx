"use client";
import { useState, useRef, useEffect } from "react";

export default function NavMenu({ defaultActive = 0 }) {
  const [active, setActive] = useState(defaultActive);
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

  const menuItems = ["About Me", "Projects", "Collaboration", "Support"];

  // Zamiana nazwy na id (bez spacji, małe litery)
  const toId = (str) => str.toLowerCase().replace(/\s+/g, "");

  const springAnim = (target, current, velocity, mass = 1, stiffness = 0.1, damping = 0.6) => {
    const force = -stiffness * (current - target);
    const acceleration = force / mass;
    velocity += acceleration;
    velocity *= damping;
    current += velocity;
    return [current, velocity];
  };

  useEffect(() => {
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
  }, [active]);

  const handleClick = (index) => {
    setActive(index);
    if (index === 0) {
      // Dla pierwszej pozycji scroll na górę i usunięcie hash z URL
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.pushState(null, "", window.location.pathname);
    } else {
      // Scroll do elementu z id odpowiadającym menuItems[index]
      const id = toId(menuItems[index]);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        history.pushState(null, "", `#${id}`);
      }
    }
  };

  return (
    <nav className="relative flex md:flex-row flex-col items-center gap-2 bg-neutral-900 p-2 rounded-full w-fit mx-auto">
      <span
        ref={indicatorRef}
        className="absolute rounded-full md:border-white md:border-[3px]"
        style={{ pointerEvents: "none", opacity: 1 }}
      />
      {menuItems.map((item, index) => (
        <button
          key={index}
          ref={(el) => (buttonsRef.current[index] = el)}
          onClick={() => handleClick(index)}
          className="px-4 py-2 rounded-full relative z-10 text-white hover:text-gray-200 transition-colors duration-200"
        >
          {item}
        </button>
      ))}
    </nav>
  );
}
