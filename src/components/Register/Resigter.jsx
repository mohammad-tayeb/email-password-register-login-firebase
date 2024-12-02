import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";


const Resigter = () => {

    const [registerError, setRegisterError] = useState('') //to store error message
    const [registerSuccess, setRegisterSuccess] = useState('') //to store success message
    const [showPass, setShowPass] = useState(false)   //to store pasword show/hide boolien value

    const handleRegister = e => {
        e.preventDefault();
        console.log('form submitted')
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password)

        if (password.length < 6) {
            setRegisterError('Invalid Password: Password too weak')
            return  //if return is used the code will not continue after
        }
        else if (!/[A-z]/.test(password)) {
            setRegisterError('Password Must Include A UpperCase')
            return   //msut use Return
        }

        setRegisterError('')
        setRegisterSuccess('')
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setRegisterSuccess('Registration Succesfull')
            })
            .catch(error => {
                console.log(error)
                setRegisterError(error.message)
            })

    }

    return (
        <div className="">
            <div className="flex items-center justify-center h-full bg-gray-100">
                <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Register
                    </h2>
                    <form onSubmit={handleRegister}>
                        {/* Name Input */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                required
                                name="name"
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                                placeholder="Enter your full name"
                            />
                        </div>
                        {/* Email Input */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Gmail
                            </label>
                            <input
                                required
                                name="email"
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                                placeholder="Enter your Gmail"
                            />
                        </div>
                        {/* Password Input */}
                        <div className="mb-4 relative">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    required
                                    name="password"
                                    type={showPass ? "text" : "password"}
                                    id="password"
                                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                                    placeholder="Enter your password"
                                />
                                <span
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-blue-600"
                                >
                                    {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
                                </span>
                            </div>
                        </div>

                        {/* Confirm Password Input */}
                        <div className="mb-4 relative">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    required
                                    name="password"
                                    type={showPass ? "text" : "password"}
                                    id="password"
                                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                                    placeholder="Enter your password"
                                />
                                <span
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-blue-600"
                                >
                                    {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
                                </span>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                    {/* Extra Links */}
                    <div className="mt-4 text-center text-sm text-gray-600">
                        <p>
                            Already have an account?{" "}
                            <a href="/login" className="text-indigo-500 hover:underline">
                                Login
                            </a>
                        </p>
                        <p className={registerError ? 'text-red-600' : "text-blue-600"}>{
                            registerError ? registerError : registerSuccess
                        }</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resigter;