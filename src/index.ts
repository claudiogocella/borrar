//let input = document.getElementById("producto");
	//let preciofinal = document.getElementById("precio");
	//let botonCarro = document.getElementById("carrito");
	//let productofinal: string[] = [];
	//let precioProducto: number[] = [];
	let botonDescuento = document.getElementById("descuento");
	//let lista = document.getElementById("lista");
	//let suma: number = 0;
	let descuentoPalabra = document.getElementById("descuentoPalabra");
	

	/*const agregarProducto = () => {
	  precioProducto.push(Number(preciofinal.value));
	  productofinal.push(input.value);
	  lista?.innerHTML += `<li> ${input.value}  x $ ${preciofinal.value}  </li>`;
	  input.value = "";
	  preciofinal.value = ""; */
	};
	/*const calcularTotal = () => {
	  suma = 0;
	  for (let i: number = 0; i < precioProducto.length; i++) {
	    suma += Number(precioProducto[i]);
	  }
	  total?.innerHTML = suma; */
	};
	

	const verDescuento = () => {
	  if (suma < 2500) {
	    descuentoPalabra.value = "";
	    descuentoPalabra?.innerHTML += `<li> Su monto total es inferior a $2500 </li>`;
	  } else {
	    descuentoPalabra.value = "";
	    descuentoPalabra?.innerHTML += `<li>¡Tiene un descuento de 10%!" </li>`;
	  }
	};
	

	botonCarro?.addEventListener("click", agregarProducto);
	botonCarro?.addEventListener("click", calcularTotal);
	botonDescuento?.addEventListener("click", verDescuento);
