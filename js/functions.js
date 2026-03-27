const revealElements = document.querySelectorAll(".reveal");

const revealOnLoad = () => {
  revealElements.forEach((element, index) => {
    window.setTimeout(() => {
      element.classList.add("is-visible");
    }, 110 * index);
  });
};

const revealOnScroll = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  revealOnLoad();
  revealOnScroll();
});
