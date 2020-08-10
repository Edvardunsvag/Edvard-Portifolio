import dice from './img/items/rolling-wild.jpg';
import todolist from './img/todo-list.jpg';
import barer from './img/barer-hjemmeside.jpg';
import budget from './img/budgetCalc.jpg';
import portifolio from './img/portifolioMain.jpg';

const data = [
    {
        sys: {
            id: 1,
        },
        fields: {
            img: dice,
            name: 'Dice Game App',
            gitHub: 'https://github.com/Edvardunsvag/Dice-Game',
            src: 'https://rolling-wild.herokuapp.com/',
            description:
                'A turn based two player game. It is made using vanilla javascript.',
            react: false,
            plainJavascript: true,
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
            description:
                'An app for keeping track of your budget. Made using react hooks.',
            plainJavascript: false,
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
            description:
                'Find the bar best suited for you. Made using context-API and classes.',
            react: true,
            plainJavascript: false,
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
            description:
                'A simple todo-list. Made using bootstrap and classes.',
            react: true,
            plainJavascript: false,
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
            description: 'This website. Used hooks.',
            react: true,
            plainJavascript: false,
        },
    },
];

export default data;
