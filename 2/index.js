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

    const formData = new FormData(form);
    const queryParams = new URLSearchParams();
    let dataText = '';

    for (const pair of formData.entries()) {
        queryParams.append(pair[0], pair[1]);
        dataText += pair[0] + ': ' + pair[1] + '\n';
    }
    const url = 'http://localhost:3000/form-data?' + queryParams.toString();
    dataArea.innerText = dataText;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            alert('Ответ от сервера: ' + data.message + "\n" + JSON.stringify(data.data));
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}