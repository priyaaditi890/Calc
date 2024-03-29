var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    if (parseFloat(screen.value) >= 0) {
        screen.value = Math.sqrt(parseFloat(screen.value));
    } else {
        screen.value = 'Error';
    }
}

function log() {
    if (parseFloat(screen.value) > 0) {
        screen.value = Math.log(parseFloat(screen.value));
    } else {
        screen.value = 'Error';
    }
}

function pi() {
    screen.value = Math.PI;
}

function e() {
    screen.value = Math.E;
}

function fact() {
    var num = parseInt(screen.value);
    if (num < 0) {
        screen.value = 'Error';
        return;
    }
    var f = 1;
    for (var i = 1; i <= num; i++) {
        f *= i;
    }
    screen.value = f;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
    }
}

function convertToCelsius() {
    let fahrenheit = parseFloat(screen.value);
    if (!isNaN(fahrenheit)) {
        let celsius = (fahrenheit - 32) * (5 / 9);
        screen.value = celsius.toFixed(2) + " °C";
    }
}

function convertToFahrenheit() {
    let celsius = parseFloat(screen.value);
    if (!isNaN(celsius)) {
        let fahrenheit = (celsius * (9 / 5)) + 32;
        screen.value = fahrenheit.toFixed(2) + " °F";
    }
}

function convertToKilometers() {
    let miles = parseFloat(screen.value);
    if (!isNaN(miles)) {
        let kilometers = miles * 1.60934;
        screen.value = kilometers.toFixed(2) + " Km";
    }
}

function convertToMiles() {
    let kilometers = parseFloat(screen.value);
    if (!isNaN(kilometers)) {
        let miles = kilometers / 1.60934;
        screen.value = miles.toFixed(2) + " Miles";
    }
}

function convertToPounds() {
    let kg = parseFloat(screen.value);
    if (!isNaN(kg)) {
        let pounds = kg * 2.20462;
        screen.value = pounds.toFixed(2) + " Pounds";
    }
}

function convertToKg() {
    let pounds = parseFloat(screen.value);
    if (!isNaN(pounds)) {
        let kg = pounds / 2.20462;
        screen.value = kg.toFixed(2) + " Kg";
    }
}