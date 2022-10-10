import React, { useState } from "react";

const QUESTIONS = [
  {
    question: "What is 2*(4+4)?",
    answers: ["2", "4", "8", "16"],
    correct: 3,
  },
  {
    question: "What is 9*9?",
    answers: ["18", "81", "80", "79"],
    correct: 1,
  },
  {
    question: "Who was the first president of the United States?",
    answers: [
      "George Washington",
      "John Adams",
      "John Quincy Adams",
      "Thomas Jefferson",
    ],
    correct: 0,
  },
  {
    question: "What state is Philadelphia in?",
    answers: [
      "Commonwealth of Pennsylvania",
      "New Jersey",
      "New York",
      "Massachusetts",
    ],
    correct: 0,
  },
  {
    question: "What are the two major political parties in the United States?",
    answers: [
      "Democratic Party & Republican Party",
      "Green Party & Red Party",
      "Bull Party & Moose Party",
      "Hamilton Party & Burr Party",
    ],
    correct: 0,
  },
];

function App() {
  return <Quiz questions={QUESTIONS} />;
}

const Quiz = ({ questions }) => {
  // YOUR CODE HERE

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (index) => {
    if (index === questions[currentQuestionIndex].correct) {
      setScore(score + 1);
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div>
      {currentQuestionIndex < questions.length && (
        <div>
          <h3>{questions[currentQuestionIndex].question}</h3>
          <ol>
            {questions[currentQuestionIndex].answers.map((choice, index) => (
              <li key={index} onClick={() => handleAnswer(index)}>
                {choice}
              </li>
            ))}
          </ol>
        </div>
      )}
      {currentQuestionIndex >= questions.length && (
        <p onClick={() => setCurrentQuestionIndex(0)}>
          Your Score: {(score / questions.length) * 100}% <br />
          Click to try again!
        </p>
      )}
    </div>
  );
};

export default App;
