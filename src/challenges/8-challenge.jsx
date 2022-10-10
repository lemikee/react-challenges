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
      { currentQuestionIndex < questions.length &&
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
      }
      { currentQuestionIndex >= questions.length && <p onClick={() => setCurrentQuestionIndex(0)}>Your Score: {(score / questions.length) * 100}% <br />Click to try again!</p>}
    </div>
  );
};

export default App;

// function App() {
//   return <Quiz questions={QUESTIONS} />;
// }

// const Quiz = ({ questions }) => {
//   const [score, setScore] = useState(0);
//   const [currentQuestion, setCurrentQuestion] = useState(0);

//   const handleAnswer = (currentQuestion, index) => {
//     if (questions[currentQuestion].correct == index) {
//       setScore(score + 1);
//     }
//     setCurrentQuestion(currentQuestion + 1);
//   };

//   return (
//     <div style={{ margin: "auto", width: "30%" }}>
//       {currentQuestion < questions.length && (
//         <>
//           <h3>{questions[currentQuestion].question}</h3>
//           {questions[currentQuestion].answers.map((answer, index) => (
//             <p key={index }onClick={() => handleAnswer(currentQuestion, index)}>{answer}</p>
//           ))}
//         </>
//       )}
//       {currentQuestion >= questions.length && (
//         <p>{`You scored ${(score / questions.length) * 100}%`}</p>
//       )}
//     </div>
//   );
// };

// export default App;

// function App() {
//   return <Quiz questions={QUESTIONS} />;
// }

// const Quiz = ({ questions }) => {
//   const [score, setScore] = useState(0);
//   const [questionIndex, setQuestionIndex] = useState(0);

//   const nextQuestion = (answerIndex) => {
//     if (questions[questionIndex]["correct"] === answerIndex)
//       setScore(score + 1);
//     setQuestionIndex(questionIndex + 1);
//   };

//   const reset = () => {
//     setScore(0);
//     setQuestionIndex(0)
//   };

//   const currentQuestion = questions[questionIndex];

//   return (
//     <div>
//       <p>Welcome your Quiz!</p>
//       {questions[questionIndex] ? (
//         <Question question={currentQuestion} nextQuestion={nextQuestion} />
//       ) : (
//         <p>Your score is {Math.floor((score / questions.length) * 100)}% <br /> <b onClick={reset}>Click here to try again!</b></p>
//       )}
//     </div>
//   );
// };

// const Question = ({ question, nextQuestion }) => {
//   return (
//     <div>
//       <p>{question["question"]}</p>
//       <ul>
//         {question["answers"].map((answer, index) => (
//           <li key={index} onClick={() => nextQuestion(index)}>
//             {answer}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
