import { useState } from 'react';

export default function financeBalanceForm({ name, user_id }) {

    const [salary, setSalary] = useState("");
    const [cardExpenses, setCardExpenses] = useState("");
    const [fixedExpenses, setFixedExpenses] = useState("");
    const [extraExpenses, setExtraExpenses] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (salary.trim() === '' || salary <= 0) {
            alert("Please enter your salary")
        } else if (cardExpenses.trim() === '') {
            alert("Please enter your card expenses")
        } else if (fixedExpenses.trim() === '') {
            alert("Please enter your fixed expenses")
        } else if (extraExpenses.trim() === '') {
            alert("Please enter your extra expenses")
        } else {
            alert(`${name}, your profile has been created!`)
            const profileData = {
                "financial_profile": {
                    "user_id": user_id,
                    "salary": parseFloat(salary).toFixed(2),
                    "cardExpenses": parseFloat(cardExpenses).toFixed(2),
                    "fixedExpenses": parseFloat(fixedExpenses).toFixed(2),
                    "extraExpenses": parseFloat(extraExpenses).toFixed(2)
                }
            };
            console.log('Profile Data:', profileData);
        }
    }

    return (
        <>
            <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 pt-24 pb-24">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-indigo-100 p-8"
                >
                    <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
                        Create your Financial Profile
                    </h2>

                    <div className="mb-6">
                        <label
                            htmlFor="formSalary"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Monthly Average Salary
                        </label>
                        <input
                            id="formSalary"
                            placeholder="Enter your monthly average salary"
                            type="number"
                            step="0.01"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="formCardExpenses"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Card Expenses
                        </label>
                        <input
                            id="formCardExpenses"
                            placeholder="Enter your card expenses"
                            type="number"
                            step="0.01"
                            value={cardExpenses}
                            onChange={(e) => setCardExpenses(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="formFixedExpenses"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Fixed Expenses
                        </label>
                        <input
                            id="formFixedExpenses"
                            placeholder="Enter your fixed expenses"
                            type="number"
                            step="0.01"
                            value={fixedExpenses}
                            onChange={(e) => setFixedExpenses(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="formExtraExpenses"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Extra Expenses
                        </label>
                        <input
                            id="formExtraExpenses"
                            placeholder="Enter your extra expenses"
                            type="number"
                            step="0.01"
                            value={extraExpenses}
                            onChange={(e) => setExtraExpenses(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 active:scale-[0.98] transition-all"
                    >
                        Create Profile
                    </button>
                </form>
            </main>
        </>
    )
}