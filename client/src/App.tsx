import { createBrowserRouter, RouterProvider } from "react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { CountriesPage } from "./pages/countries.page"

const App = () => {
	const queryClient = new QueryClient()
	const router = createBrowserRouter([
		{
			path: '/',
			element: <CountriesPage />
		}
	])
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	)
}

export default App