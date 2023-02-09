const form = document.getElementById('form-contacts');

let lines = '';


form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputName = document.getElementById('input-name');
    const inputMail = document.getElementById('input-mail');
    const inputTel = document.getElementById('input-tel');

    

    let line = '<tr>';
    line += `<td>${inputName.value}</td>`;
    line += `<td>${inputMail.value}</td>`;
    line += `<td>${inputTel.value}</td>`;
    line += '</tr>';

    lines += line;


    const bodyTable = document.querySelector('tbody');

    bodyTable.innerHTML = lines;

    inputMail.value = '';
    inputName.value = '';
    inputTel.value = '';

});
