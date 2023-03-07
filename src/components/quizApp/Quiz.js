import React, { useState } from 'react';
import QuizSliderApp from './QuizSliderApp';





const Quiz = ( { showQuiz, question, questions, checkAnswer, answerText, setSlider, sliderMin, sliderMax, sliderDefault, questionIndex, nextQuestion, showAnswer, showAnswerText, gameOver, val } ) =>
{
    const [ value, setValue ] = useState( 1 );
    const handleValueChange = ( event ) =>
    {
        setValue( event.target.value )
        setSlider( value );
        checkAnswer();

    };
    const handleValueCommitted = (event) =>
    {
        console.log(value)
    }


    return (
        <section style={ { display: `${ showQuiz ? 'block' : 'none' }` } }>
            <div className="container">
                <div className="padding">
                    <h5>{ question?.question }</h5>
                    <h5>{ questions.indexOf( question ) + 1 } / { questions?.length }</h5>
                    {/* <h1 className="padding">{ question.sliderMin }</h1> */ }
                </div>
                <div className="padding">
                    <p>Déplacez le curseur pour deviner, puis vérifiez la réponse.</p>
                </div>
                {/* Map sliders into separate array and only show the slider that's relevant to the question */}
                {questions.map((item, index) => (
                <div key={index} className="padding" style={ { display: `${ index===questionIndex ? 'block' : 'none' }` } }>
                    
                    <QuizSliderApp

                        min={ item.sliderMin }
                        max={ item.sliderMax }
                        defaultValue={ item.sliderMin }
                        onChange={ handleValueChange }
                        onChangeCommitted={ handleValueCommitted }
                        disabled={ showAnswer }
                        
                    />

                    //TODO Disable slider when question answered
                    {/* <p>{ value }</p> */ }
                </div>
                )
                )
            }
                


                {
                    ( questionIndex + 1 ) !== questions.length ?
                        <>
                            <div className="padding">
                                <button onClick={ showAnswerText } disabled={ !checkAnswer }>Afficher Réponse</button>
                            </div>
                            <div className="padding">
                                <button onClick={ nextQuestion } disabled={ !showAnswer }>Question Suivante</button>
                            </div>

                        </>
                        :
                        <>
                            <div className="padding">
                                <button onClick={ showAnswerText } disabled={ !checkAnswer }>Afficher Réponse</button>
                            </div>
                            <div className="padding">
                                <button onClick={ gameOver } disabled={ !showAnswer }>Show Result</button>
                            </div>
                        </>
                }
                <div className="padding" style={ { display: `${ showAnswer ? 'block' : 'none' }` } }>
                    <p>{ answerText }</p>
                </div>

            </div>

        </section>
    );
};

export default Quiz;