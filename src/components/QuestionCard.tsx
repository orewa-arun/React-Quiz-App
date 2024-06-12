import React from "react";
import { AnswerObject } from "../App";

import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

// These is prop structure definition
type Props = {
    question : string;
    answers : string[];
    callback : (e : React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer : AnswerObject | undefined;
    questionNr : number;
    totalQuestions : number;
};

// React.FC is type for functional component
// Define the props inside the FC<> tag
const QuestionCard : React.FC<Props> = ({question, answers, callback, userAnswer, questionNr, totalQuestions}) => {
    return (
        <Wrapper>
            <p className="number">
                Question : {questionNr} / {totalQuestions}
            </p>
            {/* Not to be used generally */}
            <p dangerouslySetInnerHTML={{__html : question}}/>
            <div>
                {
                    answers.map( (answer) => (
                        // A key has to be assigned
                        <ButtonWrapper
                         correct={userAnswer?.correct_answer === answer}
                         userClicked={userAnswer?.answer === answer}
                         key={answer}
                        >
                            {/* Set the value obtained upon clicking the button */}
                            <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                                <span dangerouslySetInnerHTML={{__html : answer}}/>
                            </button>
                        </ButtonWrapper>
                    )
                    )
                }
            </div>
        </Wrapper>
    );
}

export default QuestionCard;