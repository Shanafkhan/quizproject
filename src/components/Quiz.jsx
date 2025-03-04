import { useState, useCallback, useRef } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";
export default function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex =
    answerState === "" ? userAnswer.length : userAnswer.length - 1;
  const handleSelectedAnswer = useCallback(
    function handleSelectedAnswer(selctedAnswer) {
      setAnswerState("answered");
      setUserAnswer((prevUserAnswer) => {
        return [...prevUserAnswer, selctedAnswer];
      });

      setTimeout(() => {
        if (selctedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

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

  return (
    <div id="quiz">
      <Question />
    </div>
  );
}
