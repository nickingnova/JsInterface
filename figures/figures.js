// Codigo de Cuadrado

function perimetroCuadrado(ladoCuadrado) {
	return ladoCuadrado * 4;
}

function areaCuadrado(ladoCuadrado){
	return ladoCuadrado * ladoCuadrado;
}
function calcularPerimetroCuadrado(){
	const input =  document.getElementById("InputCuadrado");
	const value = input.value;
	const perimetro = perimetroCuadrado(value);
	alert(perimetro + " cm");
}

function calcularAreaCuadrado(){
	const input =  document.getElementById("InputCuadrado");
	const value = input.value;
	const area = areaCuadrado(value);
	alert(area);
}

// Codigo de Triangulo

function perimetroTriangulo(ladoTriangulo1, ladoBase){
	return (2*ladoTriangulo1) + ladoBase;
}

function alturaTriangulo(ladoTriangulo1, ladoBase){
	return Math.sqrt((ladoTriangulo1*ladoTriangulo1)-((ladoBase*ladoBase)/4))
}

function areaTriangulo(ladoTriangulo1,ladoBase){
	const altura = alturaTriangulo(ladoTriangulo1, ladoBase)
	return (ladoBase * altura) / 2;
}

function calcularPerimetroTriangulo(){
	const inputAB =  document.getElementById("InputTrianguloLadosAB");
	const valueAB = parseInt(inputAB.value)
	const inputC =  document.getElementById("InputTrianguloLadosC");
	const valueC = parseInt(inputC.value)
	const perimetro = perimetroTriangulo(valueAB, valueC);

	alert(perimetro);
}

function calcularAreaTriangulo(){
	const inputAB =  document.getElementById("InputTrianguloLadosAB");
	const valueAB = parseInt(inputAB.value)
	const inputC =  document.getElementById("InputTrianguloLadosC");
	const valueC = parseInt(inputC.value)
	const area = areaTriangulo(valueAB, valueC);
	alert(area);
}


// Codigo de Circulo

const PI =  Math.PI

function diametroCirculo(radioCirculo){
	return	radioCirculo * 2
}

function perimetroCirculo(radioCirculo){
	return diametroCirculo(radioCirculo) * PI
}

function areaCirculo(radioCirculo){
	return ( radioCirculo * radioCirculo ) * PI;
}

function calcularPerimetroCirculo(){
	const inputR =  document.getElementById("InputCirculo");
	const value = parseInt(inputR.value)
	const perimetro = perimetroCirculo(value);
	alert(perimetro);
}

function calcularAreaCirculo(){
	const inputR =  document.getElementById("InputCirculo");
	const value = parseInt(inputR.value)
	const area = areaCirculo(value);
	alert(area);
}
