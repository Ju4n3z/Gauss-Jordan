var matrizIdentidad = [];
var matrizN = [];

const crearMatriz = (tamaño) =>{
    let matriz = document.querySelector('#matriz');
    matriz.innerHTML = '';
    for (let i = 0; i < tamaño; i++) {
        for (let j = 0; j < tamaño; j++) {
            tabla = `<input type="text" id="${[i].toString()+[j].toString()}"  placeholder="ingrese numero">`;
            matriz.insertAdjacentHTML('beforeend', tabla);
        }
        let br = document.createElement('br');
        matriz.appendChild(br);
    }
    let boton = `<input type="submit" placeholder="calcular">`;
    matriz.insertAdjacentHTML('beforeend', boton);
    matrizIdentidad = [];
    for (let i = 0; i < tamaño; i++) {
        if(!matrizIdentidad[i]){
            matrizIdentidad[i] = [];
         };
         for(let j = 0; j < tamaño; j++){
            if(i === j){
               matrizIdentidad[i][j] = 1;
            }else{
               matrizIdentidad[i][j] = 0;
            };
         };
    }
    console.log(matrizIdentidad);
    let botonCalcular = document.querySelector('#matriz');
    botonCalcular.addEventListener("submit", (e)=>{
        e.preventDefault();
        matrizN = [];
        for (let i = 0; i < tamaño; i++) {
            if(!matrizN[i]){
                matrizN[i] = [];
                };
                for(let j = 0; j < tamaño; j++){
                    let valor = document.getElementById(`${[i].toString()+[j].toString()}`).value;
                    matrizN[i][j] = valor;
                };
        }
        console.log(matrizN);
        //calcularMatriz(matriz);
    })
}

let formulario = document.querySelector('#formulario');

formulario.addEventListener("submit", (e)=>{
	e.preventDefault();
	let data = Object.fromEntries(new FormData(e.target));
	crearMatriz(data.tamaño);
})

