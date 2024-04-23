/** @format */
import charcoal1 from "../assets/charcoal1.jpg";
import shisha from "../assets/shishsa.jpg";
import charcoal2 from "../assets/charcoal2.jpg";

import { Image } from "@mantine/core";

import "../styles/home.scss";

const Home = () => {
	return (
		<div className="homewrp">
			<div className="homecont">
				<div className="homecont-left">
					<h1>
						Mabor Export Hub strives to meet the expectation of our
						client/business partners.
					</h1>
				</div>
				<div className="homecont-right">
					<div className="image">
						<Image src={charcoal2} />
					</div>
					<div className="images">
						<Image src={shisha} />
						<Image src={charcoal1} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
