// // App.js
// import React, { useState, useEffect } from 'react';
// // import Quiz from './components/quizApp/Quiz';
// import Quiz from './components/quizApp/Quiz';
// import Start from './components/quizApp/Start';
// import Result from './components/quizApp/Result';
// import { questions } from "./components/quizApp/questions";
// import Layout from './components/layout/Layout';
// import './App.css';


// export default function App ()
// {
//   // SET STATES
//   const [ questionIndex, setQuestionIndex ] = useState( 0 ); // index of questions array of objects
//   const [ question, setQuestion ] = useState( {} ); // the question being shown now
//   const [ questionNext, setQuestionNext ] = useState( {} ); // the question that follows
//   const [ predictedAnswer, setPredictedAnswer ] = useState( 0 ); // the user's answer (the value of the slider)
//   const [ predictedAnswerCheck, setPredictedAnswerCheck ] = useState( false ); // Has the user's answer been checked against the actual answer ?
//   const [ showAnswer, setShowAnswer ] = useState ( false ); // whether or not to reveal the answer
//   const [ answerAssessment, setAnswerAssessment ] = useState( "" ); // the feedback the user receives depending on how close his/her answer is to the real answer
//   const [ answerText, setAnswerText ] = useState( "" ); // the explanation the user receives depending on how close his/her answer is to the real answer
//   const [ marks, setMarks ] = useState( 0 );
//   const [ sliderMin, setSliderMin ] = useState( 1 ); // minimum value of slider scale
//   const [ sliderMax, setSliderMax ] = useState( 100 ); // maximum value of slider scale
//   const [ sliderDefault, setSliderDefault ] = useState( 1 ); // default Value of slider
//   const [ valueSet, setValueSet ] = useState (false);

//   // display controlling states
//   const [ showStart, setShowStart ] = useState( true );
//   const [ showQuiz, setShowQuiz ] = useState( false );
//   const [ showResult, setShowResult ] = useState( false );
  
//   // value of slider
//   const [ value, setValue ] = useState( 1 );
//   const [ answer, setAnswer ] = useState(false);

//   // 

//   const handleValueChange = (event  ) =>
//     {
  
//         getSliderValue(0);
//         setValue( event.target.value );
//         getSliderValue( value );
//         checkAnswer();
//         setAnswer(true);
  
//         console.log(`value = ${value}`)
  
  
//     };

//   // Set a Single Question
//   useEffect( () =>
//   {
//   // code in useEffect runs after the component has rendered
//     if ( questions.length > questionIndex )
//     {
//       setQuestion( questions[ questionIndex ] );
//       setQuestionNext( questions[ questionIndex + 1 ] );
//       setValue(questions[questionIndex].sliderMin);
//       setValueSet( true );
//       // if sliderLabel1 exists (because it has to be rendered first), change its text to the following:
//       if (sliderLabel1) {sliderLabel1.innerHTML="3 heures";}

//     } 
//   }, [ questions, questionIndex ] );


//   const sliderLabel= [...document.querySelectorAll(".css-yafthl-MuiSlider-markLabel")];


//   let sliderLabel1=sliderLabel[1];
//   // console.log(sliderLabel1);
  


//   // if (questions[questionIndex] === 0) {
    
//   // }
  

//   // Start the quiz
//   const startQuiz = () =>
//   {
//     setShowStart( false );
//     setShowQuiz( true );
//   };

//   // Check predicted answer against real answer and display a different answer text according to whether predicted answer is "correct", "bitHigh", "bitLow", "veryHigh" or "veryLow"
//   const checkAnswer = ( event ) =>
//   {
//     const question = questions[ questionIndex ];
//     if ( question.correct.value === predictedAnswer )
//     {
//       // setScore( score + 1 );
//       setAnswerAssessment( question.correct.assessment );
//       setAnswerText( question.correct.text );

