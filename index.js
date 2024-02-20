const titleBlock = document.querySelector('.title-row');
const colorBlock = document.querySelector('.colors-row');

const middleBlock = document.querySelector('.middle-block');
const rightBlock = document.querySelector('.right-block');
let isSwapped = false;

const buttonOne = document.querySelector('.button1');
const buttonTwo = document.querySelector('.button2');

buttonOne.addEventListener('click', hideTitle);
buttonTwo.addEventListener('click', changeBlocks)

function hideTitle() {
    titleBlock.classList.toggle('hidden');
}

function changeBlocks() {
    if (isSwapped) colorBlock.insertBefore(middleBlock, rightBlock);
    else colorBlock.insertBefore(rightBlock, middleBlock);
    isSwapped = !isSwapped;
}

window.onload = function () {
    let myModal = new bootstrap.Modal(document.querySelector("#modal1"), {
        backdrop: 'static',
        keyboard: false
    });
    myModal.show();
};