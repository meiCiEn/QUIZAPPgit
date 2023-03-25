const About = () =>
{
  return (
    <>
      <section class="mb-32  pt-6">
        <h1 className="font-semibold leading-tight text-slate-900 text-4xl mb-6">À propos</h1>
        <div className="space-y-4">
          <p className="text-lg">Ce quiz sur l'égalité des genres en Belgique a pour but de mettre en évidence les avancées réalisées en matière de droits des femmes belges au cours des dernières décennies et pour sensibiliser les internautes  aux inégalités qui existent encore. La Belgique est un exemple intéressant à étudier, car elle a fait des progrès significatifs en matière de droits des femmes, mais il reste encore beaucoup à faire pour atteindre une véritable égalité.</p>

          <p className="text-lg">Le quiz a été créé en <a href="https://fr.reactjs.org/" className="font-bold hover:text-slate-500">React</a>, une bibliothèque JavaScript qui offre une multitude de fonctionnalités pour la création d'applications web interactives. Les composants React permettent une meilleure organisation et réutilisation du code, ce qui est un avantage majeur lorsque on crée un quiz avec de nombreuses questions et réponses.</p>

          <p className="text-lg">La bibliothèque JavaScript <a href="https://www.chartjs.org/" className="font-bold  hover:text-slate-500">Charts.js</a> a été utilisée pour créer des graphiques comparant la Belgique aux autres pays de l'Union européenne. Cela aidera à renforcer les informations présentées dans le quiz et à les rendre plus accessibles aux participants.</p>
        </div>
      </section>
    </>
  );
};

export default About;