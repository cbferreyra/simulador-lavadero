//seleccionar turno para abonar el servicio (establecer prioridades)
//variables
let contadorA = 1;
let contadorB = 1;
let finalizar = "no";
let precioLavado = 0;
let cargaPorVehiculo = 0;
let medioDePago;
let cargaMedioDePago = 0;
let totalAPagar = 0;

while (finalizar != "SALIR") {
  alert(
    "Bienvenido/a! \n A continuación saque número, abone cuando lo llamen y disfrute de un café mientras nos ocupamos de dejar su vehículo como nuevo"
  );
  //INGRESO DE DATOS
  //selección tipo de turno
  let solicitudDeTurno = prompt(
    "Seleccione su turno para abonar el servicio \n Movilidad reducida / Jubilado / Embarazada: Ingrese 1 \n Turno no prioritario: ingrese 2"
  );

  function validarSolicitud(solicitud) {
    while (solicitud != "1" && solicitud != "2") {
      solicitud = prompt(
        "Ingrese un valor correcto \n Para turno prioritario ingrese 1 \n Para turno no prioritario, ingrese 2"
      );
    }
    return solicitud;
  }

  console.log(solicitudDeTurno);

  let tipoDeVehiculo = prompt(
    "Por favor, indique su vehículo: \n Taxi \n  Particular \n Pick Up \n Camioneta"
  ).toUpperCase();
  function validarTipoVehiculo(tipoVehiculo) {
    while (
      tipoVehiculo != "TAXI" &&
      tipoVehiculo != "PARTICULAR" &&
      tipoVehiculo != "PICK UP" &&
      tipoVehiculo != "CAMIONETA"
    ) {
      tipoDeVehiculo = prompt(
        "Ingrese un valor correcto \n Taxi \n Particular \n Pick up \n  Camioneta"
      ).toUpperCase();
    }
    return tipoVehiculo;
  }

  console.log("SU VEHÍCULO ES TIPO " + tipoDeVehiculo);
  //Selección tipo de lavado

  let servicioLavado = prompt("Indique el tipo de lavado").toUpperCase();
  while (servicioLavado != "BÁSICO" && servicioLavado != "FULL") {
    servicioLavado = prompt(
      "Ingrese un valor correcto \n Básico \n Full"
    ).toUpperCase();
  }

  if (servicioLavado == "BASICO") {
    precioLavado = 500;
  } else if (servicioLavado == "FULL") {
    precioLavado = 800;
  }
  console.log("PRECIO DE LAVADO: $" + precioLavado);
  //la idea es que según el vehículo pague más barato o más caro, definido porcentualmente
  if ((tipoDeVehiculo = "TAXI")) {
    cargaPorVehiculo = 0.7;
  } else if ((tipoDeVehiculo = "AUTO PARTICULAR")) {
    cargaPorVehiculo = 1;
  } else if ((tipoDeVehiculo = "PICK UP")) {
    cargaPorVehiculo = 1.2;
  } else if ((tipoDeVehiculo = "CAMIONETA")) {
    cargaPorVehiculo = 1.4;
  }
  console.log(cargaPorVehiculo);

  medioDePago = prompt(
    "Elija su medio de pago: \n EFECTIVO (10% de descuento) \n DÉBITO \n CRÉDITO (10% de recargo, sólo un pago disponible). "
  ).toUpperCase();

  if (medioDePago == "EFECTIVO") {
    cargaMedioDePago = 0.9;
  } else if (medioDePago == "DÉBITO") {
    cargaMedioDePago = 1;
  } else if (medioDePago == "CRÉDITO") {
    cargaMedioDePago = 1.1;
  }

  function dineroAPagar(lavado, costoPorAuto, costoMediodePago) {
    return lavado * costoPorAuto * costoMediodePago;
  }
  resultado = dineroAPagar(precioLavado, cargaPorVehiculo, cargaMedioDePago);
  alert("El total a pagar es $" + resultado);
}
