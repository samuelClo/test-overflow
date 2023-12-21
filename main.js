const getScrollbarWidth = () => {
  // Creating invisible container
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll"; // forcing scrollbar to appear
  // @ts-expect-error needed for WinJS apps
  outer.style.msOverflowStyle = "scrollbar";
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement("div");
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer.parentNode?.removeChild(outer);

  return scrollbarWidth;
};

document.documentElement.style.setProperty(
  "--scrollbar-width-js",
  getScrollbarWidth() + "px"
);

const articles = document.querySelectorAll(".l-include-gutter");
const body = document.querySelector("body");

articles.forEach((article) => {
  article.addEventListener("scroll", (e) => {
    const documentIsScrolledBottom =
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight;

    if (article.scrollTop <= 5 && !documentIsScrolledBottom) {
      //User began the scroll
      // document.documentElement.scroll({
      //   top: document.documentElement.scrollHeight,
      //   behavior: "smooth",
      // });
    }
  });
});
