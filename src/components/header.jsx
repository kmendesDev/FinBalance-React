import '../App.css'

export default function Header({ setSubmitted }) {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src='src/assets/finBalance_icon.png' alt="Logo" className="h-8 w-8" />
                    <h1 className="text-xl font-bold text-gray-800">Finance Balance</h1>
                </div>
                <nav>
                    <ul className="flex gap-6 text-gray-600 font-medium">
                        <li><a href="#" className="hover:text-indigo-600" onClick={() => setSubmitted(false)}>Home</a></li>
                        <li><a href="#" className="hover:text-indigo-600">About</a></li>
                        <li><a href="#" className="hover:text-indigo-600">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}