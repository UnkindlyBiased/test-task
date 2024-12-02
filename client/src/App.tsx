import { createBrowserRouter, RouterProvider } from "react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { CountriesPage } from "./pages/countries.page"
import { Container } from "./components/container/container"
import { CountryDetailedPage } from "./pages/country-detailed.page"

const App = () => {
	const queryClient = new QueryClient()
	const router = createBrowserRouter([{
		element: <Container />,
		children: [
			{
				path: '/',
				element: <CountriesPage />
			},
			{
				path: '/country/:code',
				element: <CountryDetailedPage />
			}
		]
	}])
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	)
}

export default App