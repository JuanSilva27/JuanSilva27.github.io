$ =(id)=>{
    return document.getElementById(id)
}


let btnBorrar = $("borrar");
let btnResumen = $("resumen");
let cantidad = $("cantidad");
let categoria = $("categoria");
let valorTicket = 200;
let totalPagar = $("total")
let nombre = $("nombre")
let apellido = $("apellido")
let correo = $("correo")

total = (cantidad, categoria, valorTicket) => {
  let resultado;
  switch (true) {
    case categoria===1 && cantidad !==NaN:
      resultado = cantidad * (valorTicket - valorTicket * 0.8);
      console.log(resultado);
      break;
    case categoria===2 && cantidad !==NaN:
      resultado = cantidad * (valorTicket - valorTicket * 0.5);
      console.log(resultado);
      break;
    case categoria===3 && cantidad !==NaN:
      resultado = cantidad * (valorTicket - valorTicket * 0.15);
      console.log(resultado);
      break;
    default:
      console.log("no se han completado correctamnete los campos");
      break
  }
  return resultado
};

btnResumen.addEventListener("click", () => {
  let categoriaParsed = parseInt(categoria.value);
  let cantidadParsed = parseInt(cantidad.value);

  let resultado = total(cantidadParsed,categoriaParsed,valorTicket)
  if(resultado!==undefined){
    totalPagar.innerText= `Total a Pagar:$${resultado}`
  }
  else{
    alert("no se han completado correctamente los campos requeridos")
  }
  
});

btnBorrar.addEventListener("click",()=>{
    totalPagar.innerText= `Total a Pagar:$`
    cantidad.value=""
    categoria.value=0
    nombre.value=""
    apellido.value=""
    correo.value=""
})