/** @format */

import "../styles/contact.scss";
import contact from "../assets/contact.svg";
import { Button, Image, Textarea, TextInput } from "@mantine/core";
import "@mantine/core/styles.css";

const Contact = () => {
	return (
		<div className="contact-wrp">
			<div className="contactcont">
				<div className="contactlft">
					<Image src={contact} />
				</div>
				<div className="contactrght">
					<h1>Contact Us</h1>
					<form>
						<TextInput placeholder="name" />
						<TextInput placeholder="email" type="email" />
						<Textarea placeholder="description" />
						<Button bg={"dark"}fullWidth>Submit</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
