import React from "react";
import "./choose.css";
import { Shield, TrendingUp, Globe, Layers } from "lucide-react";

const Choose = () => {
  return (
    <div className="Choose">
      <div className="Choose-wrapper">
        <h4 style={{ color: "#c70007", fontSize:"16px" }}>WHY CHOOSE US</h4>
        <h2
          style={{ fontSize: "3rem", marginTop: "-10px", textAlign: "center", lineHeight:"45px" }}
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
          <span style={{ color: "gray", fontSize:"14px" }}>
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
            style={{ fontSize: "14px", fontWeight: "bold", paddingTop: "20px" }}
          >
            Globe Reach
          </span>
          <span style={{ color: "gray" ,fontSize:"14px" }}>
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
            style={{ fontSize: "14px", fontWeight: "bold", paddingTop: "20px" }}
          >
            Complete Ecosystem
          </span>
          <span style={{ color: "gray" ,fontSize:"14px" }}>
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
            style={{ fontSize: "14px", fontWeight: "bold", paddingTop: "20px" }}
          >
            Proven Result
          </span>
          <span style={{ color: "gray",fontSize:"14px" }}>
            Following our model of global expansion and success, delivering
            measurable ROI through actual deals, partnerships, and long-term
            relationships.
          </span>
        </div>
      </div>

      <div className="wrapper-numContainer">
        <div className="wrapper-numbers">
          {/* hfhfh */}

          <span
            style={{
              fontSize: "14px",
              fontWeight: "700",
              textAlign: "center",
              color: "gray",
              marginTop: "-20px",
            }}
          >
            5-YEAR VISION
          </span>
          <div className="numBoxes-wrapper">
            <div className="numBoxes">
              <h1>$500M+ </h1>
              <span
                style={{
                  color: "gray",
                  marginTop: "-22px",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                Target Trade Value by Year 5
              </span>
            </div>
            <div className="numBoxes">
              <h1>5,000+</h1>
              <span
                style={{
                  color: "gray",
                  marginTop: "-22px",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                Exhibitors Globally
              </span>
            </div>
            <div className="numBoxes">
              <h1>200,000+</h1>
              <span
                style={{
                  color: "gray",
                  marginTop: "-22px",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                Trade Visitors Expected
              </span>
            </div>
            <div className="numBoxes">
              <h1>100+</h1>
              <span
                style={{
                  color: "gray",
                  marginTop: "-22px",
                  fontSize: "15px",
                  fontWeight: "600",
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
