
//option -1: directly set on the HTML element





console.log('This is  seperate JS file')


// option: 02 : add onclick function

function makeRed() {
    document.body.style.backgroundColor = 'red';
}

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
// option::-03
// option : 03 another
const purpleButton = document.getElementById('make-purple');
// console.log(purpleButton);
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// ------------------------------------------------------------ option : 03 >> another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})
// --------------------------------------------------->>>>
const pinkButton = document.getElementById('make-pink')
pinkButton.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// option -4:: final
//  >>>most of case we will use this way    
// document.getElementById('make-goldenrod').addEventListener('click',function(){})
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})

