import { useEffect } from "react";

export const useLazyBackgroundLoad = () => {
  const getAllLazyResourses = () => {
    const intersectionObserver = new IntersectionObserver((ent, self) => {
      const lazyElemsCollection = ent.filter((elem) => elem.isIntersecting);
      lazyElemsCollection.forEach((el) => {
        intersectionObserver.unobserve(el.target);
        const htmlElem = el.target as HTMLElement;
        const background = htmlElem.getAttribute("data-src");
        if (!background) return;
        htmlElem.style.background = `url(${background}) no-repeat center`;
        htmlElem.style.filter = "none";
        htmlElem.removeAttribute("data-lazy");
        htmlElem.removeAttribute("data-src");
      });
    });
    document
      .querySelectorAll("[data-lazy]")
      .forEach((elem) => intersectionObserver.observe(elem));
  };

  useEffect(() => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", getAllLazyResourses);
    } else {
      getAllLazyResourses();
    }
  }, []);
};
