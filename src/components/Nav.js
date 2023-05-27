import { Link } from "react-router-dom";
const Nav = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container">
				<a className="navbar-brand" href="/#">
					Navbar
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="movies">
								Movies
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default Nav;
