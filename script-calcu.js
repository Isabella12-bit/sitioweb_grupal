function calcularIMC() {
  // Obtener valores del formulario
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;

  // Convertir a número
  peso = Number(peso);
  altura = Number(altura);

  // Verificar que los datos estén bien
  if (peso <= 0 || altura <= 0) {
    document.getElementById("resultado").textContent = "Por favor, ingresa valores válidos.";
    return;
  }

  // Convertir altura a metros
  let alturaMetros = altura / 100;

  // Calcular el IMC
  let imc = peso / (alturaMetros * alturaMetros);

  // Crear el mensaje
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

  // Mostrar resultado
  document.getElementById("resultado").textContent = mensaje;
}
