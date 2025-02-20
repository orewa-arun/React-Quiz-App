
### This whole project is made using following tutorial : 
    https://www.youtube.com/watch?v=F2JCjVSZlG0


### INITIAL SETUP :

1. Use the following to create a react app instantly:
    ```bash
    npx create-react-app . --template typescript
    ```
2. Delete all the default css files in src folder as we will be custom designing at the end.
3. Delete all the test files in src for now.
4. Keep all your images in a seperate folder in src.
5. Setup the required fonts by including the embed tag in head tag in index.html from google fonts website:
    ```html
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100..900&display=swap" rel="stylesheet">
    ```

### COMPONENTS :

1. Create a components folder in src.
2. Components are units of the front-end functionality (They are actually functions starting with capital letters), making it easier to replicate and containerize the front end code.
3. Export each component after defining them.
    ```typescript
    const QuestionCard = () => <div>Question Card</div>
    export default QuestionCard;
    ```
4. This is how you insert a component for rendering:
    ```html
    <QuestionCard props={propObj}/>
    <!-- or pass the prop arguments individually-->
    <QuestionCard questionNr={number + 1} totalQuestions={TOTAL_QUESTIONS}>
    ```
5. Define the prop type definition, so that props can be clearly passed into a component. ex :
    ```typescript
    type Props = {
        id : Number,
        question : string,
        answer : string[]
    }

    const QuestionCard : React.FC<Props> = ({id, question, answer}) => (....);
    ```

### CONNECTING TO AN API:

1. In this project, we are using open trivia API for generating questions. We generated an API url.
2. Create an API.ts file in src, where we make all the api calls and retrieve information.
3. STEPS to retrieve information from an API endpoint : 
    * Define the endpoint.
    * Use await fetch(`url`) for obtaining data from the endpoint
    * Make it in json format using await data.json()
    ```typescript
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=31&difficulty=${difficulty}&type=multiple`;
    const data = await fetch(endpoint);
    const dataJson = await data.json();
    ```


### SIDE NOTES:
1. Event Handlers are functions that will let you handle events that come from mouse clicks, form submission etc.They are generally passed into tags like:
    ```html
    <form onSubmit={submitHanlder}>
        ...
    <form>
    
    <button onClick={buttonHandler}>
        ClickButton
    </button>
    ```
2. Use {} to include any js expression or value in react return ():
    ```jsx
    return (
        <p className="questionNumber">
            Question : {questionNr}
        </p>
    )
    ```
3. Use () for returning the renderable jsx code, and not {}. i.e instead of using :
    ```jsx
    const QuestionCard = () => {
        return (
            ...
        )
    }
    ```
    Use (ShortHand) :
    ```jsx
    const QuestionCard = () => (...)
    ```
4. Define all global states in App.tsx so that they can be played with using other props, you can use useState() hook for that:
    ```typescript
    <!-- loading is the variable state, setLoading is the state setter, and false is the initial state of loading -->
    const [loading, setLoading] = useState(false)
    ```
5. ENUMs are used for substituting values using other variable names:
    ```typescript
    export enum Difficulty{
        EASY : "easy",
        MEDIUM : "medium",
        HARD : "hard"
    }

    // now instead of "medium" i can use: 
    console.log(Difficulty.MEDIUM);
    ```
6. {...array} spreads the elements of the array. i.e `...` is the spread operator.
    ```typescript
    const newObj = {...obj, anotherObj};
    const sortedArray = [...array, extraElement].sort();
    ```
7. array.map(function) creates a new array where every element of the array is passed through the function and the return value
  is used.
    ```typescript
    const newArray = array.map((ele) => (ele + 1));
    ```
8. When you use events like formEvent or mouseEvent, the `value` option that you pass is crucial for further operation of those
 events in either callback function or in modifying states.
    ```jsx
    <button onClick={callback} value={valueOption} disabled={disableOption}>
        <span> Button </span>
    </button>
    ``` 