import React, { useState, useEffect } from "react";
import { questions } from "./questions";
import stylesQuiz from "./Quiz.module.css";
import QuizSlider from './QuizSlider';
// import { Box } from '@material-ui/core';


function Quiz ()
{

    // states

    const [ currentQuestion, setCurrentQuestion ] = useState( 0 );
    // predictedAnswer is the answer the user gives on the slider
    const [ predictedAnswer, setPredictedAnswer ] = useState( 0 );
    const [ predictedAnswerCheck, setPredictedAnswerCheck ] = useState( false );
    const [ predictedCorrectAnswer, setPredictedCorrectAnswer ] = useState( "" );
    const [ finish, setFinish ] = useState( false );
    const [ nextQuestion, setNextQuestion ] = useState( false );


    // values for the slider scale
    const [ sliderMin, setSliderMin ] = useState( 0 );
    const [ sliderMax, setSliderMax ] = useState( 0 );
    const [ sliderDefault, setSliderDefault ] = useState( 50 ); // SLIDER DEFAULT VALUE
    let sliderDefaultNumber = 0;



    const SliderApp = () =>
    {



        return (
            <div>
                <QuizSlider
                    // disabled={sliderEnabledDisabled}
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    key={ `slider-${ sliderDefault }` }

                    defaultValue={ sliderDefault }
                    // value={value}
                    // onChange = { ( e, val ) => { setPredictedAnswer( val ); setPredictedAnswerCheck( true ); } }
                    onChange={ ( e, val ) =>
                    {
                        setPredictedAnswer( val ); setPredictedAnswerCheck( true );
                        // {changeValue}
                    } }
                />
            </div>
        );
    };


    function handlesSetSliderDefault ( e, sliderValue )
    {

    }


    const showAnswerPrediction = () =>
    {
        const question = questions[ currentQuestion ];
        if ( question.correct.value === predictedAnswer )
        {
            // setScore( score + 1 );
            setPredictedCorrectAnswer( question.correct.text );
        } else if ( predictedAnswer >= question.wayTooLow.min && predictedAnswer <= question.wayTooLow.max )
        {
            setPredictedCorrectAnswer( question.wayTooLow.text );
        } else if ( predictedAnswer >= question.bitLow.min && predictedAnswer <= question.bitLow.max )
        {
            setPredictedCorrectAnswer( question.bitLow.text );
        } else if ( predictedAnswer >= question.bitHigh.min && predictedAnswer <= question.bitHigh.max )
        {
            setPredictedCorrectAnswer( question.bitHigh.text );
        } else if ( predictedAnswer >= question.wayTooHigh.min && predictedAnswer <= question.wayTooHigh.max )
        {
            setPredictedCorrectAnswer( question.wayTooHigh.text );
        }
    };

    const ShowAnswerButtonDisabled = ( props ) =>
    {
        return (
            <div className="wrapper text-right">
                <button disabled={ true }
                    className="px-6 py-2.5 bg-purple-400 text-white font-medium text-2xl leading-tight uppercase rounded"
                >
                    Afficher la réponse
                </button>
            </div>
        );
    };

    const ShowAnswerButtonActive = ( props ) => 
    {
        return (
            <div className="wrapper text-right">
                <button
                    className="px-6 py-2.5 bg-purple-600 text-white font-medium text-2xl leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={ () => { showAnswerPrediction(); setNextQuestion( true ); } }
                >
                    Afficher la réponse
                </button>
            </div>
        );
    };

    const ShowAnswerButton = () => 
    {
        if ( predictedAnswerCheck )
        {
            return <ShowAnswerButtonActive />;
        } else
        {
            return <ShowAnswerButtonDisabled />;
        }
    };



    const FinishButton = ( props ) => 
    {
        return (
            <div className="wrapper">
                <button
                    className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-2xl leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={ () => finishHandler() }
                >
                    Terminer le quizz
                </button>
            </div >
        );
    };

    const showFinishButton = () => {
        if ( currentQuestion + 1 === questions.length)
        console.log(`jeu terminé`)
        {
        return  <FinishButton />
  
        }
    };

    // // show answer button whenever the user click on a variant
    // const showAnswer = () =>
    // {
    //     setShow( true );
    //     setExplanation( true );
    // };

    // reset show answer button for the next question
    // const reset = () =>
    // {

    //     setShow( false );
    //     // setExplanation( false );
    //     setClickAnswer( false );

    // };

    // determine when the game is over (after the user's clicked through all the questions)
    const finishHandler = () =>
    {
        if ( currentQuestion === questions.length - 1 )
        {
            setFinish( true );
            console.log( `Time to stop!` );
        }
    };

    const resetSlider = () =>
    {
        const question = questions[ currentQuestion ];
        sliderDefaultNumber = question.sliderMin;
        console.log( sliderDefaultNumber );
    };



    if ( finish )
    {
        return (
            <div className="container ">
                <div className="wrapper text-center">
                    <h3 className="text-center">
                        <br></br>
                        { `Fin de la partie ! Merci d'avoir joué :-)` }<br></br>
                    </h3><br></br>
                    <button
                        className="px-6 py-2.5 bg-purple-600 text-white font-medium text-2xl leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                        onClick={ () =>
                        {
                            setPredictedAnswerCheck( false );
                            setPredictedCorrectAnswer( "" );
                        } }
                    >
                        Redémarrer
                    </button>
                </div>
            </div>
        );

    } else
    {

        return (
            <div className="container">
                <h2 className="text-2xl text-center py-2">
                    { questions[ currentQuestion ].question } <b>({ `${ ( currentQuestion ) + 1 }/${ questions.length }` })</b>
                </h2>

                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-xll">

                    <p>Déplacez le curseur pour deviner, puis vérifiez la réponse.</p>

                    <QuizSlider
                        // disabled={sliderEnabledDisabled}
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        key={ `slider-${ sliderDefault }` }
                        defaultValue={ sliderDefault }
                        // max={sliderMax}
                        // min={sliderMin}
                        // onChange = { ( e, val ) => { setPredictedAnswer( val ); setPredictedAnswerCheck( true ); } }
                        onChange={ ( e, val ) => { setPredictedAnswer( val ); setPredictedAnswerCheck( true ); { resetSlider(); } } }
                    />


                    <div>

                        { predictedAnswerCheck && (

                            <div className="wrapper text-right">
                                <br></br>
                                <h2>Current Question : { currentQuestion }</h2>
                                <h2>questions.length - 1 : { questions.length - 1 }</h2>
                                <b>{ predictedCorrectAnswer }</b>
                            </div>
                        ) }


                        {/* This appears too early */ }
                        {/* { currentQuestion === questions.length - 1 && (
                            <div className="wrapper">
                                <button
                                    className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-2xl leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                    onClick={ () => finishHandler() }
                                >
                                    Terminer le quizz
                                </button>
                            </div >
                        ) } */}

                    </div>
                </div>




                <ShowAnswerButton />
                { currentQuestion < questions.length - 1 && nextQuestion && (
                    <div className="wrapper">
                        <button
                            className="px-6 py-2.5 bg-purple-600 text-white font-medium text-2xl leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                            onClick={ () =>
                            {
                                setCurrentQuestion( currentQuestion + 1 );
                                // reset();
                                setPredictedAnswerCheck( false );
                                setPredictedCorrectAnswer( "" );
                                setNextQuestion( false );
                                setSliderDefault( sliderDefault );
                                console.log( `sliderDefault is now ${ sliderDefault }` );
                                showFinishButton();
// L'échelle - l'utilisateur ne peut pas sélectionner la bonne année pour la 4ème question
// setCurrentQuestion - qu'est-ce qui se passe quand il n'y a pas de question qui suit ?

                            } }
                        >
                            Question suivante
                        </button>
                    </div>
                ) }

{if ( currentQuestion + 1 === questions.length)
{
        console.log(`jeu terminé`)}
    }


                {/* { predictedAnswerCheck && (
                    <div className="wrapper text-right border-8">
                        <button
                            className="px-6 py-2.5 bg-purple-600 text-white font-medium text-2xl leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                            onClick={ () => { showAnswerPrediction(); showAnswer(); setNextQuestion( true ); } }
                        >
                            Afficher la réponse
                        </button>
                    </div>
                ) } */}
            </div>


        );
    }

};


// show user's answer when they click on a variant

export default Quiz;
