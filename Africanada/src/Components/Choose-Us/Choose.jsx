import React from "react";
import "./choose.css";
import { Shield, TrendingUp, Globe, Layers } from "lucide-react";
import CountUp from "react-countup";

const Choose = () => {
  return (
    <div className="Choose">
      <div className="Choose-wrapper">
        <h4 style={{ color: "#c70007", fontSize:"16px" }}>WHY CHOOSE US</h4>
        <h2 className="HeaderText"
          style={{ marginTop: "-10px"}}
        >
          The World's Premier Platform for Canada/Africa <br /> Commerce
        </h2>
      </div>
      <div className="cards-container">
        <div className="card1">
          <div className="card-icon">
            <Shield />
          </div>
          <span
            style={{ fontSize: "18px", fontWeight:"600",   paddingTop: "20px" }}
          >
            Full Access{" "}
          </span>
          <span className="CardText">
            Direct access to authentic <br />
            Canadian/African products, raw materials, and innovations from
            Edmonton, Canada, and 54 African countries.
          </span>
        </div>
        <div className="card2">
          <div className="card-icon">
            <Globe />
          </div>
          <span
            style={{ fontSize: "18px", fontWeight: "600", paddingTop: "20px" }}
          >
            Globe Reach
          </span>
          <span  className="CardText">
            Permanently based in Edmonton, Canada's gateway to Africa trade.
            Supported by Edmonton governments for annual consistency and deep
            bilateral  focus.
          </span>
        </div>
        <div className="card3">
          <div className="card-icon">
            <Layers />{" "}
          </div>
          <span
            style={{ fontSize: "18px", fontWeight: "600", paddingTop: "20px" }}
          >
            Complete Ecosystem
          </span>
          <span  className="CardText">
            Our platform offers comprehensive business opportunities with
            conference, networking, matchmaking, cultural experiences, and
            investment forums.
          </span>
        </div>
        <div className="card4">
          <div className="card-icon">
            <TrendingUp />
          </div>
          <span
            style={{ fontSize: "18px", fontWeight: "600", paddingTop: "20px" }}
          >
            Proven Result
          </span>
          <span  className="CardText" >
            Following our model of global expansion and success, delivering
            measurable ROI through actual deals, partnerships, and long-term
            relationships.
          </span>
        </div>
      </div>

      <div className="wrapper-numContainer">
        <div className="wrapper-numbers">
          {/* hfhfh */}

          <span className="vision"
            style={{
             
             
              
            }}
          >
            5-YEAR VISION
          </span>
          <div className="numBoxes-wrapper">
            <div className="numBoxes">
              <h1 className="allRedReadingNum">
              $<CountUp end={500} enableScrollSpy scrollSpyOnce />M+</h1>
              <span  className ="CardText"
                style={{
                 
                  marginTop: "-21px",
                 
                }}
              >
                Target Trade Value by Year 5
              </span>
            </div>
            <div className="numBoxes">
              <h1 className="allRedReadingNum">
                <CountUp end={5000} enableScrollSpy scrollSpyOnce />+
              </h1>
              <span  className ="CardText"
                style={{
                  color: "gray", marginTop: "-21px",
                 
                }}
              >
                Exhibitors Globally
              </span>
            </div>
            <div className="numBoxes">
              <h1 className="allRedReadingNum">
                <CountUp end={200000} enableScrollSpy scrollSpyOnce />+
              </h1>
              <span className ="CardText"
                style={{
                 
                  marginTop: "-21px",
                  
                }}
              >
                Trade Visitors Expected
              </span>
            </div>
            <div className="numBoxes">
              <h1 className="allRedReadingNum"><CountUp end={100} enableScrollSpy scrollSpyOnce />+</h1>
              <span className ="CardText"
                style={{
                 
                  marginTop: "-21px"
                 
                }}
              >
                Countries Represented
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
