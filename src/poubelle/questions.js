// export const questions = [
//     {
//         id: "0",
//         question: "Quelle est la proportion de femmes au parlement fédéral belge (Chambre des Représentants) ?",
//         title: "Les femmes et le pouvoir",
//         answer: "42 %",
//         answerNb: 42,
//         unit: "%",
//         variants: [ "23 %", "38 %", "42 %", "56 %" ],
//         correct: "C'est exactement ça !",
//         bitHigh: "C'est moins que ça. ",
//         bitLow: "Vous y êtes presque.",
//         wayTooHigh: "Vous êtes loin du compte.",
//         wayTooLow: "Vous êtes loin du compte.",
//         explanation: "42 % des sièges du parlement national étaient occupés par des femmes en 2022 en Belgique. Le taux actuel est plus élevé que celui de la plupart des autres pays européens. Seuls cinq pays du monde comptent 50 pour cent ou plus de femmes au parlement dans les chambres uniques ou basses : Le Rwanda (61 %), Cuba (53 %), le Nicaragua (51 %), le Mexique (50 %) et les Émirats arabes unis (50 %)",
//         source: "Institut européen pour l’égalité entre les hommes et les femmes",
//         sourceURL: "https://eige.europa.eu/gender-statistics/dgs/indicator/wmidm_pol_parl__wmid_natparl"
//     },

//     {
//         id: "1",
//         question: "Combien de temps de plus les femmes en Belgique consacrent-elles chaque jour au travail domestique non rémunéré que les hommes ?",
//         answer: "1 heure et 20 minutes",
//         answerNb: 80,
//         unit: "minutes", // I would prefer this to be written as 1 heure 20 minutes
//         variants: [ "40 minutes", "1 heure", "1 heure et 20 minutes", "2 heures" ],
//         correct: "C'est exactement ça !",
//         bitHigh: "C'est moins que ça. ",
//         bitLow: "Vous y êtes presque.",
//         wayTooHigh: "Vous êtes loin du compte.",
//         wayTooLow: "Vous êtes loin du compte.",
//         explanation: "En Belgique, les femmes consacrent 1 heure et 20 minutes de plus aux tâches ménagères, et 15 minutes de plus aux enfants. Même si les hommes passent en moyenne plus de temps dans le travail rémunéré chaque jour, les tâches ménagères des femmes signifient qu'elles bénéficient de 44 minutes de temps libre de moins chaque jour que leurs homologues masculins.",
//         source: "Institut pour l'égalité des femmes et des hommes",
//         sourceURL: "https://igvm-iefh.belgium.be/fr/recherches/emploi"
//     },

//     {
//         id: "2",
//         question: "Quel est l'écart salarial entre les hommes et les femmes en Belgique ?",
//         answer: "5,3 %",
//         answerNb: 5.3,
//         unit: "%",
//         variants: [ "5,3 %", "10,4 %", "24 %", "33,1 %" ],
//         correct: "C'est exactement ça !",
//         bitHigh: "C'est moins que ça. ",
//         bitLow: "Vous y êtes presque.",
//         wayTooHigh: "Vous êtes loin du compte.",
//         wayTooLow: "Vous êtes loin du compte.",
//         explanation: "La Belgique avance à grands pas pour réduire l'écart salarial entre hommes et femmes. Il est beaucoup plus faible que celui de nombreux autres pays européens, dont l'Allemagne (18,3%), la France (15,8%) et les Pays-Bas (14,2%). Depuis 2012, tout employeur ayant au minimum 50 travailleurs est obligé de vérifier s'il y a ou non des inégalités salariales entre hommes et femmes au sein de l'entreprise. De bonnes structures d'accueil pour les jeunes enfants facilitent le retour au travail des femmes après l'accouchement. ",
//         source: "Institut pour l'égalité des femmes et des hommes",
//         sourceURL: "https://igvm-iefh.belgium.be/fr/recherches/emploi"
//     },

