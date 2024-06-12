import { shuffleArray } from "./utils";

// You obtain this type from the fetch()
// You console it and see the types associated with the data being logged
export type Question = {
    category : string;
    correct_answer : string;
    difficulty : string;
    incorrect_answers: string[];
    question : string;
    type : string
}

// Extending the properties needed
export type QuestionState = Question & {
    answers : string[]
}

// enum definition
export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuizQuestions = async (amount : number, difficulty : Difficulty) : Promise<QuestionState[]> => {
    // Trivia Questions from opentdb api
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=31&difficulty=${difficulty}&type=multiple`;

    // kinda like curl in bash
    const data = await fetch(endpoint);

    const dataJson = await data.json();
    // console.log(dataJson);

    // Check the dataJson obj structure in console for more details
    // dataJson.results is an array containing questions
    const responseData = dataJson.results.map((question : Question) => (
        {
        ...question,
        answers : shuffleArray([...question.incorrect_answers, question.correct_answer])
        }
    ));

    return responseData;

    // API helper url - gets all category ids
    // const allCategories = await (await fetch('https://opentdb.com/api_category.php')).json();
    // console.log(allCategories);
}