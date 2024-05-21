document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const cantidad = parseInt(document.getElementById('cantidad').value);
    let precioPorLlanta;

    if (cantidad < 5) {
        precioPorLlanta = 30000;
    } else if (cantidad >= 5 && cantidad <= 10) {
        precioPorLlanta = 25000;
    } else {
        precioPorLlanta = 20000;
    }

    const totalAPagar = cantidad * precioPorLlanta;

    document.getElementById('resultado').textContent = `El precio por llanta es: $${precioPorLlanta}. El total a pagar es: $${totalAPagar}.`;
});
