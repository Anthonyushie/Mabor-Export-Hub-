/** @format */

import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navwrp">
			<div className="navlogo">
				<h2>MXH</h2>
			</div>
			<div className="navconts">
				<div className="navitems">
					<NavLink>Home</NavLink>
					<NavLink>About</NavLink>
					<NavLink>Contact</NavLink>
					<NavLink>Services</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
