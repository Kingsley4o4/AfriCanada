import React, { useState } from "react";
import "./expocom.css";
import {
  Building2,
  MicVocal,
  UsersRound,
  Rocket,
  Palette,
  TrendingUp,
  PartyPopper,
  ArrowRight,
  CircleCheckBig,
} from "lucide-react";

// Moved outside component to avoid recreation on every render
const tabs = [
  { icon: <Building2 size={19} />, label: "Exhibition Halls" },
  { icon: <MicVocal size={19} />, label: "Conference & Trade Dialogues" },
  { icon: <UsersRound size={19} />, label: "B2B Matchmaking Lounge" },
  { icon: <Rocket size={19} />, label: "StartUp Spotlight" },
  { icon: <Palette size={19} />, label: "Cultural Experience Zones" },
  { icon: <TrendingUp size={19} />, label: "Investment Forums" },
  { icon: <PartyPopper size={19} />, label: "Networking Events" },
];

const tabCards = [
  {
    icon: <Building2 className="build" />,
    title: "Exhibition Halls",
    description:
      "World-class exhibition spaces featuring country pavilions, sector zones, and innovation alley.",
    buttonLabel: "Learn More About Exhibiting",
    items: [
      "Made in Africa Pavilion - Country pavilions representing African nations",
      "Made in Canada/Host Country Showcase",
      "Sector Zones: Fashion, food, beauty, technology, AI, manufacturing",
      "Innovation Alley: Startups and emerging businesses",
      "Demo Stages: Live product demonstrations throughout the day",
    ],
  },
  {
    icon: <MicVocal className="build" />,
    title: "Conference & Trade Dialogues",
    description:
      "World-class exhibition spaces featuring country pavilions, sector zones, and innovation alley.",
    buttonLabel: "Learn More About Conference",
    items: [
      "Made in Africa Pavilion - Country pavilions representing African nations",
      "Made in Canada/Host Country Showcase",
      "Sector Zones: Fashion, food, beauty, technology, AI, manufacturing",
      "Innovation Alley: Startups and emerging businesses",
      "Demo Stages: Live product demonstrations throughout the day",
    ],
  },
  {
    icon: <UsersRound className="build" />,
    title: "B2B Matchmaking Lounge",
    description:
      "World-class exhibition spaces featuring country pavilions, sector zones, and innovation alley.",
    buttonLabel: "Learn More About B2B Matchmaking",
    items: [
      "Made in Africa Pavilion - Country pavilions representing African nations",
      "Made in Canada/Host Country Showcase",
      "Sector Zones: Fashion, food, beauty, technology, AI, manufacturing",
      "Innovation Alley: Startups and emerging businesses",
      "Demo Stages: Live product demonstrations throughout the day",
    ],
  },
  {
    icon: <Rocket className="build" />,
    title: "StartUp Spotlight",
    description:
      "World-class exhibition spaces featuring country pavilions, sector zones, and innovation alley.",
    buttonLabel: "Learn More About StartUp Spotlight",
    items: [
      "Made in Africa Pavilion - Country pavilions representing African nations",
      "Made in Canada/Host Country Showcase",
      "Sector Zones: Fashion, food, beauty, technology, AI, manufacturing",
      "Innovation Alley: Startups and emerging businesses",
      "Demo Stages: Live product demonstrations throughout the day",
    ],
  },
  {
    icon: <Palette className="build" />,
    title: "Cultural Experience Zones",
    description:
      "World-class exhibition spaces featuring country pavilions, sector zones, and innovation alley.",
    buttonLabel: "Learn More About Cultural",
    items: [
      "Made in Africa Pavilion - Country pavilions representing African nations",
      "Made in Canada/Host Country Showcase",
      "Sector Zones: Fashion, food, beauty, technology, AI, manufacturing",
      "Innovation Alley: Startups and emerging businesses",
      "Demo Stages: Live product demonstrations throughout the day",
    ],
  },
  {
    icon: <TrendingUp className="build" />,
    title: "Investment Forums",
    description:
      "World-class exhibition spaces featuring country pavilions, sector zones, and innovation alley.",
    buttonLabel: "Learn More About Investment Forums",
    items: [
      "Made in Africa Pavilion - Country pavilions representing African nations",
      "Made in Canada/Host Country Showcase",
      "Sector Zones: Fashion, food, beauty, technology, AI, manufacturing",
      "Innovation Alley: Startups and emerging businesses",
      "Demo Stages: Live product demonstrations throughout the day",
    ],
  },
  {
    icon: <PartyPopper className="build" />,
    title: "Networking Events",
    description:
      "World-class exhibition spaces featuring country pavilions, sector zones, and innovation alley.",
    buttonLabel: "Learn More About Networking Events",
    items: [
      "Made in Africa Pavilion - Country pavilions representing African nations",
      "Made in Canada/Host Country Showcase",
      "Sector Zones: Fashion, food, beauty, technology, AI, manufacturing",
      "Innovation Alley: Startups and emerging businesses",
      "Demo Stages: Live product demonstrations throughout the day",
    ],
  },
];

const exhibitorWho = [
  "Canadian Manufacturers & Producers",
  "African Exporters",
  "Cooperatives & Associations",
  "Artisans & Craftspeople",
  "Service Providers",
  "Government Trade Agencies",
  "Technology Companies",
];