//     {
//         id: "3",
//         question: "En quelle année les femmes ont-elles obtenu le droit de vote en Belgique ?",
//         answer: "1948",
//         answerNb: 1948,
//         unit: "",
//         variants: [ "1887", "1919", "1930", "1948" ],
//         correct: "C'est exactement ça !",
//         bitHigh: "C'est moins que ça. ",
//         bitLow: "Vous y êtes presque.",
//         wayTooHigh: "Vous êtes loin du compte.",
//         wayTooLow: "Vous êtes loin du compte.",
//         explanation: "La Belgique n'a reconnu les femmes comme des citoyennes à part entier qu'en 1948. Elles ont exercé leur droit de vote pour la première fois pendant les élections de 1949. La Belgique marque un certain retard par rapport à d'autres pays comme la Nouvelle-Zélande qui l'a accordé en 1893, les Pays Bas (1919), le Royaume Uni (1928) ou encore la France (1944).",
//         source: "Institut pour l'égalité des femmes et des hommes",
//         sourceURL: "https://igvm-iefh.belgium.be/fr/recherches/emploi"
//     }
// ];



export const questions = [
    {
        id: "0",
        question: "What is the proportion of women in the Belgian federal parliament (House of Representatives)?",
        title: "Women and power",
        answer: "42 %",
        answerNb: 42,
        unit: "%",
        variants: ["23 %", "38 %", "42 %", "56 %"],
        correct: {text: "That's exactly right!", value: 42},
        bitHigh: {text: "It's less than that. ", min: 43, max: 60},
        bitLow: {text: "You're almost there.", min: 30, max: 41},
        wayTooHigh: {text: "You're way off.", min: 61, max: 100},
        wayTooLow: {text: "You're way off.", min: 1, max: 29},
        explanation: "42% of the seats in the national parliament were held by women in 2022 in Belgium. The current rate is higher than most other European countries. Only five countries in the world have 50 per cent or more women in parliament in the single or lower houses: Rwanda (61 per cent), Cuba (53 per cent), Nicaragua (51 per cent), Mexico (50 per cent) and the United Arab Emirates (50 per cent).",
        source: "European Institute for Gender Equality",
        sourceURL: "https://eige.europa.eu/gender-statistics/dgs/indicator/wmidm_pol_parl__wmid_natparl"
    },
    {
        id: "1",
        question: "How much more time do women in Belgium spend each day on unpaid domestic work than men?",
        answer: "1 hour and 20 minutes",
        answerNb: 80,
        unit: "minutes", // I would prefer this to be written as 1 hour 20 minutes
        variants: ["40 minutes", "1 hour", "1 hour and 20 minutes", "2 hours"],
        correct: "That's exactly right!",
        bitHigh: "It's less than that. ",
        bitLow: "You're almost there.",
        wayTooHigh: "You're way off.",
        wayTooLow: "You're way off.",
        explanation: "In Belgium, women spend 1 hour and 20 minutes more on housework, and 15 minutes more on children. Even though men spend on average more time in paid work each day, women's household chores mean that they have 44 minutes less free time each day than their male counterparts.",
        source: "Institute for the Equality of Women and Men",
        sourceURL: "https://igvm-iefh.belgium.be/fr/recherches/emploi"
    },

    {
        id: "2",
        question: "What is the wage gap between men and women in Belgium?",
        answer: "5.3 %",
        answerNb: 5.3,
        unit: "%",
        variants: ["5,3 %", "10,4 %", "24 %", "33,1 %"],
        correct: "That's exactly right!",
        bitHigh: "That's less than that. ",
        bitLow: "You're almost there.",
        wayTooHigh: "You're way off.",
        wayTooLow: "You're not even close.",
        explanation: "Belgium is making great strides in closing the gender wage gap. It is much lower than many other European countries, including Germany (18.3%), France (15.8%) and the Netherlands (14.2%). Since 2012, every employer with at least 50 workers has been obliged to check whether or not there is gender pay inequality within the company. Good childcare facilities for young children make it easier for women to return to work after giving birth. ",
        source: "Institute for the Equality of Women and Men",
        sourceURL: "https://igvm-iefh.belgium.be/fr/recherches/emploi"
    },

    {
        id: "3",
        question: "In which year did women obtain the right to vote in Belgium?",
        answer: "1948",
        answerNb: 1948,
        unit: "",
        variants: ["1887", "1919", "1930", "1948"],
        correct: "That's exactly right!",
        bitHigh: "This is less than that. ",
        bitLow: "You're almost there.",
        wayTooHigh: "You're way off.",
        wayTooLow: "You're way off.",
        explanation: "Belgium only recognized women as full citizens in 1948. They exercised their right to vote for the first time during the 1949 elections. Belgium lags behind other countries such as New Zealand (1893), the Netherlands (1919), the United Kingdom (1928) and France (1944)",
        source: "Institute for the Equality of Women and Men",
        sourceURL: "https://igvm-iefh.belgium.be/fr/recherches/emploi"
    }
];
