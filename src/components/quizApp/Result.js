import React from 'react';
import { Link } from "react-router-dom";
import { refreshPage } from '../../utils/utils';

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
                <Link to="/"><button 
                onClick= 
                {startAgain}
                >
                    Redémarrer
                </button></Link>
            </div>
        </div>
        </section>
    );
};

export default Result;