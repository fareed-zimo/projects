// Notice there is no 'import' statement. 'qna' and 'tf' is
// available on the index-page because of the script tag above.
document.addEventListener("DOMContentLoaded", () => {
  const searchText = document.getElementById("text");
  const question = document.getElementById("question");
  const searchButton = document.getElementById("searchButton");
  const answerParagrapgh = document.getElementById("answer");

  let model;
  console.log("searchButton", searchButton);

  const loadModel = async () => {
    console.log("loading..");
    // model = await qna.load();
    console.log("loaded");
  };

  loadModel();

  searchButton.addEventListener("click", () => {
    console.log(model);
    // Find the answers
    // console.log(searchText.value);
    // console.log(question.value);
    model.model
      .findAnswers(question.value, searchText.value)
      .then((answers) => {
        console.log("Answers: ", answers);
        answerParagrapgh.innerText(answers);
      });
  });
});
