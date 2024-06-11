import React from "react";

// components
import QuestionCard from "./components/QuestionCard";

function App() {

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
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>
        next
      </button>

    </div>
  );
}

export default App;
