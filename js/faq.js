const answer = document.querySelectorAll(".answer");
const toggleButton = document.querySelectorAll(".question__icon");

toggleButton.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.currentTarget.parentElement.classList.toggle("question--toggle");
    e.currentTarget.parentElement.children[1].classList.toggle(
      "question__icon--toggle"
    );
    e.currentTarget.parentElement.nextElementSibling.classList.toggle(
      "answer--toggle"
    );
    if (
      e.currentTarget.parentElement.children[1].classList.contains(
        "question__icon--toggle"
      )
    ) {
      e.currentTarget.innerHTML = `<i class="fas fa-minus-circle"></i>`;
    } else {
      e.currentTarget.innerHTML = `<i class="fas fa-plus-circle"></i>`;
    }
  });
});
