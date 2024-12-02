const Login = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Login
                    </h2>
                    <form>
                        {/* Email Input */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Gmail
                            </label>
                            <input
                                name="email"
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
                            <a href="/forgot-password" className="text-indigo-500 hover:underline">
                                Forgot Password?
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;