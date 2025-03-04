import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
export default function Question() {
  return (
    <div id="question">
      <QuestionTimer
        key={activeQuestionIndex}
        timeout={10000}
        onTimeout={handleSkipAnswer}
      />
      {/**Here we add the key so that the component is reloaded
       * evrery time the key is changed, if the key is not passed question timer will execute once remain as it is for the next questions
       */}
      <h2> {QUESTIONS[activeQuestionIndex].text}</h2>
      <Answers
        key={activeQuestionIndex}
        answers={QUESTIONS[activeQuestionIndex].answers}
        selectedAnswer={userAnswer[userAnswer.length - 1]}
        answerState={answerState}
        onSelect={handleSelectedAnswer}
      />
    </div>
  );
}
