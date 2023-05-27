import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomeLayout from "./components/HomeLayout";
import HomePage from "./components/HomePage";
import MoviesList, { loader as getMovies } from "./components/MoviesList";

const router = createBrowserRouter([
	{
		path: "",
		element: <HomeLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: "movies",
				element: <MoviesList />,
				loader: getMovies,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
