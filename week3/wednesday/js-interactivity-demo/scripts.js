//console.log('JS file successfully connected');

let count = 0;

let counter = document.querySelector('#counter');
let plusBtn = document.querySelector('#plus-btn');
let minusBtn = document.querySelector('#minus-btn');
let resetBtn = document.querySelector('#reset-btn');

//create callback function
const increment = () => {
    count++;
    counter.textContent = count;
    console.log(count);
};

const decrement = () => {
    count--;
    counter.textContent = count;
    console.log(count);
};
const reset = () => {
    count = 0;
    cpunter.textContent = count;
    console.log(count);
}


//Bring Dom element and callback together with addeventlistener
plusBtn.addEventListener('click',increment);
minusBtn.addEventListener('click',decrement);
resetBtn.addEventListener('click', reset);
//let counter = document.querySelector('#counter');


const buttons = document.querySelectorAll('.theme-buttons');

for( let i=0; i< buttons.length; i++){
    buttons[i].addEventListener('click', selectThemes);
}

function selectThemes(event)  {
    const theme = event.target.textContent;
    console.log(theme)

    document.querySelector('body').className = theme;
    document.querySelector('main').className = theme;

    const buttons = document.querySelectorAll('button');
    for(let i=0; i<buttons.length; i++){
        buttons[i].className = theme;
    }

}





