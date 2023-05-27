import { Fragment } from "react";
import { useLoaderData } from "react-router-dom";

import Movie from "./Movie";

const MoviesList = () => {
	const movies = useLoaderData();

	console.log(movies);

	return (
		<Fragment>
			{movies.map((movie) => (
				<Movie movie={movie} />
			))}
		</Fragment>
	);
};

export default MoviesList;

export const loader = async () => {
	const response = await fetch(
		"https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
	);

	const data = await response.json();

	return data;
};
