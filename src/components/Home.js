import React from "react";
import Product from "./Product";
import shortid from "shortid";
import homeImg from "../images/home.jpg";
import proimg1 from "../images/products/1.png";
import proimg2 from "../images/products/2.png";
import proimg3 from "../images/products/3.png";
import proimg4 from "../images/products/4.png";
import proimg5 from "../images/products/5.png";
import proimg6 from "../images/products/3.png";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img src={homeImg} alt="Home_Image" className="home-image" />
        <div className="home-row">
          <Product
            id={shortid.generate()}
            image={proimg1}
            price={260}
            rating1={5}
            rating2={0}
            title=" Razer Kraken Tournament Edition THX 7.1 Surround Sound
             Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  
             For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
          />
          <Product
            id={shortid.generate()}
            image={proimg2}
            price={220}
            rating1={4}
            rating2={1}
            title=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum numquam
      molestias, id hic, est amet sint possimus, error rem perferendis quod
      nobis fugiat ipsam non."
          />
        </div>
        <div className="home-row">
          <Product
            id={shortid.generate()}
            image={proimg3}
            price={530}
            rating1={3}
            rating2={2}
            title=" MeLE PCG02 Fanless Mini PC Stick Windows 11 Pro J4125 8GB/128GB
             Portable Mini Desktop Computer Stick Business & Home Video Support HDMI 
             4K 60Hz, BT4.2, 2.4G/5.8G Dual Band Wi-Fi, USB, Ethernet..."
          />
          <Product
            id={shortid.generate()}
            image={proimg4}
            price={340}
            rating1={2}
            rating2={3}
            title=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum numquam
      molestias, id hic, est amet sint possimus, error rem perferendis quod
      nobis fugiat ipsam non."
          />
          <Product
            id={shortid.generate()}
            image={proimg5}
            price={205}
            rating1={1}
            rating2={4}
            title="SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 
            128GB, 8K Camera & Video, Brightest Display Screen, S Pen, Long Battery Life, Fast 
            4nm Processor, US Version, Phantom Black"
          />
        </div>
        <div className="home-row">
          <Product
            id={shortid.generate()}
            image={proimg6}
            price={230}
            rating1={5}
            rating2={0}
            title=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum numquam
      molestias, id hic, est amet sint possimus, error rem perferendis quod
      nobis fugiat ipsam non."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
