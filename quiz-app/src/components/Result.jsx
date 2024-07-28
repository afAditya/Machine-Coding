export default function Result({ userAnswer, questions, onResetClick }) {
  const correctAnswers = userAnswer.filter((answer) => answer).length;

  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        You answered {correctAnswers} out of {questions.length} questions{" "}
        <span onClick={onResetClick}>Click here to Retry</span>
      </p>
      <ul>
        {questions.map((question, index) => {
          return (
            <li key={index} data-correct={userAnswer[index]}>
              Q{index + 1}. {question.question}
              <b>
                {userAnswer[index]
                  ? ""
                  : `- ${
                      question.answerOptions.find((ans) => ans.isCorrect).text
                    }`}
              </b>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
