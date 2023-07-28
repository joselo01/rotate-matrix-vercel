
export const Navbar = () => {
    return (
        <>
            <div className="flex justify-between py-4">
                <div className="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none">Logo</div>
                <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Inicio</a>
                        <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">Rotar Matriz</a>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}
