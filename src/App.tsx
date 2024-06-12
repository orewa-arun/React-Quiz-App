import React, { useState } from "react";
import { Difficulty, fetchQuizQuestions } from "./API";

// components
import QuestionCard from "./components/QuestionCard";

const TOTAL_QUESTIONS = 10;

function App() {

  // States
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  fetchQuizQuestions(10, Difficulty.EASY);

  // Where the Questions will be fetched from API
  const startTrivia = async() => {

  }

  // Checks answer when mouse clicks on the answer options
  // It will be used as a prop for QuestionCard component
  const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) => {

  }

  // Button handler for nextQuestion
  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>

      <button className="start" onClick={startTrivia}>
        Start
      </button>

      {/* Where the score will be displayed */}
      <p className="Score"> Score : </p>

      {/* You can use a spinner instead */}
      <p>Loading Question ...</p>
      
      {/* Fitting in the QuestionCard component */}
      {/* <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answer}
        userAnswer={ userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        next
      </button>

    </div>
  );
}

export default App;
