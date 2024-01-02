import React, {useState} from 'react';

const Main = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        const errors = validate()
        setErrors(errors)
        // if (Object.keys(errors).length === 0) {
        //     alert("Ще раз")
        // }
    }

    const validate = () => {
        const error = {}

        if (!name) {
            error.name = "Заповніть імя"
        } else {
            error.name = ""
        }
        // return error

        if (!email) {
            error.email = "Заповніть правильно форму"
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            error.email = "Помилка"
        } else {
            error.email = ""
        }
        return error
    }


    return (
        <div className={"max-w-[500px] m-auto flex flex-col justify-center items-center"}>
            <form onSubmit={handleSubmit} className="sm:col-span-3 w-full">
                <div className="sm:col-span-4 w-full">
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        First name!
                    </label>
                    <div className="mt-2">
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            name="name"
                            id="name"
                            className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.name && <div className={"text-red-700"}>{errors.name}</div>}
                    </div>
                </div>

                <div className="sm:col-span-4 w-full">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            name="email"
                            type="email"
                            className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.email && <div className={"text-red-700"}>{errors.email}</div>}
                    </div>
                </div>
                <div className={"my-5 flex m-auto text-center bg-blue-800 w-[150px]"}>
                    <button className={"m-auto text-white"}>Push The Button</button>
                </div>
            </form>
        </div>
    );
};

export default Main;