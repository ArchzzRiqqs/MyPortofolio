import { useEffect, useRef, useState } from "react";

/** Mengembalikan [ref, inView]; inView menjadi true sekali saat elemen masuk viewport. */
export function useInView({ rootMargin = "0px 0px -12% 0px", threshold = 0.05 } = {}) {
  const ref = useRef(null);
  // Tanpa IntersectionObserver (browser lawas) konten langsung ditampilkan.
  const [inView, setInView] = useState(() => typeof IntersectionObserver === "undefined");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { rootMargin, threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin, threshold]);

  return [ref, inView];
}
