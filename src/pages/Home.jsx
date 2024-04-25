/** @format */
import charcoal1 from "../assets/charcoal1.jpg";
import charcoal3 from "../assets/charcoal3.jpg";
import charcoal4 from "../assets/charcoal4.jpg";
import shisha from "../assets/shishsa.jpg";
import charcoal5 from "../assets/charcoal5.jpg";

import { Image } from "@mantine/core";

import {
	FaPeopleCarry,
	FaHandHolding,
	FaHands,
	FaHandsHelping,
} from "react-icons/fa";

import { FaHandHoldingHand } from "react-icons/fa6";


import { MdVerified } from "react-icons/md";

import "../styles/home.scss";

const Home = () => {
	return (
		<div className="herowrp">
			<div className="homewrp">
				{/* ====================== */}
				{/*==== HERO SECTION ===== */}
				{/* ====================== */}

				<div className="homecont">
					<div className="homecont-left">
						<h1>
							Mabor Export Hub strives to meet the expectation of our
							client/business partners.
						</h1>
					</div>
					<div className="home-images">
						<div className="images">
							<Image src={shisha} />
							<Image src={charcoal1} />
						</div>
						<div className="imgmain">
							<Image src={charcoal4} />
						</div>
					</div>
				</div>
			</div>

			{/* ====================== */}
			{/* ===== WHAT WE DO======= */}
			{/* ====================== */}

			<div className="whatwedo-wrp">
				<div className="whatwedo-cont">
					<h1> What We Do</h1>

					<div className="homecards-cont">
						<div className="cardcont">
							<div className="icon">
								<FaPeopleCarry fontSize={"3rem"} />
							</div>
							<div className="text">
								<p>
									We work with our clients to meet and coerce with sellers of
									high repute.
								</p>
							</div>
						</div>

            <div className="cardcont">
              <div className="icon2">
                <FaHandHolding fontSize={"3rem"} />
              </div>
              <div className="text">
                <p>
                  We support clients to get sellers/buyers to get whatever local
                  commodity they want to buy or sell.
                </p>
              </div>
            </div>

            <div className="cardcont">
              <div className="icon3">
                <FaHands fontSize={"3rem"} />
              </div>
              <div className="text">
                <p>
                  We work with our clients to meet and coerce with sellers of
                  high repute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

			{/* ====================== */}
			{/* ======= GALLERY ====== */}
			{/* ====================== */}

			<div className="gallery-grid">
				<div className="galleryimg">
					<Image src={charcoal5} />
				</div>

				<div className="galleryimg-main">
					<div className="img-frist">
						<Image src={charcoal5} />
					</div>
					<div className="img-second">
						<Image src={charcoal3} />
					</div>
				</div>
			</div>

			{/* ====================== */}
			{/* ==== OUR SERVICES ==== */}
			{/* ====================== */}
			<div className="our-service-wrp">
				<div className="service-cont">
					<h1>OUR SERVICES</h1>
					<div className="homecards-cont">
						<div className="cardcont">
							<div className="icon">
								<FaHands fontSize={"3rem"} />
							</div>
							<div className="text">
								<p>
									We support our client by travelling to these rural villages to
									get these commodities, packaged the way the client needs it,
									and export to client location.
								</p>
							</div>
						</div>

						<div className="cardcont">
							<div className="icon">
								<FaHandsHelping fontSize={"3rem"} />
							</div>
							<div className="text">
								<p>
									We handle all documentation required for the goods to be
									exported to client’s location.
								</p>
							</div>
						</div>

						<div className="cardcont">
							<div className="icon">
								<MdVerified fontSize={"3rem"} />
							</div>
							<div className="text">
								<p>
									We ensure that clients is carried along while loading the
									goods by sending pictures, videos at every stage, there by
									meeting clients expectation.
								</p>
							</div>
						</div>

						<div className="cardcont">
							<div className="icon">
								<MdVerified fontSize={"3rem"} />
							</div>
							<div className="text">
								<p>
									We ensure that pictures sent out to client, is same with what
									is loaded for export.
								</p>
							</div>
						</div>

						<div className="cardcont">
							<div className="icon">
								<FaHands fontSize={"3rem"} />
							</div>
							<div className="text">
								<p>
									We support by intermeddling between buyer and seller making it
									a win/win for both parties.
								</p>
							</div>
						</div>

						<div className="cardcont">
							<div className="icon">
								<FaHandHoldingHand fontSize={"3rem"} />
							</div>
							<div className="text">
								<p>
									We support nationals to source for buyers of any local
									commodity with an affordable discounted rate.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
