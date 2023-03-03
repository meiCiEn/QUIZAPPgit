
export const questions = [
    {
    id: "0",
        question: "Quelle est la proportion de femmes au parlement fédéral belge (Chambre des Représentants) ?",
        title: "Les femmes et le pouvoir",
        answer: "42 %",
        answerNb: 42,
        unit: "%",
        variants: [ "23 %", "38 %", "42 %", "56 %" ],
        sliderMin: 1,
        sliderMax: 100,
        correct: {text: "C'est exactement ça ! 42 % des sièges du parlement national étaient occupés par des femmes en 2022 en Belgique. Le taux actuel est plus élevé que celui de la plupart des autres pays européens. Seuls cinq pays du monde comptent 50 pour cent ou plus de femmes au parlement dans les chambres uniques ou basses : Le Rwanda (61 %), Cuba (53 %), le Nicaragua (51 %), le Mexique (50 %) et les Émirats arabes unis (50 %).", value: 42},
        bitHigh: {text: "C'est moins que ça. 42 % des sièges du parlement national étaient occupés par des femmes en 2022 en Belgique. Le taux actuel est plus élevé que celui de la plupart des autres pays européens. Seuls cinq pays du monde comptent 50 pour cent ou plus de femmes au parlement dans les chambres uniques ou basses : Le Rwanda (61 %), Cuba (53 %), le Nicaragua (51 %), le Mexique (50 %) et les Émirats arabes unis (50 %).", min: 43, max: 60},
        bitLow: {text: "Vous y êtes presque. 42 % des sièges du parlement national étaient occupés par des femmes en 2022 en Belgique. Le taux actuel est plus élevé que celui de la plupart des autres pays européens. Seuls cinq pays du monde comptent 50 pour cent ou plus de femmes au parlement dans les chambres uniques ou basses : Le Rwanda (61 %), Cuba (53 %), le Nicaragua (51 %), le Mexique (50 %) et les Émirats arabes unis (50 %).", min: 30, max: 41},
        wayTooHigh: {text: "Vous êtes loin du compte. En fait, 42 % des sièges du parlement national étaient occupés par des femmes en 2022 en Belgique. Le taux actuel est plus élevé que celui de la plupart des autres pays européens. Seuls cinq pays du monde comptent 50 pour cent ou plus de femmes au parlement dans les chambres uniques ou basses : Le Rwanda (61 %), Cuba (53 %), le Nicaragua (51 %), le Mexique (50 %) et les Émirats arabes unis (50 %).", min: 61, max: 100},
        wayTooLow: {text: "Vous êtes loin du compte. En fait, 42 % des sièges du parlement national étaient occupés par des femmes en 2022 en Belgique. Le taux actuel est plus élevé que celui de la plupart des autres pays européens. Seuls cinq pays du monde comptent 50 pour cent ou plus de femmes au parlement dans les chambres uniques ou basses : Le Rwanda (61 %), Cuba (53 %), le Nicaragua (51 %), le Mexique (50 %) et les Émirats arabes unis (50 %).", min: 1, max: 29},
        explanation: "42 % des sièges du parlement national étaient occupés par des femmes en 2022 en Belgique. Le taux actuel est plus élevé que celui de la plupart des autres pays européens. Seuls cinq pays du monde comptent 50 pour cent ou plus de femmes au parlement dans les chambres uniques ou basses : Le Rwanda (61 %), Cuba (53 %), le Nicaragua (51 %), le Mexique (50 %) et les Émirats arabes unis (50 %).",
        source: "Institut européen pour l’égalité entre les hommes et les femmes",
        sourceURL: "https://eige.europa.eu/gender-statistics/dgs/indicator/wmidm_pol_parl__wmid_natparl"
    },

        {
        id: "1",
        question: "Combien de temps de plus les femmes en Belgique consacrent-elles chaque jour au travail domestique non rémunéré que les hommes ?",
        answer: "1 heure et 20 minutes",
        answerNb: 80,
        unit: "minutes", // I would prefer this to be written as 1 heure 20 minutes
        variants: [ "40 minutes", "1 heure", "1 heure et 20 minutes", "2 heures" ],
        sliderMin: 1,
        sliderMax: 180,
        correct: {text: "C'est exactement ça ! En Belgique, les femmes consacrent 1 heure et 20 minutes de plus aux tâches ménagères, et 15 minutes de plus aux enfants. Même si les hommes passent en moyenne plus de temps dans le travail rémunéré chaque jour, les tâches ménagères des femmes signifient qu'elles bénéficient de 44 minutes de temps libre de moins chaque jour que leurs homologues masculins", value: 80},
        bitHigh: {text: "C'est moins que ça. En fait, en Belgique, les femmes consacrent 1 heure et 20 minutes de plus aux tâches ménagères, et 15 minutes de plus aux enfants. Même si les hommes passent en moyenne plus de temps dans le travail rémunéré chaque jour, les tâches ménagères des femmes signifient qu'elles bénéficient de 44 minutes de temps libre de moins chaque jour que leurs homologues masculins.", min: 81, max: 130},
        bitLow: {text: "Vous y êtes presque. En Belgique, les femmes consacrent 1 heure et 20 minutes de plus aux tâches ménagères, et 15 minutes de plus aux enfants. Même si les hommes passent en moyenne plus de temps dans le travail rémunéré chaque jour, les tâches ménagères des femmes signifient qu'elles bénéficient de 44 minutes de temps libre de moins chaque jour que leurs homologues masculins.", min: 40, max: 80},
        wayTooHigh: {text: "Vous êtes loin du compte. En fait, en Belgique, les femmes consacrent 1 heure et 20 minutes de plus aux tâches ménagères, et 15 minutes de plus aux enfants. Même si les hommes passent en moyenne plus de temps dans le travail rémunéré chaque jour, les tâches ménagères des femmes signifient qu'elles bénéficient de 44 minutes de temps libre de moins chaque jour que leurs homologues masculins.", min: 131, max: 180},
        wayTooLow: {text: "Vous êtes loin du compte. En fait, en Belgique, les femmes consacrent 1 heure et 20 minutes de plus aux tâches ménagères, et 15 minutes de plus aux enfants. Même si les hommes passent en moyenne plus de temps dans le travail rémunéré chaque jour, les tâches ménagères des femmes signifient qu'elles bénéficient de 44 minutes de temps libre de moins chaque jour que leurs homologues masculins.", min: 1, max: 39},
        explanation: "En Belgique, les femmes consacrent 1 heure et 20 minutes de plus aux tâches ménagères, et 15 minutes de plus aux enfants. Même si les hommes passent en moyenne plus de temps dans le travail rémunéré chaque jour, les tâches ménagères des femmes signifient qu'elles bénéficient de 44 minutes de temps libre de moins chaque jour que leurs homologues masculins.",
        source: "Institut pour l'égalité des femmes et des hommes",
        sourceURL: "https://igvm-iefh.belgium.be/fr/recherches/emploi"
    },

        {
        id: "2",
        question: "Quel est l'écart salarial entre les hommes et les femmes en Belgique ?",
        answer: "5 %",
        answerNb: 5.3,
        unit: "%",
        variants: [ "5,3 %", "10,4 %", "24 %", "33,1 %" ],
        sliderMin: 1,
        sliderMax: 30,
        correct: {text: "Bingo ! La Belgique avance à grands pas pour réduire l'écart salarial entre hommes et femmes. Il est beaucoup plus faible que celui de nombreux autres pays européens, dont l'Allemagne (18,3%), la France (15,8%) et les Pays-Bas (14,2%). Depuis 2012, tout employeur ayant au minimum 50 travailleurs est obligé de vérifier s'il y a ou non des inégalités salariales entre hommes et femmes au sein de l'entreprise. De bonnes structures d'accueil pour les jeunes enfants facilitent le retour au travail des femmes après l'accouchement. ", value: 5},
        bitHigh: {text: "C'est un peu moins que ça. La Belgique avance à grands pas pour réduire l'écart salarial entre hommes et femmes. Il est beaucoup plus faible que celui de nombreux autres pays européens, dont l'Allemagne (18,3%), la France (15,8%) et les Pays-Bas (14,2%). Depuis 2012, tout employeur ayant au minimum 50 travailleurs est obligé de vérifier s'il y a ou non des inégalités salariales entre hommes et femmes au sein de l'entreprise. De bonnes structures d'accueil pour les jeunes enfants facilitent le retour au travail des femmes après l'accouchement. ", min: 5, max: 10},
        bitLow: {text: "C'est un peu plus que ça. Même s'il n'y a pas encore de parité entre les hommes et les femmes, la Belgique avance à grands pas pour réduire l'écart salarial entre hommes et femmes. Il est beaucoup plus faible que celui de nombreux autres pays européens, dont l'Allemagne (18,3%), la France (15,8%) et les Pays-Bas (14,2%). Depuis 2012, tout employeur ayant au minimum 50 travailleurs est obligé de vérifier s'il y a ou non des inégalités salariales entre hommes et femmes au sein de l'entreprise. De bonnes structures d'accueil pour les jeunes enfants facilitent le retour au travail des femmes après l'accouchement. ", min: 0, max: 4},
        wayTooHigh: {text: "Heureusement que vous avez tort. La Belgique avance à grands pas pour réduire l'écart salarial entre hommes et femmes. Il est beaucoup plus faible que celui de nombreux autres pays européens, dont l'Allemagne (18,3%), la France (15,8%) et les Pays-Bas (14,2%). Depuis 2012, tout employeur ayant au minimum 50 travailleurs est obligé de vérifier s'il y a ou non des inégalités salariales entre hommes et femmes au sein de l'entreprise. De bonnes structures d'accueil pour les jeunes enfants facilitent le retour au travail des femmes après l'accouchement. ", min: 11, max: 30},
        wayTooLow: {text: "Heureusement que vous avez tort. La Belgique avance à grands pas pour réduire l'écart salarial entre hommes et femmes. Il est beaucoup plus faible que celui de nombreux autres pays européens, dont l'Allemagne (18,3%), la France (15,8%) et les Pays-Bas (14,2%). Depuis 2012, tout employeur ayant au minimum 50 travailleurs est obligé de vérifier s'il y a ou non des inégalités salariales entre hommes et femmes au sein de l'entreprise. De bonnes structures d'accueil pour les jeunes enfants facilitent le retour au travail des femmes après l'accouchement. ", min: 0, max: 0},
        explanation: "La Belgique avance à grands pas pour réduire l'écart salarial entre hommes et femmes. Il est beaucoup plus faible que celui de nombreux autres pays européens, dont l'Allemagne (18,3%), la France (15,8%) et les Pays-Bas (14,2%). Depuis 2012, tout employeur ayant au minimum 50 travailleurs est obligé de vérifier s'il y a ou non des inégalités salariales entre hommes et femmes au sein de l'entreprise. De bonnes structures d'accueil pour les jeunes enfants facilitent le retour au travail des femmes après l'accouchement. ",
        source: "Institut pour l'égalité des femmes et des hommes",
        sourceURL: "https://igvm-iefh.belgium.be/fr/recherches/emploi"
    },

        {
        id: "3",
        question: "En quelle année les femmes ont-elles obtenu le droit de vote en Belgique ?",
        answer: "1948",
        answerNb: 1948,
        unit: "",
        variants: [ "1887", "1919", "1930", "1948" ],
        sliderMin: 1900,
        sliderMax: 1960,
        correct: {text: "But ! La Belgique a bien accordé aux femmes le droit de voter en 1948. Elles ont exercé leur droit de vote pour la première fois pendant les élections de 1949. La Belgique marque un certain retard par rapport à d'autres pays comme la Nouvelle-Zélande qui l'a accordé en 1893, les Pays Bas (1919), le Royaume Uni (1928) ou encore la France (1944).", value: 1948},
        bitHigh: {text: "C'est plus tot que ça. La Belgique a commencé à reconnaître les femmes comme des citoyennes à part entier en 1948. Elles ont exercé leur droit de vote pour la première fois pendant les élections de 1949. La Belgique marque un certain retard par rapport à d'autres pays comme la Nouvelle-Zélande qui l'a accordé en 1893, les Pays Bas (1919), le Royaume Uni (1928) ou encore la France (1944).", min: 1949 , max: 1960},
        bitLow: {text: "Vous y êtes presque. La Belgique n'a reconnu les femmes comme des citoyennes à part entier qu'en 1948. Elles ont exercé leur droit de vote pour la première fois pendant les élections de 1949. La Belgique marque un certain retard par rapport à d'autres pays comme la Nouvelle-Zélande qui l'a accordé en 1893, les Pays Bas (1919), le Royaume Uni (1928) ou encore la France (1944).", min: 1940, max: 1947},
        wayTooLow: {text: "Non, en Belgique les femmes n'ont eu le droit de voter qu'après la deuxième guerre mondiale, en 1948. Elles ont exercé leur droit de vote pour la première fois pendant les élections de 1949. La Belgique marque un certain retard par rapport à d'autres pays comme la Nouvelle-Zélande qui l'a accordé en 1893, les Pays Bas (1919), le Royaume Uni (1928) ou encore la France (1944)", min: 1900, max: 1939},
        wayTooHigh: {text: "", min: null, max: null},
        explanation: "La Belgique n'a reconnu les femmes comme des citoyennes à part entier qu'en 1948. Elles ont exercé leur droit de vote pour la première fois pendant les élections de 1949. La Belgique marque un certain retard par rapport à d'autres pays comme la Nouvelle-Zélande qui l'a accordé en 1893, les Pays Bas (1919), le Royaume Uni (1928) ou encore la France (1944).",
        source: "Institut pour l'égalité des femmes et des hommes",
        sourceURL: "https://igvm-iefh.belgium.be/fr/recherches/emploi"
    },

    {
        id: "4",
        question: "NOUVELLE QUESTION En quelle année les femmes ont-elles obtenu le droit de vote en Belgique ?",
        answer: "1948",
        answerNb: 1948,
        unit: "",
        variants: [ "1887", "1919", "1930", "1948" ],
        sliderMin: 1900,
        sliderMax: 1960,
        correct: {text: "But ! La Belgique a bien accordé aux femmes le droit de voter en 1948. Elles ont exercé leur droit de vote pour la première fois pendant les élections de 1949. La Belgique marque un certain retard par rapport à d'autres pays comme la Nouvelle-Zélande qui l'a accordé en 1893, les Pays Bas (1919), le Royaume Uni (1928) ou encore la France (1944).", value: 1948},
        bitHigh: {text: "C'est plus tot que ça. La Belgique a commencé à reconnaître les femmes comme des citoyennes à part entier en 1948. Elles ont exercé leur droit de vote pour la première fois pendant les élections de 1949. La Belgique marque un certain retard par rapport à d'autres pays comme la Nouvelle-Zélande qui l'a accordé en 1893, les Pays Bas (1919), le Royaume Uni (1928) ou encore la France (1944).", min: 1949 , max: 1960},
        bitLow: {text: "Vous y êtes presque. La Belgique n'a reconnu les femmes comme des citoyennes à part entier qu'en 1948. Elles ont exercé leur droit de vote pour la première fois pendant les élections de 1949. La Belgique marque un certain retard par rapport à d'autres pays comme la Nouvelle-Zélande qui l'a accordé en 1893, les Pays Bas (1919), le Royaume Uni (1928) ou encore la France (1944).", min: 1940, max: 1947},
        wayTooLow: {text: "Non, en Belgique les femmes n'ont eu le droit de voter qu'après la deuxième guerre mondiale, en 1948. Elles ont exercé leur droit de vote pour la première fois pendant les élections de 1949. La Belgique marque un certain retard par rapport à d'autres pays comme la Nouvelle-Zélande qui l'a accordé en 1893, les Pays Bas (1919), le Royaume Uni (1928) ou encore la France (1944)", min: 1900, max: 1939},
        wayTooHigh: {text: "", min: null, max: null},
        explanation: "La Belgique n'a reconnu les femmes comme des citoyennes à part entier qu'en 1948. Elles ont exercé leur droit de vote pour la première fois pendant les élections de 1949. La Belgique marque un certain retard par rapport à d'autres pays comme la Nouvelle-Zélande qui l'a accordé en 1893, les Pays Bas (1919), le Royaume Uni (1928) ou encore la France (1944).",
        source: "Institut pour l'égalité des femmes et des hommes",
        sourceURL: "https://igvm-iefh.belgium.be/fr/recherches/emploi"
    },

];
