import React from 'react';

const Result = ({ showResult, questions, marks, startAgain }) =>
{
    return (
        <section style={{ display: `${showResult ? 'block' : 'none'}` }}>
        <div className="container ">
            <div className="wrapper text-center">
                <h3 className="text-center">
                    <br></br>
                    { `Fin de la partie ! Merci d'avoir joué :-)` }<br></br>
                </h3><br></br>
                <button onClick= 
                    {startAgain}
                >
                    Redémarrer
                </button>
            </div>
        </div>
        </section>
    );
};

export default Result;