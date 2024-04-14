// Obtener los elementos input y span
const dayInput = document.getElementById('dayInput');
const monthInput = document.getElementById('monthInput');
const yearInput = document.getElementById('yearInput');

const yearsSpan = document.getElementById('yearsSpan');
const monthsSpan = document.getElementById('monthsSpan');
const daysSpan = document.getElementById('daysSpan');

// Función para actualizar los valores de Years, Months, Days
function updateValues() {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // Se suma 1 porque los meses van de 0 a 11
    const currentDay = new Date().getDate();

    const enteredYear = parseInt(yearInput.value) || currentYear;
    const enteredMonth = parseInt(monthInput.value) || currentMonth;
    const enteredDay = parseInt(dayInput.value) || currentDay;

    const diffYears = currentYear - enteredYear;
    const diffMonths = (currentMonth - enteredMonth + 12) % 12;
    const diffDays = currentDay - enteredDay;

    yearsSpan.innerText = diffYears.toString();
    monthsSpan.innerText = diffMonths.toString();
    daysSpan.innerText = diffDays.toString();
}

// Escuchar cambios en los campos de input
dayInput.addEventListener('input', updateValues);
monthInput.addEventListener('input', updateValues);
yearInput.addEventListener('input', updateValues);

// Mostrar los valores iniciales
updateValues();