import React from "react";

// These is prop structure definition
type Props = {
    question : string;
    answers : string[];
    callback : any;
    userAnswer : any;
    questionNr : number;
    totalQuestions : number;
};

// React.FC is type for functional component
// Define the props inside the FC<> tag
const QuestionCard : React.FC<Props> = ({question, answers, callback, userAnswer, questionNr, totalQuestions}) => {
    return (
        <div>
            <p className="number">
                Question : {questionNr} / {totalQuestions}
            </p>
            {/* Not to be used generally */}
            <p dangerouslySetInnerHTML={{__html : question}}/>
            <div>
                {
                    answers.map( (answer) => (
                        <div>
                            <button disabled={userAnswer} onClick={callback}>
                                <span dangerouslySetInnerHTML={{__html : answer}}/>
                            </button>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    );
}

export default QuestionCard;