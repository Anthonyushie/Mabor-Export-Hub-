/** @format */
import { Image } from "@mantine/core";
import mission from "../assets/ourmission.svg";
import vision from "../assets/vision.svg";
import "../styles/about.scss";

// ====== REACT ICONS ======
import idea from "../assets/idea.png";
import diverse from "../assets/diverse.png";
import collaboration from "../assets/collaboration.png";
import trust from "../assets/trust.png";
import accountability from "../assets/account.png";
import promote from "../assets/promote.png";

const About = () => {
	return (
		<div className="aboutwrp">
			<div className="aboutitem mission">
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

			<div className="aboutitem vision">
				<div className="aboutleft">
					<Image src={vision} />
				</div>
				<div className="aboutext">
					<h1>OUR VISION</h1>
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
			</div>

			{/* =========================== */}
			{/* ===== OUR CORE VALUES ===== */}
			{/* =========================== */}

			<div className="corevalues">
				<h1>OUR CORE VALUES</h1>

				<div className="corevalueitems">
					<div className="corevaluecard">
						<Image src={idea} w={"80px"} height={"80px"} />
						<h2>Innovation</h2>
					</div>
					<div className="corevaluecard">
						<Image src={diverse} w={"80px"} height={"80px"} />
						<h2>Diversity and inclusion.</h2>
					</div>
					<div className="corevaluecard">
						<Image src={collaboration} w={"80px"} height={"80px"} />
						<h2>We foster an environment of collaboration.</h2>
					</div>
					<div className="corevaluecard">
						<Image src={trust} w={"80px"} height={"80px"} />
						<h2>Trustworthy and reliability.</h2>
					</div>
					<div className="corevaluecard">
						<Image src={accountability} w={"80px"} height={"80px"} />
						<h2>Responsibility and accountability.</h2>
					</div>
					<div className="corevaluecard">
						<Image src={promote} w={"80px"} height={"80px"} />
						<h2>We promote honest, integrity and openness in all we do.</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
