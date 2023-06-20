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
        calcularMatriz(matriz);
    })
}

//Hacer Gauss-Jordan

const calcularMatriz = (matriz) => {
    const filas = matriz.length;
    const columnas = matriz[0].length;
    
    for (let i = 0; i < filas; i++) {
      // Pivoteo parcial
      let maxRow = i;
      for (let j = i + 1; j < filas; j++) {
        if (Math.abs(matriz[j][i]) > Math.abs(matriz[maxRow][i])) {
          maxRow = j;
        }
      }
      [matriz[i], matriz[maxRow]] = [matriz[maxRow], matriz[i]];
      
      // Hacer el pivote en la fila i
      let pivot = matriz[i][i];
      for (let j = i; j < columnas; j++) {
        matriz[i][j] /= pivot;
      }
      
      // Eliminar otras entradas en la columna del pivote
      for (let k = 0; k < filas; k++) {
        if (k !== i) {
          let factor = matriz[k][i];
          for (let j = i; j < columnas; j++) {
            matriz[k][j] -= factor * matriz[i][j];
          }
        }
      }
    }
    
    console.log(matriz);
  }

let formulario = document.querySelector('#formulario');

formulario.addEventListener("submit", (e)=>{
	e.preventDefault();
	let data = Object.fromEntries(new FormData(e.target));
	crearMatriz(data.tamaño);
})

