
// enum definition
export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuizQuestions = async (amount : number, difficulty : Difficulty) => {
    // Trivia Questions from opentdb api
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=31&difficulty=${difficulty}&type=multiple`;

    // kinda like curl in bash
    const data = await fetch(endpoint);

    const dataJson = await data.json();
    console.log(dataJson);

    // API helper url - gets all category ids
    // const allCategories = await (await fetch('https://opentdb.com/api_category.php')).json();
    // console.log(allCategories);
}