console.log('funguju');

const buttonElm = document.querySelectorAll('button');
const displayElm = document.querySelector('.display');

const handleDigitClick = (event) => {
    const number = event.target.textContent;

    if(displayElm.textContent.length < 9) {
        displayElm.innerHTML += number;
        console.log(event.target.textContent);
    }
}

for (var i=0; i < buttonElm.length; i++) {
    buttonElm[i].addEventListener('click', handleDigitClick);
}