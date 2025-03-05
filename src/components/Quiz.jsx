import { useState, useCallback, useRef } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";
export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;
  const handleSelectedAnswer = useCallback(function handleSelectedAnswer(
    selctedAnswer
  ) {
    setUserAnswer((prevUserAnswer) => {
      return [...prevUserAnswer, selctedAnswer];
    });
  },
  []);

  const quizComplete = activeQuestionIndex === QUESTIONS.length;
  const handleSkipAnswer = useCallback(() => handleSelectedAnswer(null), []);
  if (quizComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Quiz Completed" />
        <h2>Quiz Complete</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectedAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
