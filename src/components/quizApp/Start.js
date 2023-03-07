import React from 'react';

const Start = ({ startQuiz, showStart }) => {
    return (
        <section style={{ display: `${showStart ? 'block' : 'none'}` }}>
            <div className="container">
                <div>
                    <div>
                        <h1>Quizz sur l'égalité des sexes</h1>
                        <button onClick={startQuiz}>Start Quiz</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;