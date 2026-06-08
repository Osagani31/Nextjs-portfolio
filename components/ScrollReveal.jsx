"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  ...props
}) => {
  const ref = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default ScrollReveal;
