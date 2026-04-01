function oblicz() {
    let l1 = parseFloat(document.getElementById('liczba1').value);
    let l2 = parseFloat(document.getElementById('liczba2').value);
    let znak = document.getElementById('znak').value;
    let wynikowePole = document.getElementById('wynik');
    let res = 0;

    if (znak === '+') {
        res = l1 + l2;
    } else if (znak === '-') {
        res = l1 - l2;
    } else if (znak === '*') {
        res = l1 * l2;
    } else if (znak === '/') {
        if (l2 !== 0) {
            res = l1 / l2;
        } else {
            res = "Błąd (0!)";
        }
    } else {
        res = "Zły znak";
    }

    wynikowePole.innerHTML = "Wynik: " + res;
}