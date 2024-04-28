/** @format */

import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { Drawer, Image } from "@mantine/core";

import { MdMenuOpen } from "react-icons/md";
import { useDisclosure } from "@mantine/hooks";

const Navbar = () => {

	const [opened, {open, close}] = useDisclosure(false)

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
				{/* ========================== */}
				{/* ==== DRAWER COMPONENT ==== */}
				{/* ========================== */}

				<Drawer offset={8} radius="md" opened={opened} onClose={close} position="right">
					<div className="navlinks">
						<NavLink to={"."}>Home</NavLink>
						<NavLink to={"about"}>About</NavLink>
						<NavLink to={"contact"}>Contact</NavLink>
					</div>
				</Drawer>

				<MdMenuOpen onClick={open} className="navicon" fontSize={"2rem"} />
			</div>
		</div>
	);
};

export default Navbar;
