const complainsComponent = document.getElementById("complainsComponent");
raFor(complainsComponent);

function onComplainClick(clickedElement) {
    const questionsService = QuestionsService.getInstance();
    questionsService.currentComplainKey = clickedElement.id;
    currentQuestion = questionsService.currentQuestion().questionText;
    ra(questionComponent);
}
