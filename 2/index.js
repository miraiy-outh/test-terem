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

    fetch('http://localhost:3000/form-data')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            alert('Ответ от сервера: ' + data.message);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}