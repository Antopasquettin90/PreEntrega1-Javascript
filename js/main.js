let numeroDeEmpleados = parseInt(prompt("Ingrese el número de empleados a calcular el sueldo:"));

for (let i = 0; i < numeroDeEmpleados; i++) {
  let sueldoBasico = parseFloat(prompt("Ingrese su sueldo básico sin descuentos:"));
  
  function calcularSueldoFinal() {
    let descuentoJubilacion = parseFloat(prompt("Ingrese el descuento de jubilación:"));
    let descuentoObraSocial = parseFloat(prompt("Ingrese el descuento de obra social:"));
    let descuentoExtra = parseFloat(prompt("Ingrese otros descuentos adicionales (en caso de no haber, ingrese 0):"));
    let presentismo = parseFloat(prompt("Ingrese el presentismo:"));
    let sumaExtra = parseFloat(prompt("Ingrese si tiene algún pago extra (ej: comisiones):"));

    let descuentoTotal = descuentoJubilacion + descuentoObraSocial + descuentoExtra;
    let sueldoFinal = sueldoBasico + presentismo + sumaExtra - descuentoTotal;

    console.log("Sueldo Final: $" + sueldoFinal);
  }

  calcularSueldoFinal();
}
