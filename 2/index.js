const form = document.querySelector('form');
const selects = document.querySelectorAll('select');
const inputs = document.querySelectorAll('.input-text');
const dataArea = document.querySelector('.json-text');

form.addEventListener('submit', sendData)

inputs.forEach((input) => {
    input.addEventListener('click', function (event) {
        event.target.classList.remove('danger');
    })
})

function sendData(event) {
    event.preventDefault();
    dataArea.innerHTML = '';

    inputs.forEach((input) => {
        if (input.value.trim() === '') input.classList.add('danger');
    })

    const inputsDanger = document.querySelectorAll('.danger');

    if (inputsDanger.length > 0) return;

    let data = {};

    selects.forEach((select) => {
        const value = select.value;
        const id = select.id;
        data[id] = value;
    })

    inputs.forEach((input) => {
        const value = input.value;
        const id = input.id;
        data[id] = value;
    })

    data = JSON.stringify(data);
    dataArea.innerHTML = data;
}