
import React, { useEffect } from 'react';
import QuizSliderApp from './QuizSliderApp';
import BlurredBackground from './../layout/BlurredBackground.js';





const Quiz = ( { showQuiz, question, questions, checkAnswer, answerAssessment, answerText, questionIndex, nextQuestion, showAnswer, answer, showAnswerText, gameOver, handleValueChange, getDefaultValue, value } ) =>
{


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




    // sliderEndMarkLabel1.innerHTML = "3 heures";



    return (

        <section style={ { display: `${ showQuiz ? 'block' : 'none' }` } }>
            <BlurredBackground>
                <div className="container text-center">
                    <p >Question { questions.indexOf( question ) + 1 } / { questions?.length }</p>
                    <div className="py-6">
                        <p className="text-2xl font-medium">{ question?.question }</p>

                        {/* <h1 className="">{ question.sliderMin }</h1> */ }
                    </div>
                    <div className="">
                        <p>Déplacez le curseur pour deviner, puis vérifiez la réponse.</p>
                    </div>
                    {/* Map sliders into separate array and only show the slider that's relevant to the question */ }
                    { questions.map( ( item, index ) => (
                        <div id={ `slider-${ questionIndex }` } key={ index } className="pt-12" style={ { display: `${ index === questionIndex ? 'block' : 'none' }` } }>

                            <QuizSliderApp

                                min={ item.sliderMin }
                                max={ item.sliderMax }
                                defaultValue={ getDefaultValue( item.sliderMin ) }
                                onChange={ handleValueChange }
                                // onChangeCommitted={ handleValueCommitted(item.sliderMin) }
                                disabled={ showAnswer }
                                getAriaValueText={ valuetext }
                                marks={ item.marks }
                                unit={ item.unit }
                                item={ item }
                                valueLabelFormat={ valueLabelFormat( value, item.unit ) }

                            //TODO convert minutes to hours and minutes
                            />

                        </div>
                    )
                    )
                    }



                    {
                        ( questionIndex + 1 ) !== questions.length ?
                            <div className="flex gap-2 justify-center" >
                                <div className="flex ">
                                    <button className="inline-flex items-center justify-center px-8 py-4 font-semibold tracking-wide text-white bg-slate-900 enabled:hover:bg-slate-600 rounded-lg h-[60px] disabled:opacity-20" onClick={ showAnswerText } disabled={ !checkAnswer || !answer || showAnswer }>Afficher Réponse</button>
                                </div>
                                <div className="flex">
                                    <button className="inline-flex items-center justify-center px-8 py-4 font-semibold tracking-wide text-white bg-slate-900 enabled:hover:bg-slate-600 rounded-lg h-[60px] disabled:opacity-20" onClick={ nextQuestion } disabled={ !showAnswer }>Question Suivante</button>
                                </div>

                            </div>
                            :
                            <div className="flex gap-2 justify-center" >
                                <div className="flex">
                                    <button className="inline-flex items-center justify-center px-8 py-4 font-semibold tracking-wide text-white bg-slate-900 enabled:hover:bg-slate-600 rounded-lg h-[60px] disabled:opacity-20" onClick={ showAnswerText } disabled={ !checkAnswer || !answer || showAnswer}>Afficher Réponse</button>
                                </div>
                                <div className="flex">
                                    <button className="inline-flex items-center justify-center px-8 py-4 font-semibold tracking-wide text-white bg-slate-900 enabled:hover:bg-slate-600 rounded-lg h-[60px] disabled:opacity-20" onClick={ gameOver } disabled={ !showAnswer }>Show Result</button>
                                </div>
                            </div>
                    }
                    <div className="" style={ { display: `${ showAnswer ? 'block' : 'none' }` } }>
                        <p className="text-xl py-4 font-medium">{ answerAssessment }</p>
                        <p>{ answerText }</p>
                    </div>

                </div>
            </BlurredBackground>
        </section>
    );
};

export default Quiz;