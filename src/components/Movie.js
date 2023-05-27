const Movie = (props) => {
	const { movie } = props;

	return (
		<div className="container ">
			<div className="row m-5">
				<div className="image  col-12 col-md-6">
					<img src={movie.Poster} alt={movie.Title} />
				</div>
				<div className="details col-6">
					<h1 className="title">{movie.Title}</h1>
					<h2 className="year">{movie.Year}</h2>
					<h3 className="runtime">{movie.Runtime}</h3>
				</div>
			</div>
		</div>
	);
};
export default Movie;
