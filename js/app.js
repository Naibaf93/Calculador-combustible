function calcularLitros() {
    let elementoKm = document.getElementById("textoKm");
    let textoKm = elementoKm.value;
    let cantidadKm = Number(textoKm);

    let cantidadLitros = Math.ceil(cantidadKm / 8.8);

    let resultado = document.getElementById("textoResultado");
    resultado.textContent = "Carga " + cantidadLitros + " litros de combustible";
}