import { motion as Motion } from "framer-motion";
import { revealItem, staggerItems } from "./motionVariants";

export function Reveal({ children, className = "", delay = 0, id, as = "div" }) {
  const MotionElement = Motion[as];

  return (
    <MotionElement
      className={className}
      id={id}
      variants={revealItem}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ delay }}
    >
      {children}
    </MotionElement>
  );
}

export function Stagger({ children, className = "", id }) {
  return (
    <Motion.div
      className={className}
      id={id}
      variants={staggerItems}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      {children}
    </Motion.div>
  );
}
