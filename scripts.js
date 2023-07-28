
const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    // Toggle the "active" class to show/hide the answer
    question.classList.toggle("active");

    // Hide other answers when a question is clicked
    questions.forEach((q) => {
      if (q !== question) {
        q.classList.remove("active");
      }
    });
  });
});