const exhibitorBenefits = [
  "Direct access to qualified buyers",
  "Lead generation and sales opportunities",
  "Brand visibility and media exposure",
  "Networking with industry leaders",
  "Government delegation meetings",
  "Cultural showcase opportunities",
];

const visitorWho = [
  "International Buyers & Importers",
  "Distributors & Retailers",
  "Investors & Investment Funds",
  "Government Officials & Diplomats",
  "Corporate Procurement",
  "Trade Development Agencies",
  "Media & Journalists",
  "Researchers & Academics",
  "Diaspora Entrepreneurs",
];

const visitorBenefits = [
  "Free trade visitor registration",
  "Access to 500+ exhibitors under one roof",
  "Pre-arranged B2B meetings",
  "Conference sessions and workshops",
  "Networking with decision-makers",
  "Market intelligence and insights",
  "Cultural experiences",
];

const ExpoCom = () => {
  const [activeDisplay, setActiveDisplay] = useState(0);

  const activeCard = tabCards[activeDisplay];

  return (
    <div className="ExpoCom">
      {/* HEADER */}
      <div className="ExpoCom-Wrapper">
        <h4 className="RedColorHeadText">EXPO COMPONENT</h4>
        <h2
          className="expoComHeading HeaderText"
         
        >
          A Complete Business Ecosystem
        </h2>
        <span className="CardText"
          style={{
            
            marginTop: "-20px",
            textAlign: "center",
            
          }}
        >
          Everything you need for successful deal-making under one roof
        </span>
      </div>

      {/* TABS */}
      <div className="Table-Container">
        <div className="tablist">
          <div className="icos-wrapper">
            {tabs.map((tab, index) => (
              <span
                key={index}
                onClick={() => setActiveDisplay(index)}
                className={`spanbtn CardText ${activeDisplay === index ? "spanbtn-active" : ""}`}
              >
                {tab.icon} {tab.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* TAB CARD DISPLAY */}
      <div className="tabDisplay">
        <div className="tabDisplay-Wrapper">
          <div className="firstTabDisplayCard">
            <div className="headIcon">
              <h1  className="TabCardhead"  style={{ display: "flex", alignItems: "center"  }}>
                {activeCard.icon} {activeCard.title}
              </h1>
            </div>
            <span className="CardText">
              {activeCard.description}
            </span>
            <div className="btnContainerExpo">
              <button className="buttonText">
                {activeCard.buttonLabel} <ArrowRight size={17} />
              </button>
            </div>
          </div>

          <div className="secondTabDisplayCard">
            <div className="CircleCheckContaner">
              {activeCard.items.map((item, index) => (
                <span className="CardTextAlign" key={index}>
                  <CircleCheckBig color="green" size={18} /> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* WHO SHOULD ATTEND */}
      <div className="Attend-Program">
        <div className="ExpoCom-Wrapper">
          <h4 className="RedColorHeadText">
            WHO SHOULD ATTEND
          </h4>
          <h2
            className="HeaderText expoComHeading"
            style={{ marginTop: "-19px", }}
          >
            Join Thousands of Trade Professionals
          </h2>
        </div>

        <div className="attendedCard">
          {/* EXHIBITORS */}
          <div className="firstAttenedCard">
            <div className="head">
              <div className="content-container">
                <span className="attendHeaderTitle">
                  <Building2 size={25} /> Exhibitors
                </span>
                <p className="attendHeaderSubtitle">
                  Showcase your products to the world
                </p>
              </div>
            </div>
            <div className="whiteBox">
              <h3 className="whiteBoxText">Who Should Exhibit:</h3>
              <div className="CircleCheckContanerWhite1">
                {exhibitorWho.map((item, i) => (
                  <span key={i} className=" AttendTest">
                    <CircleCheckBig color="green" size={18} /> {item}
                  </span>
                ))}
                <span className="whiteBoxText">
                  Exhibitor Benefits:
                </span>
                {exhibitorBenefits.map((item, i) => (
                  <span key={i} className="AttendTest">
                    <CircleCheckBig color="#E2473C" size={18} /> {item}
                  </span>
                ))}
              </div>
              <div className="RegisterBtn">
                <button>
                  Register as Exhibitor{" "}
                  <ArrowRight style={{ paddingTop: "4px" }} size={17} />
                </button>
              </div>
            </div>
          </div>

          {/* VISITORS */}
          <div className="secondAttenedCard">
            <div className="secondHead">
              <div className="content-container">
                <span className="attendHeaderTitle">
                  <UsersRound size={25} /> Visitors
                </span>
                <p className="attendHeaderSubtitle">
                  Discover opportunities and build partnerships
                </p>
              </div>
            </div>
            <div className="whiteBox">
              <h3 className="whiteBoxText">Who Should Visit:</h3>
              <div className="CircleCheckContanerWhite">
                {visitorWho.map((item, i) => (
                  <span key={i} className="AttendTest">
                    <CircleCheckBig color="green" size={18} /> {item}
                  </span>
                ))}
                <span className="whiteBoxText">
                  Visitor Benefits:
                </span>
                {visitorBenefits.map((item, i) => (
                  <span key={i} className="AttendTest">
                    <CircleCheckBig color="#FBBD23" size={18} /> {item}
                  </span>
                ))}
              </div>
              <div className="RegisterBtnWhite">
                <button>
                  Register as Visitor{" "}
                  <ArrowRight style={{ paddingTop: "4px" }} size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpoCom;