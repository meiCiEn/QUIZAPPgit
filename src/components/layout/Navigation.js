const Navigation = () =>
{

    return (
        <div className="py-4 border-b-2 border-slate-900">
            <div className="w-full md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
                <div>
                    <a
                        // href="#"
                        className="inline-block py-2 text-2xl font-bold"
                    >
                        Femfacts Quiz
                    </a>
                </div>
                <div>
                    <div className="hidden md:block">
                        <a
                            //   href="#"
                            className="inline-block py-1 md:py-4 mr-6 "
                        >
                            Faire le quizz
                        </a>
                        <a
                            //   href="#"
                            className="inline-block py-1 md:py-4 mr-6 "
                        >
                            À propos
                        </a>
                        <a
                            //   href="#"
                            className="inline-block py-1 md:py-4"
                        >
                            En savoir plus
                        </a>
                
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navigation;