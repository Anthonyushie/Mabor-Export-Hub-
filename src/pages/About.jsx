/** @format */
import { Image } from "@mantine/core";
import mission from "../assets/ourmission.svg";
import "../styles/about.scss";
const About = () => {
	return (
		<div className="aboutwrp">
			<div className="aboutitem">
				<div className="aboutext">
					<h1>OUR MISSIONS</h1>
					<p>
						To inspire healthier communities (globally) by connecting people to
						real organic products, mitigating business risk, and be a supporting
						hand to source out product for our amiable partners globally. Is to
						ensure that reputable buyers around the world are able to buy
						natural products from Nigeria, through a secured source, and
						products shipped to buyers without any mishap. Is to ensure that
						buyers get the quantity and quality of goods ordered thereby meeting
						client’s expectations at all times. Is to ensure that Buyer deals
						with a genuine seller, and buyer gets what so ever has been paid
						for, and security background check done on every seller. Is meeting
						up with expectation and satisfying our clients at all times, and
						making sure both client and staff are happy doing business with
						Mabor Export Hub Nig LTD.
					</p>
				</div>
				<div className="aboutleft">
					<Image src={mission} />
				</div>
			</div>
		</div>
	);
};

export default About;
