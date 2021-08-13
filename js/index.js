function scroll() {
  const arrow = document.querySelector(".arrow");
  const section = document.querySelector("#scroll-view");

  arrow.addEventListener("click", () => {
    section.scrollIntoView(false);
  });
}

scroll();
