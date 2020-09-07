import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizDetails } from "./services/quiz_service";
import { QuestionType } from "./types/quiz_types";
import QuestionCard from "./components/QuestionCard";
import { Footer } from "./components/Footer";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  let [isLoading, setIsLoading] = useState(false);
  let [questions, setQuestions] = useState<QuestionType[]>([]);
  let [currentStep, setCurrentStep] = useState(0);
  let [score, setScore] = useState(0);
  let [gameOver, setGameOver] = useState(true);
  let [totalQuestions, setTotalQuestions] = useState(5);
  let [difficulty, setDifficulty] = useState("easy");
  let [category, setCategory] = useState("9");
  let [quiz, setQuiz] = useState<QuestionType[]>([]);
  let [start, setStart] = useState(false);
  let [isContinued, setIsContinued] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const questions: QuestionType[] = await getQuizDetails(totalQuestions, category, difficulty, 'multiple');
      setQuiz(questions)
    }
    fetchData();
  }, [totalQuestions, category, difficulty]);

  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!gameOver) {
      const answer = e.currentTarget.value;         // User's answer
      const correct = quiz[currentStep].correct_answer === answer;  // Check answer against correct answer
      if (correct) setScore((prev) => prev + 1);    // Add score if answer is correct
      const answerObject = {                        // Save the answer in the array for user answers
        question: quiz[currentStep].question,
        answer,
        correct,
        correctAnswer: quiz[currentStep].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  }

  if (!quiz.length)
    return <h3>Loading .... </h3>

  function restartQuiz() {
    setScore(0);
    setIsContinued(false);
    setStart(false);
    setGameOver(true);  
  }

  function doContinue() {
    setStart(false);
    setIsContinued(true);    
    setCurrentStep(0);
  }

  function showNext() {
    setCurrentStep(currentStep + 1)    
  }

  function setTotal(e: React.ChangeEvent<HTMLInputElement>) {
    setTotalQuestions(Number(e.target.value));
  }

  function setdifficulty(e: React.ChangeEvent<HTMLSelectElement>) {
    setDifficulty(e.target.value);
  }
  function setcategory(e: React.ChangeEvent<HTMLSelectElement>) {
    setCategory(e.target.value);
  }

  const startQuiz = async () => {
    setQuestions(questions);
    setIsLoading(false);
    setStart(true);
    setScore(0);
    setCurrentStep(0);
    setGameOver(false);
    setUserAnswers([]);
  }

  return (
    <div className="App">

      <h1>QUIZ APP</h1>
   
      {!start && !isContinued ? (
        <>
          <div className="options">
            <div className="box">
              <span><h4>Number of Questions</h4></span>
              <span>
                <input className="formElement"
                  type="number"
                  defaultValue={totalQuestions}
                  onChange={setTotal}
                  required={true}>
                </input>
              </span> </div>

            <div className="box">
              <span><h4>Difficulty</h4></span>
              <span>
                <select className="formElement"
                  defaultValue={difficulty}
                  onChange={setdifficulty}
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </span> </div>

            <div className="box">
              <span><h4>Category</h4></span>
              <span>
                <select className="formElement"
                  defaultValue={category}
                  onChange={setcategory}
                >
                  <option value="9">General Knowledge</option>
                  <option value="10">Entertainment: Books</option>
                  <option value="11">Entertainment: Film</option>
                  <option value="12">Entertainment: Music</option>
                  <option value="13">Entertainment: Musicals &amp; Theatres</option>
                  <option value="14">Entertainment: Television</option>
                  <option value="15">Entertainment: Video Games</option>
                  <option value="16">Entertainment: Board Games</option>
                  <option value="17">Science &amp; Nature</option>
                  <option value="18">Science: Computers</option>
                  <option value="19">Science: Mathematics</option>
                  <option value="20">Mythology</option>
                  <option value="21">Sports</option>
                  <option value="22">Geography</option>
                  <option value="23">History</option>
                  <option value="24">Politics</option>
                  <option value="25">Art</option>
                  <option value="26">Celebrities</option>
                  <option value="27">Animals</option>
                  <option value="28">Vehicles</option>
                  <option value="29">Entertainment: Comics</option>
                  <option value="30">Science: Gadgets</option>
                  <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                  <option value="32">Entertainment: Cartoon &amp; Animations</option>
                </select>
              </span> </div>
          </div>
          <div>
            <button className="btn" onClick={startQuiz}>Start</button>
          </div>
        </>)
        : null
      }

      {isLoading ? <h2>Loading ..... </h2> : null}

      {!gameOver && !isContinued ? (
        <div>
          <h2 className="score"> Your current score is: {score} out of {currentStep} </h2>

          <h3> <b> Question: {currentStep + 1} / {totalQuestions}</b></h3>
          <QuestionCard
            questionNr={currentStep + 1}
            totalQuestions={totalQuestions}
            question={quiz[currentStep].question}
            answers={quiz[currentStep].option}
            userAnswer={userAnswers ? userAnswers[currentStep] : undefined}
            callback={handleSubmit}
          />
        </div> ) : null }

      {!gameOver && !isLoading && currentStep !== totalQuestions - 1 && userAnswers.length === currentStep + 1 ? (
        <button onClick={showNext} className="btn">Next</button>) : null
      }

      {currentStep === totalQuestions - 1 ? (
        <button onClick={doContinue} className="btn">Continue</button>
        ) : null
      }

      {isContinued ? (
        <div className="App">
          <h2>Your final score is: <b>{score} </b> / <b>{totalQuestions}</b></h2>
          <button className="btn" onClick={restartQuiz}>Restart Quiz</button>
        </div>
        ) : null
      }

      <div><Footer /></div>

    </div>
  );
}

export default App;