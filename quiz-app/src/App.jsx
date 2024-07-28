import "./App.css";
import { useState } from "react";
import questions from "./static/question.json";
import Question from "./components/Question.jsx";
import Result from "./components/Result.jsx";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);

  const handlNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer([...userAnswer, isCorrect]);
  };
  const handleResetClick = () => {
    setCurrentQuestion(0);
    setUserAnswer([]);
  };
  return (
    <div className="App">
      <h1>World Quiz</h1>
      {currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handlNextQuestion}
        />
      )}

      {currentQuestion === questions.length && (
        <Result
          userAnswer={userAnswer}
          questions={questions}
          onResetClick={handleResetClick}
        />
      )}
    </div>
  );
}

export default App;
