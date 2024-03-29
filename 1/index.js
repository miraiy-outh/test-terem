const titleBlock = document.querySelector('.title-row');
const colorBlock = document.querySelector('.colors-row');
const containerBlock = document.querySelector('.block-container');

const middleBlock = document.querySelector('.middle-block');
const leftBlock = document.querySelector('.left-block');
let isSwapped = false;

const buttonOne = document.querySelector('.button1');
const buttonTwo = document.querySelector('.button2');

buttonOne.addEventListener('click', hideTitle);
buttonTwo.addEventListener('click', changeBlocks)

function hideTitle() {
    titleBlock.classList.toggle('hidden');
}

function changeBlocks() {
    leftBlock.classList.toggle('second');
    middleBlock.classList.toggle('first');
}

window.onload = function () {
    let myModal = new bootstrap.Modal(document.querySelector("#modal1"), {
        backdrop: 'static',
        keyboard: false
    });
    myModal.show();
};