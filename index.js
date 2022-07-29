//seleccionar turno para abonar el servicio (establecer prioridades)
//variables
let contadorA = 1;
let contadorB = 1;
let tipoDeTurno;
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
  //declaración de la fx para evitar que elijan una opción de turno inexistente por error de tipeo
  function validarSolicitud(solicitud) {
    while (solicitud != "1" && solicitud != "2") {
      solicitud = prompt(
        "Ingrese un valor correcto \n Para turno prioritario ingrese 1 \n Para turno no prioritario, ingrese 2"
      );
    }
    return solicitud;
  }
  //llamado de la fx para validar tipo de turno
  solicitudDeTurno = validarSolicitud(solicitudDeTurno);
  console.log(solicitudDeTurno);
  //relación del valor elegido en tipo de turno con la descripción del mismo

  if (solicitudDeTurno == 1) {
    tipoDeTurno = "PRIORITARIO";
  }
  if (solicitudDeTurno == 2) {
    tipoDeTurno = "NO PRIORITARIO";
  }
  console.log(tipoDeTurno);

  let tipoDeVehiculo = prompt(
    "Por favor, indique su vehículo: \n Taxi \n  Particular \n Pick Up \n Camioneta"
  ).toUpperCase();
  console.log(tipoDeVehiculo);

  while (
    tipoDeVehiculo != "TAXI" &&
    tipoDeVehiculo != "PARTICULAR" &&
    tipoDeVehiculo != "PICK UP" &&
    tipoDeVehiculo != "CAMIONETA"
  ) {
    tipoDeVehiculo = prompt(
      "Por favor, indique su vehículo: \n Taxi \n  Particular \n Pick Up \n Camioneta"
    ).toUpperCase();
  }

  console.log("SU VEHÍCULO ES TIPO " + tipoDeVehiculo);

  //elección tipo de lavado
  let servicioLavado = prompt(
    "Indique el tipo de lavado BÁSICO  /  FULL"
  ).toUpperCase();
  //validación para evitar error al elegir medio de pago
  while (servicioLavado != "FULL" && servicioLavado != "BÁSICO") {
    servicioLavado = prompt(
      "Ingrese un valor correcto: Indique el tipo de lavado BÁSICO  /  FULL"
    ).toUpperCase();
  }
  console.log(servicioLavado);

  //relacionando el tipo de lavado elegido con el valor correspondiente
  if (servicioLavado == "BÁSICO") {
    precioLavado = 500;
  } else if (servicioLavado == "FULL") {
    precioLavado = 800;
  } //no pongo un else porque si no elegís "BÁSICO" O "FULL", no te deja seguir la fx de validación
  console.log("PRECIO DE LAVADO: $" + precioLavado);

  //la idea es que según el tipo vehículo pague más barato o más caro, definido porcentualmente

  if (tipoDeVehiculo == "TAXI") {
    cargaPorVehiculo = 0.7;
  } else if (tipoDeVehiculo == "PARTICULAR") {
    cargaPorVehiculo = 1;
  } else if (tipoDeVehiculo == "PICK UP") {
    cargaPorVehiculo = 1.2;
  } else if (tipoDeVehiculo == "CAMIONETA") {
    cargaPorVehiculo = 1.4;
  }
  console.log("La carga por vehículo es " + cargaPorVehiculo);

  medioDePago = prompt(
    "Elija su medio de pago: \n EFECTIVO (10% de descuento) \n DÉBITO \n CRÉDITO (10% de recargo, sólo un pago disponible). "
  ).toUpperCase();
  //validación para evitar error al elegir el medio de pago
  while (
    medioDePago != "EFECTIVO" &&
    (medioDePago != "DÉBITO") & (medioDePago != "CRÉDITO")
  ) {
    medioDePago = prompt(
      "valor incorrecto. Por favor elija su medio de pago: \n EFECTIVO (10% de descuento) \n DÉBITO \n CRÉDITO (10% de recargo, sólo un pago disponible)."
    ).toUpperCase();
  }
  console.log(medioDePago);
  //vinculación del medio de pago con los cargos de los mismos
  if (medioDePago == "EFECTIVO") {
    cargaMedioDePago = 0.9;
  } else if (medioDePago == "DÉBITO") {
    cargaMedioDePago = 1;
  } else if (medioDePago == "CRÉDITO") {
    cargaMedioDePago = 1.1;
  }

  //función para calcular el total a pagar según tipo de lavado, vehículo y medio de pago
  function dineroAPagar(lavado, costoPorAuto, costoMediodePago) {
    return lavado * costoPorAuto * costoMediodePago;
  }
  resultado = dineroAPagar(
    precioLavado,
    cargaPorVehiculo,
    cargaMedioDePago
  ).toFixed(0);
  alert(
    "EL TOTAL APAGAR POR EL LAVADO  " +
      servicioLavado +
      " DE SU VEHÍCULO  " +
      tipoDeVehiculo +
      "  ES $ " +
      resultado +
      "\n" +
      " SU TURNO ES " +
      tipoDeTurno +
      " PASE POR CAJA " +
      solicitudDeTurno
  );
}
