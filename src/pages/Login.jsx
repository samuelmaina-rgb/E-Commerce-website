import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please fill in all fields");
            return;
        }

        alert("Login successful!");
    };

    return (
        <div className="min-h-screen bg-gray-50 px-6 py-16">
            <div className="mx-auto max-w-md rounded-xl bg-white p-8 shadow-sm">

                <h1 className="text-3xl font-bold text-gray-900">
                    Login
                </h1>

                <p className="mt-2 text-gray-500">
                    Welcome back! Please login to your account.
                </p>

                <form onSubmit={handleSubmit} className="mt-8">

                    <div className="mb-5">
                        <label className="mb-2 block font-medium text-gray-700">
                            Email
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="mb-2 block font-medium text-gray-700">
                            Password
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
                    >
                        Login
                    </button>

                </form>
            </div>
        </div>
    );
}

export default Login;