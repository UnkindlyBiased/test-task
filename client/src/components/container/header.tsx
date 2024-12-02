import { Link } from "react-router"

const Header = () => {
    return (
        <header className="flex justify-center items-center min-h-16 bg-red-200">
            <Link to={'/'} className="text-2xl hover:text-3xl font-bold transition-all">Countries App</Link>
        </header>
    )
}

export { Header }