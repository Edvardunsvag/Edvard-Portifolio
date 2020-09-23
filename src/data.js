import todolist from './img/todo-list.jpg';
import barer from './img/barer-hjemmeside.jpg';
import budget from './img/budgetCalc.jpg';
import portifolio from './img/portifolioMain.jpg';
import premierLeague from './img/premierLeague.jpg';
import cocktaildb from './img/items/CocktailDB.jpg';

const data = [
    {
        sys: {
            id: 6,
        },
        fields: {
            img: premierLeague,
            name: 'Premier League Quiz',
            gitHub: 'https://github.com/Edvardunsvag/PL-Quiz',
            src: 'https://premier-league-quiz.netlify.app/',
            description: 'React, HTML, CSS, BOOTSTRAP, FIREBASE',
            react: true,
            bootstrap: true,
            contextAPI: true,
        },
    },
    {
        sys: {
            id: 7,
        },
        fields: {
            img: cocktaildb,
            name: 'Cocktail DB',
            gitHub: 'https://github.com/Edvardunsvag/CocktailDB',
            src: 'https://edvard-cocktail-db.netlify.app/',
            description: 'React, HTML, CSS',
            react: true,
            bootstrap: false,
            contextAPI: false,
        },
    },

    {
        sys: {
            id: 2,
        },
        fields: {
            img: budget,
            name: 'Budget Calculator',
            gitHub: 'https://github.com/Edvardunsvag/Budget-calculator',
            src: 'https://edvard-budget-calculator.netlify.app/',
            react: true,
            description: 'React, HTML, CSS',
            bootstrap: false,
            contextAPI: false,
        },
    },
    {
        sys: {
            id: 3,
        },
        fields: {
            img: barer,
            name: 'Bar Filtering App',
            gitHub: 'https://github.com/Edvardunsvag/Barer-I-Oslo',
            src: 'https://barer-i-oslo.netlify.app/',
            description: 'React, HTML, CSS',
            react: true,
            bootstrap: false,
            contextAPI: true,
        },
    },
    {
        sys: {
            id: 4,
        },
        fields: {
            img: todolist,
            name: 'Todo List',
            gitHub: 'https://github.com/Edvardunsvag/todo-list',
            src: 'https://edvard-todo-list.netlify.app/',
            description: 'React, HTML, CSS, BOOTSTRAP',
            react: true,
            bootstrap: true,
            contextAPI: false,
        },
    },
    {
        sys: {
            id: 5,
        },
        fields: {
            img: portifolio,
            name: 'My Portifolio',
            gitHub: 'https://github.com/Edvardunsvag/Edvard-Portifolio',
            src: 'https://edvard-portifolio.netlify.app/',
            description: 'React, HTML, CSS',
            react: true,
            bootstrap: false,
            contextAPI: false,
        },
    },
];

export default data;
