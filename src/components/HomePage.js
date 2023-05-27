import { Link } from "react-router-dom";
const HomePage = () => {
	return (
		<div className="text-center m-5">
			<h1 className="m-4">See Our List of movies</h1>
			<Link to={"movies"} className="btn btn-info">
				See All movies
			</Link>
		</div>
	);
};

export default HomePage;
