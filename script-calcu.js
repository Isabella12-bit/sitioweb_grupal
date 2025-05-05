function calcularIMC() {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;

  peso = Number(peso);
  altura = Number(altura);

  if (peso <= 0 || altura <= 0) {
    document.getElementById("resultado").textContent = "Por favor, ingresa valores válidos.";
    return;
  }

  let alturaMetros = altura / 100;

  let imc = peso / (alturaMetros * alturaMetros);

  let mensaje = "Tu IMC es " + imc.toFixed(2) + ". ";

  if (imc < 18.5) {
    mensaje += "Estás por debajo del peso.";
  } else if (imc < 25) {
    mensaje += "Tienes un peso normal.";
  } else if (imc < 30) {
    mensaje += "Tienes sobrepeso.";
  } else {
    mensaje += "Tienes obesidad.";
  }

  document.getElementById("resultado").textContent = mensaje;
}
