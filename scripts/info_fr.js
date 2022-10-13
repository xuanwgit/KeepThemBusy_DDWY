//  Authors: Quyhn Ly Do
//           Marcelo Di Liscia
//           Xuan Wang
//           Vivien Yep
//  Date:    28-Feb-2022

var activities = [
    {
        title: "Construire un pont avec des pailles",
        description: "Construisez un pont avec des pailles et des épingles droites pouvant supporter le poids de 100 sous         dans une petite tasse. La construction d'une structure solide et stable nécessite une compréhension des forces qui agiront sur la structure sous des charges de toutes sortes.",
        alt: "pont avec des pailles",
        imageSmLnk: "../images/bridge-1x1.jpg",
        imageLgLnk: "../images/Bridge-6x4.jpg",
        activityLink: "build-a-bridge.html",
        activityPlace: "1",
        activityType: "1",
        ageGroup: "2"
    },

    {
        title: "Catapulte de bricolage pour les enfants",
        description: "C'est un projet STEM pour construire une catapulte avec des fournitures données sans instructions. Les enfants deviennent des ingénieurs et doivent vraiment réfléchir pour accomplir la tâche donnée.",
        alt:"catapulte pour enfants",
        imageSmLnk: "../images/catapult-1x1.jpg",
        imageLgLnk: "../images/Catapult-6x4.jpg",
        activityLink: "diy-catapult.html",
        activityPlace: "1",
        activityType: "1",
        ageGroup: "2"
    },

    {
        title: "5 choses les plus cool avec Coca-Cola",
        description: "Faire des réactions chimiques entre le Coca-cola et d'autres matériaux pour créer des phénomènes observables. Cette expérience introduit les connaissances de base en chimie, la compréhension des changements du matériau comme les couleurs, les phases, etc.",
        alt:"experience avec Coca-Cola",
        imageSmLnk: "../images/coke-1x1.jpg",
        imageLgLnk: "../images/Coke-6x4.jpg",
        activityLink: "five-coolest-things-coke.html",
        activityPlace: "1",
        activityPlace: "1",
        activityType: "1",
        ageGroup: "2"
    },

    {
        title: "Glace salée",
        description: "Des réactions physiques avec des glaçons et du sel, c'est une expérience introduit les connaissances de base de la physique et des énergies, la compréhension des changements du matériau comme la température, le catalyseur, etc.",
        alt:"Glace salée",
        imageSmLnk: "../images/icecube-1x1.jpg",
        imageLgLnk: "../images/Icecube-6x4.jpg",
        activityLink: "salty-ice.html",
        activityPlace: "1",
        activityType: "1",
        ageGroup:"2"
    },

    {
        title: "Labyrinthe de pâte à modeler",
        description: "Les enfants adorent la pâte à modeler et ils adorent le labyrinthe. Pourquoi ne pas combiner les deux et faire un labyrinthe avec de la pâte à modeler?",
        alt:"Labyrinthe de pâte à modeler",
        imageSmLnk:"../images/playdough-maze-1x1.jpg",
        imageLgLnk: "../images/playdough-maze.jpg",
        activityLink: "labyrinthe-pate-a-modeler.html",
        activityPlace: "1",
        activityType: "2",
        ageGroup:"2"
    },

    {
        title: "Comment faire une bombe de bain",
        description: "Les bombes de bain sont si populaires maintenant, mais elles sont aussi si chères. Voici quelques ingrédients simples et naturels que vous pouvez utiliser pour fabriquer vos propres bombes de bain avec les enfants.",
        alt:"bombes de bain",
        imageSmLnk:"../images/bath-bombs-1x1.jpg",
        imageLgLnk: "../images/bath-bombs.jpg",
        activityLink: "bombes-bain.html",
        activityPlace: "1",
        activityType: "2",
        ageGroup:"2"
    },

    {
        title: "Bracelets avec des bâtons d'artisanat",
        description: "La plupart d'entre nous a fabriqué des bracelets, mais je crois que la plupart d'entre nous n'a pas essayé de fabriquer des bracelets avec des bâtons artisanaux. Je ne savais même pas que c'était possible. Venez découvrir comment les fabriquer.",
        alt:"Bracelets avec des bâtons d'artisanat",
        imageSmLnk:"../images/craft-stick-bracelet-1x1.jpg",
        imageLgLnk: "../images/craft-stick-bracelet.jpg",
        activityLink: "bracelets-batons-bricolage.html",
        activityPlace: "1",
        activityType: "2",
        ageGroup:"2"
    },

    {
        title: "Constellations de guimauve",
        description: "La plupart des enfants adorent les guimauves et les étoiles. N'est-ce pas un bon moyen de leur faire apprendre quelques constellations en mangeant des guimauves?",
        alt:"Constellations de guimauve",
        imageSmLnk:"../images/marshmallow-constellations-1x1.jpg",
        imageLgLnk: "../images/marshmallow-constellations.jpg",
        activityLink: "constellation-guimauves.html",
        activityPlace: "1",
        activityType: "2",
        ageGroup:"2"
    },

    {
        title: "Jeu du chat classique",
        description: "Sur cette variante du jeu du chat classique, les enfants apprennent la résilience émotionnelle, les compétences de résolution de problèmes, les compétences sociales tout en développant également des compétences physiques.",
        alt:"Jeu du chat classique",
        imageSmLnk:"../images/classic-tag-SM.jpg",
        imageLgLnk: "../images/classic-tag.jpg",
        activityLink: "chat-classique.html",
        activityPlace: "2",
        activityType:  "3",
        ageGroup:"4"
    },

    {
        title: "Course de sac à patates",
        description: "Amusez-vous avec cette course dans laquelle chaque concurrent saute devant tandis que ses jambes sont confinées dans un sac. Jeu parfait pour une fête d'enfants en plein air.",
        alt: "Course de sac à patates",
        imageSmLnk:"../images/sack-race-SM.jpg",
        imageLgLnk: "../images/sack-race.jpg",
        activityLink: "sac-patates.html",
        activityPlace: "2",
        activityType: "3",
        ageGroup:"4"
    },

    {
        title: "Jeu du chat glacé",
        description: "Sur cette variante du jeu du chat classique, les enfants apprennent la résilience émotionnelle, les compétences de résolution de problèmes, les compétences sociales tout en développant également des compétences physiques.",
        alt:"Jeu du chat glacé",
        imageSmLnk:"../images/freeze-tag-SM.jpg",
        imageLgLnk: "../images/freeze-tag.jpg",
        activityLink: "chat-glace.html",
        activityPlace: "2",
        activityType: "3",
        ageGroup:"2"
    },

    {
        title: "Chasse au trésor",
        description: "Une chasse au trésor implique une série d'indices cachés à divers endroits. Les participants doivent résoudre le premier indice pour découvrir l'emplacement du suivant jusqu'à ce qu'ils atteignent le trésor final.",
        alt:"Chasse au trésor",
        imageSmLnk:"../images/treasure-hunt-SM.jpg",
        imageLgLnk: "../images/treasure-hunt.jpg",
        activityLink: "chasse-tresor.html",
        activityPlace: "2",
        activityType: "3",
        ageGroup:"2"
    },

    {
        title: "Peinture de mousse pour trottoir",
        description: "Un bricolage amusant, pas cher et facile à réaliser qui occupera les enfants à jouer dehors! Les bricolages rapides et faciles de l'après-midi sont quelque chose que nous aimons faire.",
        alt:"Peinture de mousse",
        imageSmLnk: "../images/foampaint-main.jpg",
        imageLgLnk: "../images/foampaint6x4.jpg",
        activityLink: "foam-paint.html",
        activityPlace: "2",
        activityType: "4",
        ageGroup:"2"
    },

    {
        title: "Fusées de peinture explosives",
        description: "Essayez cette activité amusante de peinture de feux d'artifice avec eux. Les enfants vont adorer le voir s'envoler dans les airs! C'est définitivement une activité artistique en plein air.",
        alt:"Fusées de peinture",
        imageSmLnk: "../images/PaintBombs-main.jpg",
        imageLgLnk: "../images/paintbombs6x4.jpg",
        activityLink: "paint-bombs.html",
        activityPlace: "2",
        activityType: "4",
        ageGroup:"2"
    },

    {
        title: "Ornements d'attrape-soleil de glace",
        description: "Une belle activité hivernale parfaite pour les enfants! Une idée d'artisanat à considérer est la fabrication d'ornements d'attrape-soleil gelés. C'est une excellente façon de passer du temps à l'extérieur avec toute la famille.",
        alt:"attrape-soleil",
        imageSmLnk:"../images/icesuncatcher-main.jpg",
        imageLgLnk: "../images/icesuncatcher6x4.jpg",
        activityLink: "ice-suncatcher.html",
        activityPlace: "2",
        activityType: "4",
        ageGroup:"2"
    },

    {
        title: "Comment faire des bouteilles d'art de sable",
        description: "Le sable est un excellent jouet sensoriel pour les enfants car les enfants peuvent découvrir la merveilleuse texture du sable. Dès que j'ai mis le sable coloré devant les enfants, ils y ont passé leurs doigts, l'ont pincé et ont même fait des empreintes de mains.",
        alt:"bouteilles de sable coloré",
        imageSmLnk:"../images/sandartbottles-main.jpg",
        imageLgLnk: "../images/sandartbottles6x4.jpg",
        activityLink: "sand-art-bottles.html",
        activityPlace: "2",
        activityType: "4",
        ageGroup:"2"
    }
];

const addActivity = (ev) => {
    ev-preventDefault();
    let activity = {
        title: document.getElementById(),
        description: document.getElementById(),
        alt:document.getElementById(),
        imageSmLnk: document.getElementById(),
        imageLgLnk: document.getElementById(),
        activityLink: document.getElementById(),
        activityPlace: document.getElementById(),
        activityType: document.getElementById(),
        ageGroup: document.getElementById()
    } 
    activities.push(activity);
}


const activityPlace = {
    indoorActivities: 1,
    outdoorActivities: 2
};

const activityType = {
    indoorEducational: 1,
    indoorFun: 2,
    outdoorPhysical: 3,
    outdoorArtsCrafts: 4
};

const ageGroup = {
    PreSchool: 1,
    Grade1to3: 2,
    Grade4to6: 3,
    Grade6plus: 4
};
