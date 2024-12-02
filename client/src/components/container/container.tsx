import { Outlet } from "react-router"

import { Header } from "./header"

const Container = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex-grow px-4 py-2 md:px-6 md:py-4 transition-all">
                <Outlet />
            </div>
        </div>
    )
}

export { Container }