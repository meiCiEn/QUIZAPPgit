// App.js
import React, { useState, useEffect } from 'react';
// import Quiz from './components/quizApp/Quiz';
import Quiz from './components/quizApp/Quiz';
import Start from './components/quizApp/Start';
import Result from './components/quizApp/Result';
import { questions } from "./components/quizApp/questions";
import './App.css';

export default function App ()
{
  // set states
  const [ questionIndex, setQuestionIndex ] = useState( 0 ); // index of questions array of objects
  const [ question, setQuestion ] = useState( {} );
  const [ questionNext, setQuestionNext ] = useState( {} );
  const [ predictedAnswer, setPredictedAnswer ] = useState( 0 ); // the user's answer (the value of the slider)
  const [ predictedAnswerCheck, setPredictedAnswerCheck ] = useState( false );
  const [ showAnswer, setShowAnswer ] = useState( false );
  const [ answerText, setAnswerText ] = useState( "" ); // the text the user receives depending on how close his/her answer is to the real answer
  const [ marks, setMarks ] = useState( 0 );
  const [ sliderMin, setSliderMin ] = useState( 1 ); // minimum value of slider scale
  const [ sliderMax, setSliderMax ] = useState( 100 ); // maximum value of slider scale
  const [ sliderDefault, setSliderDefault ] = useState( 1 ); // 

  // display controlling states
  const [ showStart, setShowStart ] = useState( true );
  const [ showQuiz, setShowQuiz ] = useState( false );
  const [ showResult, setShowResult ] = useState( false );

  console.log(questions);

  
  // Set a Single Question
  useEffect( () =>
  {
    if ( questions.length > questionIndex )
    {
      setQuestion( questions[ questionIndex ] );
      setQuestionNext( questions[ questionIndex + 1 ] );
    }
  }, [ questions, questionIndex ] );

  // Start Quiz
  const startQuiz = () =>
  {
    setShowStart( false );
    setShowQuiz( true );
  };

  // Check predicted answer against real answer and display a different answer text according to whether predicted answer is "correct", "bitHigh", "bitLow", "veryHigh" or "veryLow"
  const checkAnswer = ( event ) =>
  {
    const question = questions[ questionIndex ];
    if ( question.correct.value === predictedAnswer )
    {
      // setScore( score + 1 );
      setAnswerText( question.correct.text );

    } else if ( predictedAnswer >= question.veryLow.min && predictedAnswer <= question.veryLow.max )
    {
      setAnswerText( question.veryLow.text );
    } else if ( predictedAnswer >= question.bitLow.min && predictedAnswer <= question.bitLow.max )
    {
      setAnswerText( question.bitLow.text );
    } else if ( predictedAnswer >= question.bitHigh.min && predictedAnswer <= question.bitHigh.max )
    {
      setAnswerText( question.bitHigh.text );
    } else if ( predictedAnswer >= question.veryHigh.min && predictedAnswer <= question.veryHigh.max )
    {
      setAnswerText( question.veryHigh.text );
    }
    // console.log(predictedAnswer);
    // console.log(answerText);
  };

  //TODO find out how to recuperate value from slider and plug into checkAnswer

  const showAnswer1 = () =>
  {
    console.log( predictedAnswer );
    checkAnswer();
    console.log( answerText );
  };



  const showAnswerText = ( props ) =>
  {
    setShowAnswer( true );
  };

  // Next Question
  const nextQuestion = () =>
  {
    setQuestionIndex( questionIndex + 1 );
    setAnswerText( '' );
    setShowAnswer( false );
    setPredictedAnswerCheck( false );
    setPredictedAnswer( 0 );

    console.log( `question.sliderMin = ${ question.sliderMin }` );
    setSliderMin( questionNext.sliderMin );
    setSliderMax( questionNext.sliderMax );
    setSliderDefault( questionNext.sliderMin );
    console.log( `sliderMin = ${ sliderMin }, sliderMax = ${ sliderMax }, sliderDefault = ${ sliderDefault }` );

  };

  const setSlider = ( val ) =>
  {
    setPredictedAnswer( val );
    setPredictedAnswerCheck( true );
    console.log( predictedAnswer, predictedAnswerCheck );
  };


  // Show Result
  const gameOver = () =>
  {
    setShowResult( true );
    setShowStart( false );
    setShowQuiz( false );
  };

  // Start the quiz again
  const startAgain = () =>
  {
    setShowStart( false );
    setShowResult( false );
    setShowQuiz( true );
    setAnswerText( '' );
    setPredictedAnswer( 0 );
    setPredictedAnswerCheck( false );
    setShowAnswer( false );
    setQuestionIndex( 0 );
    setQuestion( {} );
    setQuestionNext( {} );
    setMarks( 0 );
    setSliderMin( 1 );
    setSliderMax( 100 );
    setSliderDefault( 1 );
  };




  return (
    <div className="App">
      {/* Welcome Page */ }

      <Start
        startQuiz={ startQuiz }
        showStart={ showStart }
      />
      <Quiz
        showQuiz={ showQuiz }
        question={ question }
        questions={ questions }
        checkAnswer={ checkAnswer }
        predictedAnswer={ predictedAnswer }
        answerText={ answerText }
        showAnswerText={ showAnswerText }
        showAnswer={ showAnswer }
        questionIndex={ questionIndex }
        nextQuestion={ nextQuestion }
        setSlider={ setSlider }
        showResult={ showResult }
        gameOver={ gameOver }
        sliderMin={ sliderMin }
        sliderMax={ sliderMax }
        sliderDefault={ sliderDefault }


      />
      
      {/* Result Page */ }
      <Result
        showResult={ showResult }
        questions={ questions }
        marks={ marks }
        startAgain={ startAgain } />


    </div>

  );
}



