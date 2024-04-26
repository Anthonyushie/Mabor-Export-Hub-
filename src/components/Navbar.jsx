/** @format */

import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { Image } from "@mantine/core";

import { MdMenuOpen } from "react-icons/md";

const Navbar = () => {
	return (
		<div className="navwrp">
			<div className="navlogo">
				{/* <h1>MXH</h1> */}
				<Image src={logo} />
			</div>
			<div className="navconts">
				<div className="navitems">
					<NavLink to={"."}>Home</NavLink>
					<NavLink to={"about"}>About</NavLink>
					<NavLink to={"contact"}>Contact</NavLink>
				</div>
				<MdMenuOpen fontSize={"2rem"} />
			</div>
		</div>
	);
};

export default Navbar;
