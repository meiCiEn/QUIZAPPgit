import React from 'react';
import ImageDT from './man-woman-dt.svg';
import ImageMob from './man-woman-mob.svg';

const Start = ( { startQuiz, showStart } ) =>
{


    return (
        <section className="mb-32  pt-14" style={ { display: `${ showStart ? 'block' : 'none' }` } }>
            {/* <!-- Section: Design Block --> */ }


            <div className="grid lg:grid-cols-2 gap-6 xl:gap-12 ">
                <div className="lg:order-2 mb-6 lg:mb-0">

                    {/* <img
                        src={ ImageDT }
                        alt=""
                        className="object-cover w-full pt-4"
                    /> */}

                    <picture>
                        <source
                            srcSet={ ImageDT }
                            media="(min-width: 1024px)" // Tailwind desktop
                        />
                        <img src={ ImageMob } className="w-full md:w-4/5 lg:w-full m-auto" alt="Illustration d'un homme et d'une femme qui dégustent un café" />
                    </picture>

                </div>
                <div className="lg:order-1 mb-6 lg:mb-0">
                    <h1 className="text-2xl sm:text-4xl leading-snug pb-2 text-center lg:text-left font-extrabold">L'égalité hommes-femmes: existe-t-elle vraiment ?</h1>
                    <div className="py-4">
                        <p className="text-xl pb-4 lead">Aujourd’hui, la loi accorde les mêmes droits aux femmes et aux hommes - presque. </p>
                        <p className="pb-4 text-lg">Les filles et les garçons en Belgique suivent le même programme scolaire. Les femmes et les hommes peuvent se marier et se divorcer, l'une autant que l'autre, et ils ont les mêmes chances d'être élus.
                        </p>
                        <p className="pb-4 text-lg">Et pourtant, des inégalités subsistent. Répondez à notre quizz pour en savoir plus. </p>
                    </div>
                    <div className="flex justify-center space-x-2 my-8">
                        <button className="inline-flex items-center justify-center px-8 py-4 font-semibold tracking-wide text-white bg-slate-900 hover:bg-slate-600 rounded-lg h-[60px] disabled:bg-slate-200" onClick={ startQuiz }>Démarrer le quiz</button>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Start;