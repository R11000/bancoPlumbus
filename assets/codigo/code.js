var cuentas = [
    { nombre: "Rick Sanchez", saldo: 200 },
    { nombre: "Beth Smith", saldo: 290 },
    { nombre: "Jerry Smith", saldo: 67 }
  ];

  var saldoActual = 0;
  var cuentaSeleccionada = null;

  function iniciarSesion() {
    var seleccion = document.getElementById("cuentas");
    var password = document.getElementById("password").value;
    var seleccionIndex = seleccion.selectedIndex;
  
    if (seleccionIndex >= 0) {
      var cuentaSeleccionada = cuentas[seleccionIndex];
      var contraseñaCorrecta = false;
  
      switch (seleccionIndex) {
        case 0:
          contraseñaCorrecta = password === "0137";
          break;
        case 1:
          contraseñaCorrecta = password === "0569";
          break;
        case 2:
          contraseñaCorrecta = password === "4502";
          break;
      }
  
      if (contraseñaCorrecta) {
        saldoActual = cuentaSeleccionada.saldo;
        document.getElementById("opciones").style.display = "block";
        document.getElementById("saldo").style.display = "none";
        Swal.fire(
          'Contraseña correcta!',
          'Ingreso con éxito!',
          'success'
        )
        document.getElementById("registro").style.display = "none";
      } else {
        Swal.fire(
          'Contraseña incorrecta',
          'Reintentelo más tarde',
          'error'
        )
      }
    }
  }
  
  function eye(y) {
    console.log("Entro");
    console.log(y);
    if (y == 0) {
      console.log("Entro = 0");
      document.getElementById("eyeBlock").style.display = "none";
      document.getElementById("eyeNone").style.display = "block";
      document.getElementById("password").type = 'text';
    } else {
      console.log("Entro = 1");
      document.getElementById("eyeBlock").style.display = "block";
      document.getElementById("eyeNone").style.display = "none";
      document.getElementById("password").type = 'password';
    }

  }

  function consultarSaldo() {
    document.getElementById("saldo").style.display = "block";
    document.getElementById("saldo").innerText = "Saldo actual: $" + saldoActual;
  }

  function ingresarMonto() {
    var monto = prompt("Ingresa el monto a ingresar:");
    monto = parseFloat(monto);

    if (isNaN(monto) || monto <= 0) {
      alert("Monto no válido.");
      return;
    }

    if (monto > 0 && monto <= 990) {
      saldoActual += monto;
      alert("Monto ingresado: $" + monto + "\nSaldo actual: $" + saldoActual);
      document.getElementById("saldo").innerText = "Saldo actual: $" + saldoActual;
    } else {
      alert("El monto debe estar entre $1 y $990.");
    }
  }

  function retirarMonto() {
    var monto = prompt("Ingresa el monto a retirar:");
    monto = parseFloat(monto);

    if (isNaN(monto) || monto <= 0) {
      alert("Monto no válido.");
      return;
    }

    if (monto <= saldoActual && monto >= 10) {
      saldoActual -= monto;
      alert("Monto retirado: $" + monto + "\nSaldo actual: $" + saldoActual);
      document.getElementById("saldo").innerText = "Saldo actual: $" + saldoActual;
    } else {
      alert("El monto debe ser mayor a $10 y no puede superar tu saldo actual.");
    }
  }

  function cerrarSesion () {
    window.location.href = window.location.href;
}
