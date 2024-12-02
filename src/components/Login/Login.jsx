import { sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const emailRef = useRef(null)

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        setSuccess('')
        setError('')

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                //check if the users email is varified by sending a emial
                if(result.user.emailVerified){
                    setSuccess('successful')
                }
                else{
                    alert('email not varified')
                    //if not varified then send a varification email to that user
                    sendEmailVerification(result.user)
                    .then(()=>{
                        alert('varification email sent')
                    })
                }
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }
    
    //handleing forget password functionality
    const handleForgetPassword = () => {
        const email = emailRef.current.value

        //send validation email to reset password
        sendPasswordResetEmail(auth,email)
        .then(()=> {
            alert('check your mail')
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Login
                    </h2>
                    <form onSubmit={handleLogin}>
                        {/* Email Input */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Gmail
                            </label>
                            <input
                                ref={emailRef}
                                name="email"
                                required
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                                placeholder="Enter your Gmail"
                            />
                        </div>
                        {/* Password Input */}
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                id="password"
                                className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
                                placeholder="Enter your Password"
                            />
                        </div>
                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    {/* Extra Links */}
                    <div className="mt-4 text-center text-sm text-gray-600">
                        <p>
                            Dont have an account?{" "}
                            <a href="/register" className="text-indigo-500 hover:underline">
                                Sign up
                            </a>
                        </p>
                        <p>
                            <NavLink onClick={handleForgetPassword} className="text-indigo-500 hover:underline">
                                Forgot Password?
                            </NavLink>
                        </p>
                        <p className={error ? 'text-red-600 textarea-xs' : 'text-black textarea-xs'}>{error ? error : success}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;