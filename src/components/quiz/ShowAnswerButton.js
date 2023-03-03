function showAnswerButtonDisabled(props) {
    return (
        <div className="wrapper text-right">
        <button disabled
            className="px-6 py-2.5 bg-purple-700 text-white font-medium text-2xl leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
        >
            Afficher la réponse
        </button>
    </div>
    )
}

function showAnswerButtonActive(props) {
    return (
        <div className="wrapper text-right border-8">
        <button
            className="px-6 py-2.5 bg-purple-600 text-white font-medium text-2xl leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={ () => { showAnswerPrediction(); showAnswer(); setNextQuestion( true ); } }
        >
            Afficher la réponse
        </button>
    </div>
    )
}