//     } else if ( predictedAnswer >= question.veryLow.min && predictedAnswer <= question.veryLow.max )
//     {
//       setAnswerAssessment( question.veryLow.assessment );
//       setAnswerText( question.veryLow.text );
//     } else if ( predictedAnswer >= question.bitLow.min && predictedAnswer <= question.bitLow.max )
//     {
//       setAnswerAssessment( question.bitLow.assessment );
//       setAnswerText( question.bitLow.text );
//     } else if ( predictedAnswer >= question.bitHigh.min && predictedAnswer <= question.bitHigh.max )
//     {
//       setAnswerAssessment( question.bitHigh.assessment );
//       setAnswerText( question.bitHigh.text );
//     } else if ( predictedAnswer >= question.veryHigh.min && predictedAnswer <= question.veryHigh.max )
//     {
//       setAnswerAssessment( question.veryHigh.assessment );
//       setAnswerText( question.veryHigh.text );
//     }
//     // console.log(predictedAnswer);
//     // console.log(answerAssessment);
//   };

//   const showAnswerText = ( props ) =>
//   {
//     setShowAnswer( true );
//     setValueSet( false );
    
//   };

//   // Next Question - resets values, moves question index on
//   const nextQuestion = () =>
//   {
   
//     setPredictedAnswer( 0 ); // resets slider value
//     setQuestionIndex( questionIndex + 1 ); // increments question index by 1
//     setAnswerText( '' ); // resets the answer text
//     setShowAnswer( false ); // resets so answer is hidden
//     setAnswer(false); //
//     setPredictedAnswerCheck( false ); // don't check the answer yet
    

//     // console.log( `question.sliderMin = ${ question.sliderMin }` );
//     setSliderDefault( questionNext.sliderMin ); // takes minimum from scale of next question
//     setSliderMin( questionNext.sliderMin ); // takes minimum from scale of next question
//     setSliderMax( questionNext.sliderMax ); // takes maximum from scale of next question


//   };

//   const getSliderValue = ( val ) =>
//   {
//     setPredictedAnswer( val ); // value of the slider === the user's answer
//     setPredictedAnswerCheck( true ); // now check the answer
//   };


//   const getDefaultValue = ( value ) =>
//   { 
//     return value;
//    }

//   const resetPredictedAnswer = (  ) =>
//   {
//     setPredictedAnswer( 0 );
//   };

//   // Show Result
//   const gameOver = () =>
//   {
//     setPredictedAnswer( 0 ); // resets slider value
//     setValue( 0 );
//     getSliderValue(0);
//     setSliderDefault( 1 );
//     setShowResult( true );
//     setShowStart( false );
//     setShowQuiz( false );


//   };

//   // Start the quiz again
//   const startAgain = () =>
//   {
//     setShowStart( false );
//     setShowResult( false );
//     setShowQuiz( true );
//     setAnswerText( '' );
//     setAnswerAssessment( '' );
//     setPredictedAnswer( 0 );
//     setPredictedAnswerCheck( false );
//     setShowAnswer( false );
//     setQuestionIndex( 0 );
//     setQuestion( {} );
//     setQuestionNext( {} );
//     setMarks( 0 );
//     setSliderMin( 1 );
//     setSliderMax( 100 );
//     setSliderDefault( 1 );
//     setValue(0);
//     getSliderValue(0);
//   };

//   return (

//       <Layout>


//       <Start
//         startQuiz={ startQuiz }
//         showStart={ showStart }
//       />
//       <Quiz
//         showQuiz={ showQuiz }
//         question={ question }
//         questions={ questions }
//         checkAnswer={ checkAnswer }
//         predictedAnswer={ predictedAnswer }
//         answerAssessment={ answerAssessment }
//         answerText={ answerText }
//         showAnswerText={ showAnswerText }
//         showAnswer={ showAnswer }
//         questionIndex={ questionIndex }
//         nextQuestion={ nextQuestion }
//         getSliderValue={ getSliderValue }
//         showResult={ showResult }
//         gameOver={ gameOver }
//         sliderMin={ sliderMin }
//         sliderMax={ sliderMax }
//         sliderDefault={ sliderDefault }
//         resetPredictedAnswer={resetPredictedAnswer}
//         handleValueChange={handleValueChange}
//         value={value}
//         getDefaultValue={getDefaultValue}
//         predictedAnswerCheck={predictedAnswerCheck}
//         valueSet={valueSet}
//         sliderLabel1={sliderLabel1}
//         sliderLabel={sliderLabel}
//         answer={answer}



//       />
      
//       {/* Result Page */ }
//       <Result
//         showResult={ showResult }
//         questions={ questions }
//         marks={ marks }
//         startAgain={ startAgain } />

// {/* </div> */}
// </Layout>


//   );
// }



