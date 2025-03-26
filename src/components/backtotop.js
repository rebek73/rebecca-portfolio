export const onRouteUpdate = () => {
    const backToTop = document.querySelector(".back-to-top");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    });
  };
  
  export const shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition,
  }) => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      return false;
    }
    return true;
  };