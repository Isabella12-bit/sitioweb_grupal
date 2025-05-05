
const boton = document.getElementById("cambiar-orden");
const contenedor = document.getElementById("contenedores");


boton.addEventListener("click", () =>
 {

  const cajas = Array.from(contenedor.children);


  cajas.reverse().forEach(caja => contenedor.appendChild(caja));
});
