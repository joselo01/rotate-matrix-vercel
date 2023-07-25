import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  const imprimirMatriz = (matriz) => {
    for (let x = 0; x < matriz.length; x++) {
        let row = "|";
        for (let y = 0; y < matriz[x].length; y++) {
            row += matriz[x][y];
            if (y !== matriz[x].length - 1) row += "\t";
        }
        console.log(row + "|");
    }
  }
  
  const rotarMatriz90Antihorario = (matriz) => {
    let tamanio = matriz.length;
    let nuevamatriz = new Array(tamanio);
    for (let i = 0; i < tamanio; i++) {
        nuevamatriz[i] = new Array(tamanio);
    }
    for (let x = 0; x < tamanio; x++) {
        for (let y = 0; y < tamanio; y++) {
            nuevamatriz[tamanio - 1 - y][x] = matriz[x][y];
        }
    }
    return nuevamatriz;
  }
  
  console.log("Matriz Original");
  let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  imprimirMatriz(matriz);
  console.log("Matriz Rotada 90º Antihoraria");
  let matrizRotada = rotarMatriz90Antihorario(matriz);
  imprimirMatriz(matrizRotada);
  

  const [matrizInicial, setmatrizRotada] = useState(matriz);
  const [firstMatriz, setMatriz] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const cambiarMatriz = () => {
    setmatrizRotada(rotarMatriz90Antihorario);      

  }

  useEffect(() => {
    setIsButtonDisabled(firstMatriz.length < 9);  
  }, [firstMatriz])
  


  return (
    
    <main
      className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
    >

      <form className="w-full max-w-sm">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="[[1,2,3],[4,5,6],[7,8,9]]"
            aria-label="Full name"
            value={firstMatriz}
            onChange={(e) => setMatriz(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={ cambiarMatriz }
            disabled={isButtonDisabled}
          >
            Rotar
          </button>
        </div>
        <span className="text-xs">Debe Ingesar la matriz del 1 al 9 para poder realizar la rotacion</span>
      </form>
        
          <ul className="grid grid-cols-1 mt-6">
            <li>{matrizInicial[0]}</li>
            <li>{matrizInicial[1]}</li>
            <li>{matrizInicial[2]}</li>
          </ul>
    </main>
  );
}
