import { Outlet } from "react-router-dom";

import Nav from "./Nav";
import { Fragment } from "react";

const HomeLayout = () => {
	return (
		<Fragment>
			<Nav />
			<main>
				<Outlet />
			</main>
		</Fragment>
	);
};

export default HomeLayout;
