function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const alturaCm = parseFloat(document.getElementById("altura").value);
    const alturaM = alturaCm / 100;
  
    if (!peso || !alturaM || alturaM <= 0) {
      document.getElementById("resultado").textContent = "Por favor ingresa valores válidos.";
      return;
    }
  
    const imc = peso / (alturaM * alturaM);
    let mensaje = `Tu IMC es ${imc.toFixed(2)}. `;
  
    if (imc < 18.5) mensaje += "Estás por debajo del peso.";
    else if (imc < 24.9) mensaje += "Tienes un peso normal.";
    else if (imc < 29.9) mensaje += "Tienes sobrepeso.";
    else mensaje += "Tienes obesidad.";
  
    document.getElementById("resultado").textContent = mensaje;
  }
  