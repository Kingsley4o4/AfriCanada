import React from "react";
import "./ourpart.css";

const OurPartner = () => {
  return (
    <div className="OurPartner">
      <div className="OurPartnerWrapper">
        <h4>Our Partners</h4>
        <h1 style={{ marginTop: "-20px", textAlign: "center" }}>
          Supported by Leading Organizations
        </h1>

        <h4 style={{ color: "#65758B" }}> Government Partner</h4>
      </div>
      <div className="SelectionOneContainer">
        <div className="SelectionText">
          <h5>Government of Canada</h5>
          <h5>Province of Alberta</h5>
          <h5>Edmonton</h5>
          <h5>Ghana Diaspora Affairs Office</h5>
          <h5>Kingdom of Morocco Embassy</h5>
        </div>
      </div>
      <h4 style={{ color: "#65758B", textAlign: "center" }}>
        International Organizations{" "}
      </h4>
      <div className="SelectionTwoContainer">
        <div className="SelectionText">
          <h5>African Union</h5>
          <h5>AfCFTA Secretariat</h5>
          <h5>African Development Bank</h5>
          <h5>International Trade Centre</h5>
          <h5>UNCTAD</h5>
        </div>
      </div>
      <h4 style={{ color: "#65758B", textAlign: "center" }}>
        Trade & Business
      </h4>
      <div className="SelectionThirdContainer">
        <div className="SelectionText">
          <h5>Chambers of Commerce</h5>
          <h5>Export Promotion Agencies</h5>
          <h5>Trade Associations</h5>
          <h5>Industry</h5>
        </div>
      </div>
      <h4 style={{ color: "#65758B", textAlign: "center" }}>
        Media Partners
      </h4>
      <div className="SelectionThirdContainer">
        <div className="SelectionText">
          <h5>CNN International</h5>
          <h5>CNBC Africa</h5>
          <h5>African Business Magazine</h5>
        
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#65758B",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <span>Interested in partnering with Made in Africa Expo Canada?</span>

        <span
          style={{
            color: "#E2473C",
            fontSize: "15px",
            fontWeight: "700",
            marginTop: "20px",
          }}
        >
          Become a Partner →
        </span>
      </div>
    </div>
  );
};

export default OurPartner;
