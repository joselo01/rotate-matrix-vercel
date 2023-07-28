import { useEffect, useState } from "react";
import { Form } from "./Form";
export const GridRotate = () => {
    const [initMatriz, setInitMatriz] = useState([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    const arrOfStrs = Array.from(String(initMatriz).replace(/,/g, ""));

    const rotarMatriz90Antihorario = () => {
        let tamanio = initMatriz.length;
        let nuevamatriz = new Array(tamanio);
        for (let i = 0; i < tamanio; i++) {
            nuevamatriz[i] = new Array(tamanio);
        }
        for (let x = 0; x < tamanio; x++) {
            for (let y = 0; y < tamanio; y++) {
                nuevamatriz[tamanio - 1 - y][x] = initMatriz[x][y];
            }
        }
        return nuevamatriz;
    }

    const matrizRotada = rotarMatriz90Antihorario();

    const changeMatriz = () => {
        setInitMatriz(matrizRotada)
    }


    return (
        <>
            <Form
                setInitMatriz={changeMatriz}
            />
            <div className="grid grid-cols-3 grid-rows-3 py-10">
                {
                    arrOfStrs.map((m, i) => (
                        <div key={i} className="border border-y-2 border-b-0 w-full h-20 flex justify-center items-center border-fin">{m}</div>
                    ))
                }
            </div>
        </>
    )
}
