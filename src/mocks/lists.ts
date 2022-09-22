import ItemModel from "../models/item";

class Lists {
    parcours: ItemModel[] = [
        new ItemModel('Développeur Web FullStack chez Unit Sense depuis septembre 2018', true, 'parcours'),
        new ItemModel('Formation développeur web à La Piscine, Talence, avril 2018 / août 2018', true, 'parcours'),
    ];
    technos: ItemModel[] = [
        new ItemModel('Angular', true, 'technos'),
        new ItemModel('ReactJS', true, 'technos'),
        new ItemModel('Typescript', true, 'technos'),
        new ItemModel('Javascript ES6', true, 'technos'),
        new ItemModel('API REST : .Net 6', true, 'technos'),
        new ItemModel('CSS 3', true, 'technos'),
        new ItemModel('HTML 5', true, 'technos'),
        new ItemModel('Docker', true, 'technos'),
        new ItemModel('Kubernetes / Helm', true, 'technos'),
        new ItemModel('Redis', true, 'technos'),
        new ItemModel('SQL server', true, 'technos'),
        new ItemModel('Gestion de projet Agile', true, 'technos'),

    ];

    interets: ItemModel[] = [
        new ItemModel('Sport : roller, course à pied, kayak', true, 'interets'),
        new ItemModel('Musique : basse, piano, guitare', true, 'interets'),
        new ItemModel('Ludique : jeux de rôles, jeux de sociétés, jeux vidéos', true, 'interets'),
        new ItemModel('Voyages : découvertes des autres', true, 'interets')
    ];
    competences: ItemModel[] = [
        new ItemModel('Développement front-end d\'application web', true, 'competences'),
        new ItemModel('Maintenance, correction de bugs', true, 'competences'),
        new ItemModel('développements de nouvelles fonctionnalités', true, 'competences'),
        new ItemModel('Déploiement et intégration continue', true, 'competences'),
        new ItemModel('Support technique', true, 'competences'),
        new ItemModel('Capacité d\'adaptation', true, 'competences'),
        new ItemModel('Veille technologique', true, 'competences'),
        new ItemModel('Langues : Anglais intermédiaire supérieur B2', true, 'competences')
    ]
}


export default Lists;
