
import React, { useState } from 'react';
import QuizSliderApp  from './QuizSliderApp';
import BlurredBackground from '../../layouts/BlurredBackground.js';
// useRef - to handle scrollIntoView() when button is clicked. In this case I want the answer to scroll into view after the user clicks "afficher réponse".
// import {useRef} from 'react';


const Quiz = ( { showQuiz, question, questions, checkAnswer, answerAssessment, answerText, questionIndex, nextQuestion, showAnswer, answer, showAnswerText, gameOver, handleValueChange, getDefaultValue, value, divRef, questionRef} ) =>
{
        // we will call the scrollIntoView() method on the ref object when the object is clicked (our "afficher réponse button in Quiz.js")
        // const ref = useRef(null);

        

    function valueLabelFormat ( value, unit )
    {

        const hours = Math.floor( value / 60 );
        const minutes = value % 60;

        if ( unit === "minutes" )
        {
            if ( minutes === 0 && hours >= 1 )
            {
                return (
                    `${ hours } h` );

            } else if ( minutes === 0 && hours === 0 )
            {
                return (
                    `0 min`
                );

            } else if ( minutes >= 0 && hours === 0 )
            {
                return (
                    `${ minutes } min`
                );


            } else
            {
                return ( `${ hours } h ${ minutes } min` );

            }

        } else
        {

            return (
                `${ value } ${ unit }`

            );

        }

    }

    function valuetext ( value, label )
    {
        return `${ value } ${ label }`;
    }

    const [ index, setIndex ] = useState (0)
    
// const incrementIndex = () => {
//     setIndex (index+1);
//     console.log(`index = ${index}`);
//     return {index};
// }



// let thing = document.querySelector(".css-eg0mwd-MuiSlider-thumb");
// console.log(thing);

// let muiRoot = document.querySelector(".MuiBox-root");
// console.log(muiRoot);

// let newThing = document.createElement("div");
// newThing.className = "css-eg0mwd-MuiSlider-thumb";
// console.log(`newThing = ${newThing}`);
// if ( muiRoot ) {muiRoot.appendChild(newThing)};
// // if ( thing ) {thing.style.display = "none"};


    // sliderEndMarkLabel1.innerHTML = "3 heures";



    return (

        <section style={ { display: `${ showQuiz ? 'block' : 'none' }` } }>
            <BlurredBackground>
                <div className="container text-center">
                    <p >Question { questions.indexOf( question ) + 1 } / { questions?.length }</p>
                    <div ref={questionRef} style={{opacity: 1}} className="py-6">
                        <p className="text-2xl font-medium">{ question?.question }</p>

                        {/* <h1 className="">{ question.sliderMin }</h1> */ }
                    </div>
                    <div className="">
                        <p>Déplacez le curseur pour deviner, puis vérifiez la réponse.</p>
                    </div>
                    {/* Map sliders into separate array and only show the slider that's relevant to the question */ }
                    { questions.map( ( item, index ) => (
                        <div id={ `slider-${ index}` } key={ index } className="pt-12" style={ { display: `${ index === questionIndex ? 'block' : 'none' }` } }>

                            <QuizSliderApp

                                min={ item.sliderMin }
                                max={ item.sliderMax }
                                // defaultValue={ [getDefaultValue( item.sliderMin ), getDefaultValue(item.answerNb)] }
                                //TODO work out how to set value and value label of second slider
                                defaultValue={ getDefaultValue( item.sliderMin )}
                                onChange={ handleValueChange }
                                // onChangeCommitted={ handleValueCommitted(item.sliderMin) }
                                disabled={ showAnswer }
                                getAriaValueText={ valuetext }
                                marks={ item.marks }
                                unit={ item.unit }
                                item={ item }
                                valueLabelFormat={ valueLabelFormat( value, item.unit ) }
                            
 
                            />

                        </div>
                    )
                    )
                    }

<div className="" style={ { display: `${ showAnswer ? 'block' : 'none' }` } }>
                        <p  className="text-xl py-4 font-medium">{ answerAssessment }</p>
                        <p className="py-4">{ answerText }</p>
                    </div>

                    {
                        ( questionIndex + 1 ) !== questions.length ?
                            <div ref={divRef} className="flex gap-2 justify-center py-4" >
                                <div className="flex ">
                                    <button className="inline-flex items-center justify-center px-8 py-4 font-semibold tracking-wide text-white bg-slate-900 enabled:hover:bg-slate-600 rounded-lg h-[60px] disabled:opacity-20" onClick={ showAnswerText } disabled={ !checkAnswer || !answer || showAnswer }>Afficher Réponse</button>
                                </div>
                                <div className="flex">
                                    <button className="inline-flex items-center justify-center px-8 py-4 font-semibold tracking-wide text-white bg-slate-900 enabled:hover:bg-slate-600 rounded-lg h-[60px] disabled:opacity-20" onClick={ nextQuestion } disabled={ !showAnswer }>Question Suivante</button>
                                </div>

                            </div>
                            :
                            <div ref={divRef} className="flex gap-2 justify-center" >
                                <div className="flex">
                                    <button className="inline-flex items-center justify-center px-8 py-4 font-semibold tracking-wide text-white bg-slate-900 enabled:hover:bg-slate-600 rounded-lg h-[60px] disabled:opacity-20" onClick={ showAnswerText } disabled={ !checkAnswer || !answer || showAnswer}>Afficher Réponse</button>
                                </div>
                                <div className="flex">
                                    <button className="inline-flex items-center justify-center px-8 py-4 font-semibold tracking-wide text-white bg-slate-900 enabled:hover:bg-slate-600 rounded-lg h-[60px] disabled:opacity-20" onClick={ gameOver } disabled={ !showAnswer }>Show Result</button>
                                </div>
                            </div>
                    }


                </div>
            </BlurredBackground>
        </section>
    );
};

export default Quiz;

// To scroll to an element on click in React:

// Set a ref prop on the element you want to scroll to.
// Set the onClick prop on the other element.
// Every time the element is clicked, call the scrollIntoView() method on the ref object.