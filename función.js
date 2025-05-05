function cambiarFondoDocumento() {
    let body = document.body;
    let currentColor = getComputedStyle(body).backgroundColor;

    if (currentColor === 'rgb(255, 0, 0)') {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'red';
    }
}
