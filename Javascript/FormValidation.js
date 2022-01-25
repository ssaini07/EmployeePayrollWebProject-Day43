window.addEventListener('DOMContentLoaded', (event) => {

    /* UC8 => Ability to set event listener on salary range to display appropriate behaviour*/
    const salary = document.querySelector("#salary");
    const output = document.querySelector('.salary-output');
    salary.addEventListener('input', function() {
        output.textContent = salary.value;
    });
})