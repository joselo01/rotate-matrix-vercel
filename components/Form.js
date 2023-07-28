import { useState } from "react";

export const Form = ({ setInitMatriz }) => {
    const [changeMatriz, setchangeMatriz] = useState([]);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const cambiarMatriz = (e) => {
        e.preventDefault();
        setInitMatriz([changeMatriz])
        setchangeMatriz('');
        changeMatriz == 1 ? setIsButtonDisabled(true) : setIsButtonDisabled(false)
    }

    const handleChange = (e) => {
        const limit = 9;
        setchangeMatriz(
            e.target.value && e.target.value.slice(0, limit)
        )

        if (e.target.value.length === 9) {
            setIsButtonDisabled(true)
        } else if (e.target.value.length !== 9) {
            setIsButtonDisabled(false)
        }
    }
    return (
        <form onSubmit={cambiarMatriz}
            className="w-full max-w-full">
            <div className="flex items-center border-b border-teal-500 py-6">
                <span className="text-xs">Ingresar Matriz</span>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type="number"
                    aria-label="Full name"
                    id="mat"
                    name="mat"
                    value={changeMatriz}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    disabled={!isButtonDisabled}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline">
                    Rotar
                </button>
            </div>
        </form>
    )
}
