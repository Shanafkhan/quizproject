import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";
export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);

  const handleSelectedAnswer = useCallback(function handleSelectedAnswer(
    selctedAnswer
  ) {
    setUserAnswer((prevUserAnswer) => {
      return [...prevUserAnswer, selctedAnswer];
    });
  },
  []);
  const activeQuestionIndex = userAnswer.length;
  const quizComplete = activeQuestionIndex === QUESTIONS.length;
  const handleSkipAnswer = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  );
  if (quizComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Quiz Completed" />
        <h2>Quiz Complete</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]; // duplicating the array so that we do not alter the original array
  /**
   * TO shuffle the array we use sort method, wehich takes the input and if positive parameter is passed,
   * it remains same if negative parameter is passed it shuffles the array, math.random gives the values between 0 and 1, deducting 0.5 may or
   * may not give negetive, this shuflles the array
   */
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
     
      <div id="question">
        <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer} /> {/**Here we add the key so that the component is reloaded
         * evrery time the key is changed, if the key is not passed question timer will execute once remain as it is for the next questions 
         */}
        <h2> {QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectedAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
