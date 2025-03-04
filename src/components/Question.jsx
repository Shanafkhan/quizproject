import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
export default function Question({questionText, answers, onSelectAnswer,selectedAnswer, answerState,onSkipAnswer}) {
  return (
    <div id="question">
      <QuestionTimer
        timeout={10000}
        onTimeout={onSkipAnswer}
      />
      {/**Here we add the key so that the component is reloaded
       * evrery time the key is changed, if the key is not passed question timer will execute once remain as it is for the next questions
       */}
      <h2> {questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
