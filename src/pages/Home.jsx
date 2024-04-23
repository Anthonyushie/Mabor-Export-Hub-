/** @format */
import charcoal1 from "../assets/charcoal1.jpg";
import charcoal3 from "../assets/charcoal3.jpg"
import charcoal4 from "../assets/charcoal4.jpg";
import shisha from "../assets/shishsa.jpg";
import charcoal5 from "../assets/charcoal5.jpg";
import charcoal7 from "../assets/charcoal7.jpg";
import charcoal8 from "../assets/charcoal8.jpg";

import { Image } from "@mantine/core";

import { FaPeopleCarry, FaHandHolding, FaHands } from "react-icons/fa";

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
              <div className="icon">
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
              <div className="icon">
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
          <Image src={charcoal7} />
          <Image src={charcoal3} />
        </div>
      </div>
    </div>
  );
};

export default Home;
