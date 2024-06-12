import React, { useState } from "react";
import { Difficulty, fetchQuizQuestions, QuestionState } from "./API";

// components
import QuestionCard from "./components/QuestionCard";

const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
  question : string,
  answer : string,
  correct : boolean,
  correct_answer : string
};

function App() {

  // States
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // console.log(fetchQuizQuestions(10, Difficulty.HARD));

  // Where the Questions will be fetched from API
  const startTrivia = async() => {
    setLoading(true);
    setGameOver(false);

    // Generally do some error handling
    // Here it is ignored as that is not the purpose of the tutorial
    const newQuestions : QuestionState[] = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.MEDIUM);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  // Checks answer when mouse clicks on the answer options
  // It will be used as a prop for QuestionCard component
  const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // User's answer
      const answer = e.currentTarget.value;
      
      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;

      // Add score if answer is correct
      if(correct) setScore(score + 1);

      // Save answer in the array for user answers
      const answerObject : AnswerObject = {
        question : questions[number].question,
        answer : answer,
        correct : correct,
        correct_answer : questions[number].correct_answer
      } 
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  }

  // Button handler for nextQuestion
  const nextQuestion = () => {
    // Move on to next question if not the last question
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  }

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      {gameOver || userAnswers.length == TOTAL_QUESTIONS ? (
              <button className="start" onClick={startTrivia}>
              Start
            </button>
        ): null
      }
      {/* Where the score will be displayed */}
      {!gameOver? (<p className="Score"> Score : {score}</p>) : null}

      {/* You can use a spinner instead */}
      {loading && (<p>Loading Question ...</p>)}
      
      {/* Fitting in the QuestionCard component */}
      {!loading && !gameOver && 
      (
        <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={ userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
        />
      )
      }

      {!gameOver && !loading && userAnswers.length == number + 1 && number !== TOTAL_QUESTIONS - 1 ? 
        (
            <button className="next" onClick={nextQuestion}>
              next
            </button>
        ) : null
      }



    </div>
  );
}

export default App;
