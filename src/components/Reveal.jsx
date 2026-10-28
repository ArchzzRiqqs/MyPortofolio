import { useInView } from "../hooks/useInView";

/** Pembungkus reveal-on-scroll. Perilaku visual sepenuhnya di motion.css. */
export default function Reveal({ as: Tag = "div", index = 0, className = "", children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      data-reveal
      className={`${className}${inView ? " is-in" : ""}`.trim()}
      style={{ "--i": index }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
