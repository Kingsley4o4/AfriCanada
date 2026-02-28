import React from "react";
import "./header.css";
import Img from "../Header/Img/Header(1).png";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import Countdown from "./CounteDown/CountDown";
import CountUp from "react-countup"

function Header() {
  return (
    <div className="Header">
      <div className="Header-Containter">
        <div className="Header-ImageWrapper">
          <img className="img-head" src={Img} alt="" />

          <div className="intro">
            <div className="intro-content">
              <Calendar color="yellow" />
              <span style={{ paddingInlineStart: "6px", paddingRight: "20px" }}>
                {" "}
                June 10-12, 2026
              </span>
              | <MapPin color="yellow" style={{ paddingLeft: "20px" }} />
              <span style={{ paddingInlineStart: "6px"}}>
                Edomonton, Alberta, Canada
              </span>
            </div>

            <h1 className="introText">AfriCanada</h1>
            <h1 className="introText" style={{ marginTop: "-.9em",  }}>
              
              Expo 2026
            </h1>
            <h2  className="stMArginTop">
              Premier Global Platform for Shared Prosperity
            </h2>
            <span className="textInto" style={{ marginTop: "-5px" }}>
              Connecting African Excellence with Global Opportunities Through
              World-Class Exhibitions
            </span>
            <div className="Btns-Container">
              <button className="btn-1">
                Register as Exhibitor <ArrowUpRight size={16} color="white" />
              </button>
              <button className="btn-2">
                Register as Visitor <ArrowUpRight size={16} />
              </button>
              <button className="Btn-3">
                Become a Sponsor <ArrowUpRight size={16} />
              </button>
            </div>
            <Countdown targetDate="2026-05-31T00:00:00" />
          </div>
        </div>
        <div className="TotalUser-Number">
          <div className="totalUserTest">
             
           
            <h1>   <CountUp end={500} enableScrollSpy scrollSpyOnce />+
             </h1>
            <span
              style={{
                color: "gray",
                marginTop: "-30px",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Exhibitors Expected
            </span>
          </div>
          <div className="totalUserTest">
            <h1>
              <CountUp end={40} enableScrollSpy scrollSpyOnce />+ </h1>
            <span
              style={{
                color: "gray",
                marginTop: "-30px",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Countries
            </span>
          </div>
          <div className="totalUserTest">
            <h1>
             <CountUp end={10000} enableScrollSpy scrollSpyOnce />+</h1>
            <span
              style={{
                color: "gray",
                marginTop: "-30px",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Trade Visitor
            </span>
          </div>

          <div className="totalUserTest">
            <h1>
                  $<CountUp end={100} enableScrollSpy scrollSpyOnce />M+</h1>
            <span
              style={{
                color: "gray",
                marginTop: "-30px",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Business Deals
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;