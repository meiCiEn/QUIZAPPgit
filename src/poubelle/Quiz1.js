import React, { useState } from "react";
import { questions } from "./questions";
import stylesQuiz from "./Quiz.module.css";
import QuizSlider from './QuizSlider'


function Quiz() {

    // states

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [myAnswer, setMyAnswer] = useState("");
    // predictedAnswer is the answer the user gives on the slider
    const [predictedAnswer, setPredictedAnswer] = useState(0);
    const [predictedAnswerCheck, setPredictedAnswerCheck] = useState(false);
    const [predictedCorrectAnswer, setPredictedCorrectAnswer] = useState("");
    const [myAnswerNb, setMyAnswerNb] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [finish, setFinish] = useState(false);
    const [show, setShow] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false);
    const [clickAnswer, setClickAnswer] = useState(false);



    const showAnswerPrediction = () => {
        const question = questions[currentQuestion];
        if (question.correct.value === predictedAnswer) {
            setPredictedCorrectAnswer(question.correct.text)
        } else if (predictedAnswer >= question.wayTooLow.min && predictedAnswer <= question.wayTooLow.max) {
            setPredictedCorrectAnswer(question.wayTooLow.text);
        } else if (predictedAnswer >= question.bitLow.min && predictedAnswer <= question.bitLow.max) {
            setPredictedCorrectAnswer(question.bitLow.text);
        } else if (predictedAnswer >= question.bitHigh.min && predictedAnswer <= question.bitHigh.max) {
            setPredictedCorrectAnswer(question.bitHigh.text);
        } else if (predictedAnswer >= question.wayTooHigh.min && predictedAnswer <= question.wayTooHigh.max) {
            setPredictedCorrectAnswer(question.wayTooHigh.text);
        }
    }

    const checkAnswer = (variant) => {
        setMyAnswer(variant);
        setClickAnswer(true);
    };

    // compare user's answer with the correct answer, increase setScore by 1 every time their answer is correct.
    const checkCorrectAnswer = () => {
        if (myAnswer === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
    };

    // show answer button whenever the user click on a variant
    const showAnswer = () => {
        setShow(true);
        setShowExplanation(true);
    };

    // reset show answer button for the next question
    const reset = () => {
        setShow(false);
        setShowExplanation(false);
        setClickAnswer(false);
    };

    // determine when the game is over (after the user's clicked through all the questions)
    const finishHandler = () => {
        if (currentQuestion === questions.length - 1) {
            setFinish(true);
        }
    };

    // After the game ends, reset all the data so the user can play again
    const startOver = () => {
        setCurrentQuestion(0);
        setFinish(false);
        setMyAnswer("");
        setScore(0);
    };

    if (finish) {
        return (
            <div className="container ">
                <div className="wrapper">
                    <h3 className="text-center">
                        {`Game over! Thank you for playing :-)`}
                    </h3>
                    <button
                        className=""
                        onClick={() => startOver()}
                    >
                        Restart the quiz
                    </button>
                </div>
            </div>
        );

    } else {

        return (
            <div className="container">

                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                    <h2 className="text-2xl text-center py-2">
                        {questions[currentQuestion].question}
                    </h2>
                    <div className="text-2xl py-2">
                        {`${currentQuestion}/${questions.length}`}
                    </div>
                    {/* <div class="grid grid-cols-2 gap-4 py-2">
                        {questions[currentQuestion].variants.map((variant) => (
                            <div class="wrapper py-3 ">
                                <button
                                    key={variant.id} type="button"
                                    className="inline-block w-full bg-purple-100 rounded-lg hover:bg-purple-200 focus:bg-purple-200 focus:ring focus:ring-purple-300 text-purple-700 text-2xl px-6 py-2.5"
                                    onClick={() => checkAnswer(variant)}
                                >
                                    {variant}
                                </button>
                            </div>
                        ))}
                        {clickAnswer && (
                            <div className="wrapper">
                                <button
                                    className="px-6 py-2.5 bg-purple-600 text-white font-medium text-2xl leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                    onClick={() => showAnswer()}
                                >
                                    Show the response
                                </button>
                            </div>
                        )}
                        {show && (
                            <div className="wrapper">
                                <p className="text-center">
                                    {questions[currentQuestion].answer}
                                </p>
                                <p className="text-center">
                                    {questions[currentQuestion].explanation}
                                </p>
                            </div>

                        )}
                        {currentQuestion < questions.length - 1 && (
                            <div className="wrapper">
                                <button
                                    className="px-6 py-2.5 bg-purple-600 text-white font-medium text-2xl leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                    onClick={() => {
                                        setCurrentQuestion(currentQuestion + 1);
                                        checkCorrectAnswer();
                                        reset();
                                        setPredictedAnswerCheck(false);
                                        setPredictedCorrectAnswer("")
                                    }}
                                >
                                    Next question
                                </button>
                            </div>
                        )}
                    </div> */}
                    {currentQuestion === questions.length - 1 && (
                        <div className="wrapper">
                            <button
                                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-2xl leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                onClick={() => finishHandler()}
                            >
                                Results
                            </button>
                        </div >
                    )}


                </div>
                {predictedAnswerCheck && (
                    <div className="wrapper">
                        <p>{predictedCorrectAnswer}</p>
                        <button
                            className="px-6 py-2.5 bg-purple-600 text-white font-medium text-2xl leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                            onClick={() => showAnswerPrediction()}
                        >
                            Show Answer (Prediction)
                        </button>
                    </div>
                )}
                <QuizSlider
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    defaultValue={50}
                    onChange={(e, val) => { setPredictedAnswer(val); setPredictedAnswerCheck(true); }}
                />
            </div>


        );
    }

};

// show user's answer when they click on a variant

export default Quiz;
