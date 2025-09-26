import { useState } from "react"

export default function form({ setSubmitted, setName, name }) {
    const [email, setEmail] = useState("")


    function handleClick(e) {
        e.preventDefault();
        if (name.trim() !== '' && email.trim() !== '') {
            alert(`Welcome ${name}, your email "${email}" has been submitted successfully!`)
            setSubmitted(true);
        } else if (name.trim() === '') {
            alert("Please enter your name")
        } else if (email.trim() === '') {
            alert("Please enter your email")
        } else {
            alert("Please enter all the fields")
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 pt-24 pb-24">
            <form
                onSubmit={handleClick}
                className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-indigo-100 p-8"
            >
                <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
                    Start your Finance Balance
                </h2>

                <div className="mb-6">
                    <label
                        htmlFor="formName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Name
                    </label>
                    <input
                        id="formName"
                        placeholder="Enter your name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="formEmail"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Email
                    </label>
                    <input
                        id="formEmail"
                        placeholder="email@example.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 active:scale-[0.98] transition-all"
                >
                    Continue
                </button>
            </form>
        </main>
    )
}