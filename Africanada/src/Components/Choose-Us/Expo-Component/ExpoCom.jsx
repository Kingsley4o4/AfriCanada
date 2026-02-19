import React, { useState } from "react";
import "./ExpoCom.css";
import {
  Building2,
  MicVocal,
  UsersRound,
  Rocket,
  Palette,
  TrendingUp,
  PartyPopper,
  UserRound,
  ArrowRight,
  CircleCheckBig,
} from "lucide-react";

const ExpoCom = () => {
  const Exhibition = "Exhibition Halls";
  const Conference = "Conference & Trade Dialogues";
  const Matchmaking = "B2B Matchmaking Lounge";
  const Spotlight = "StartUp Spotlight";
  const Zones = "Cultural Experience Zones";
  const Investment = "Investment Fourms";
  const Networking = "Networking Events";
  const [activeDisplay, setActiveDisplay] = useState(null);
  console.log(activeDisplay);

  const ExhibitionCardkDisplay = (
    <>
      <div className="firstTabDisplayCard">
        <div className="headIcon">
          {" "}
          <h1 style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <Building2 className="build" /> {Exhibition}{" "}
          </h1>{" "}
        </div>

        <span style={{ color: "gray", fontSize: "17px" }}>
          World-class exhibition spaces featuring country pavilions, sector
          zones, <br /> and <br /> innovation alley.
        </span>

        <div className="btnContainerExpo">
          <button>
            Learn More About Exhibiting <ArrowRight size={17} />
          </button>
        </div>
      </div>
      <div className="secondTabDisplayCard">
        <div
          style={{
            paddingTop: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            fontSize: "17px",
            color: "#0F1729",
          }}
        >
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Made in Africa Pavilion -
            Country pavilions representing African nations
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Made in Canada/Host
            Country Showcase
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Sector Zones: Fashion,
            food, beauty, technology, AI, manufacturing
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Innovation Alley:
            Startups and emerging businesses
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Demo Stages: Live product
            demonstrations throughout the day
          </span>
        </div>
      </div>
    </>
  );

  const ConferenceCardDisplay = (
    <>
      <div className="firstTabDisplayCard">
        <div className="headIcon">
          {" "}
          <h1 style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <MicVocal className="build" /> {Conference}{" "}
          </h1>{" "}
        </div>

        <span style={{ color: "gray", fontSize: "17px" }}>
          World-class exhibition spaces featuring country pavilions, sector
          zones, <br /> and <br /> innovation alley.
        </span>

        <div className="btnContainerExpo">
          <button>
            Learn More About Conference <ArrowRight size={17} />
          </button>
        </div>
      </div>
      <div className="secondTabDisplayCard">
        <div
          style={{
            paddingTop: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            fontSize: "17px",
            color: "#0F1729",
          }}
        >
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Made in Africa Pavilion -
            Country pavilions representing African nations
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Made in Canada/Host
            Country Showcase
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Sector Zones: Fashion,
            food, beauty, technology, AI, manufacturing
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Innovation Alley:
            Startups and emerging businesses
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Demo Stages: Live product
            demonstrations throughout the day
          </span>
        </div>
      </div>
    </>
  );
  const B2bMatchmakingCardDisplay = (
    <>
      <div className="firstTabDisplayCard">
        <div className="headIcon">
          {" "}
          <h1 style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <UsersRound className="build" /> {Matchmaking}{" "}
          </h1>{" "}
        </div>

        <span style={{ color: "gray", fontSize: "17px" }}>
          World-class exhibition spaces featuring country pavilions, sector
          zones, <br /> and <br /> innovation alley.
        </span>

        <div className="btnContainerExpo">
          <button>
            Learn More About B2B Matchmaking <ArrowRight size={17} />
          </button>
        </div>
      </div>
      <div className="secondTabDisplayCard">
        <div
          style={{
            paddingTop: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            fontSize: "17px",
            color: "#0F1729",
          }}
        >
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Made in Africa Pavilion -
            Country pavilions representing African nations
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Made in Canada/Host
            Country Showcase
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Sector Zones: Fashion,
            food, beauty, technology, AI, manufacturing
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Innovation Alley:
            Startups and emerging businesses
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Demo Stages: Live product
            demonstrations throughout the day
          </span>
        </div>
      </div>
    </>
  );
  const spotLightCardDisplay = (
     <>
      <div className="firstTabDisplayCard">
        <div className="headIcon">
          {" "}
          <h1 style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <Rocket className="build" /> {Spotlight}{" "}
          </h1>{" "}
        </div>

        <span style={{ color: "gray", fontSize: "17px" }}>
          World-class exhibition spaces featuring country pavilions, sector
          zones, <br /> and <br /> innovation alley.
        </span>

        <div className="btnContainerExpo">
          <button>
            Learn More About {Spotlight} <ArrowRight size={17} />
          </button>
        </div>
      </div>
      <div className="secondTabDisplayCard">
        <div
          style={{
            paddingTop: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            fontSize: "17px",
            color: "#0F1729",
          }}
        >
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Made in Africa Pavilion -
            Country pavilions representing African nations
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Made in Canada/Host
            Country Showcase
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Sector Zones: Fashion,
            food, beauty, technology, AI, manufacturing
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Innovation Alley:
            Startups and emerging businesses
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Demo Stages: Live product
            demonstrations throughout the day
          </span>
        </div>
      </div>
    </>
  );
  const CulturalCardDisplay = (
     <>
      <div className="firstTabDisplayCard">
        <div className="headIcon">
          {" "}
          <h1 style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <Palette className="build" /> {Zones}{" "}
          </h1>{" "}
        </div>

        <span style={{ color: "gray", fontSize: "17px" }}>
          World-class exhibition spaces featuring country pavilions, sector
          zones, <br /> and <br /> innovation alley.
        </span>

        <div className="btnContainerExpo">
          <button>
            Learn More About Cultural <ArrowRight size={17} />
          </button>
        </div>
      </div>
      <div className="secondTabDisplayCard">
        <div
          style={{
            paddingTop: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            fontSize: "17px",
            color: "#0F1729",
          }}
        >
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Made in Africa Pavilion -
            Country pavilions representing African nations
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Made in Canada/Host
            Country Showcase
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Sector Zones: Fashion,
            food, beauty, technology, AI, manufacturing
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Innovation Alley:
            Startups and emerging businesses
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Demo Stages: Live product
            demonstrations throughout the day
          </span>
        </div>
      </div>
    </>
  );
  const inverstmentCardDisplay = (
      <>
      <div className="firstTabDisplayCard">
        <div className="headIcon">
          {" "}
          <h1 style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <TrendingUp className="build" /> {Investment}{" "}
          </h1>{" "}
        </div>

        <span style={{ color: "gray", fontSize: "17px" }}>
          World-class exhibition spaces featuring country pavilions, sector
          zones, <br /> and <br /> innovation alley.
        </span>

        <div className="btnContainerExpo">
          <button>
            Learn More About {Investment} <ArrowRight size={17} />
          </button>
        </div>
      </div>
      <div className="secondTabDisplayCard">
        <div
          style={{
            paddingTop: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            fontSize: "17px",
            color: "#0F1729",
          }}
        >
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Made in Africa Pavilion -
            Country pavilions representing African nations
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Made in Canada/Host
            Country Showcase
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Sector Zones: Fashion,
            food, beauty, technology, AI, manufacturing
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Innovation Alley:
            Startups and emerging businesses
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Demo Stages: Live product
            demonstrations throughout the day
          </span>
        </div>
      </div>
    </>
  );
  const marketingCardDisplay = (
      <>
      <div className="firstTabDisplayCard">
        <div className="headIcon">
          {" "}
          <h1 style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <PartyPopper className="build" /> {Networking}{" "}
          </h1>{" "}
        </div>

        <span style={{ color: "gray", fontSize: "17px" }}>
          World-class exhibition spaces featuring country pavilions, sector
          zones, <br /> and <br /> innovation alley.
        </span>

        <div className="btnContainerExpo">
          <button>
            Learn More About {Networking} <ArrowRight size={17} />
          </button>
        </div>
      </div>
      <div className="secondTabDisplayCard">
        <div
          style={{
            paddingTop: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            fontSize: "17px",
            color: "#0F1729",
          }}
        >
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Made in Africa Pavilion -
            Country pavilions representing African nations
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Made in Canada/Host
            Country Showcase
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Sector Zones: Fashion,
            food, beauty, technology, AI, manufacturing
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Innovation Alley:
            Startups and emerging businesses
          </span>
          <span>
            {" "}
            <CircleCheckBig color="green" size={18} /> Demo Stages: Live product
            demonstrations throughout the day
          </span>
        </div>
      </div>
    </>
  );

  return (
    <div className="ExpoCom">
      <div className="ExpoCom-Wrapper">
        <h4 style={{ color: "#c70007" }}>EXPO COMPONENET</h4>
        <h2
          style={{ fontSize: "38px", marginTop: "-20px", textAlign: "center" }}
        >
          A Complete Business Ecosystem
        </h2>
        <span
          style={{
            color: "gray",
            marginTop: "-20px",
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          Everything you need for successful deal-making under one roof
        </span>
      </div>
      <div className="Table-Container">
        <div className="tablist">
          <div className="icos-wrapper">
            <span
              onClick={() => {
                setActiveDisplay(0);
              }}
              className={`spanbtn ${(activeDisplay === null && "spanbtn-active") || (activeDisplay === 0 && "spanbtn-active")}`}
            >
              <Building2 size={19} /> {Exhibition}{" "}
            </span>
            <span
              onClick={() => {
                setActiveDisplay(1);
              }}
              className={`spanbtn ${activeDisplay === 1 && "spanbtn-active"}`}
            >
              <MicVocal size={19} /> {Conference}
            </span>
            <span
              onClick={() => {
                setActiveDisplay(2);
              }}
              className={`spanbtn ${activeDisplay === 2 && "spanbtn-active"}`}
            >
              <UsersRound size={19} />
              {Matchmaking}
            </span>
            <span
              onClick={() => {
                setActiveDisplay(3);
              }}
              className={`spanbtn ${activeDisplay === 3 && "spanbtn-active"}`}
            >
              <Rocket size={19} /> {Spotlight}
            </span>
            <span
              onClick={() => {
                setActiveDisplay(4);
              }}
              className={`spanbtn ${activeDisplay === 4 && "spanbtn-active"}`}
            >
              <Palette size={19} />
              {Zones}
            </span>{" "}
            <br />
          </div>
          <div className="icos-wrapper">
            <span
              onClick={() => {
                setActiveDisplay(5);
              }}
              className={`spanbtn ${activeDisplay === 5 && "spanbtn-active"}`}
            >
              <TrendingUp size={19} /> {Investment}
            </span>
            <span
              onClick={() => {
                setActiveDisplay(6);
              }}
              className={`spanbtn ${activeDisplay === 6 && "spanbtn-active"}`}
            >
              <PartyPopper size={19} />
              {Networking}
            </span>
          </div>
        </div>
      </div>
      <div className="tabDisplay">
        <div className="tabDisplay-Wrapper">
          {/* {UserClickDisplay ? UserClickDisplay : clickDisplay} */}
          {/* {UserClickDisplay} */}
          {/* {clickDisplayCon || clickDisplay || displayB2b} */}
          {activeDisplay === null ? ExhibitionCardkDisplay : null}
          {activeDisplay === 0 && ExhibitionCardkDisplay}
          {activeDisplay === 1 && ConferenceCardDisplay}
          {activeDisplay === 2 && B2bMatchmakingCardDisplay}
          {activeDisplay === 3 && spotLightCardDisplay}
          {activeDisplay === 4 && CulturalCardDisplay}
          {activeDisplay === 5 && inverstmentCardDisplay}
          {activeDisplay === 6 && marketingCardDisplay}
        </div>
      </div>
    </div>
  );
};

export default ExpoCom;
