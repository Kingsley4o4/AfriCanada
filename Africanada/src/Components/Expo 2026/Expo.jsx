import React from "react";
import "./expo.css";
import {
  Calendar,
  MapPin,
  CircleCheckBig,
  Users,
  Globe,
  Briefcase,
  Lightbulb,
  Award,
  ArrowUpRight,
} from "lucide-react";




function Expo() {
 

  return (
    <div className="Expo">
    
    
      

      <div className="Expo-Container">
        <h5 className="RedColorHeadText" >THE INAUGURAL EDITION </h5>
        <h2 className="HeaderText" style={{ marginTop: "-20px", textAlign:"center" }}>
          AfriCanada Expo 2026
        </h2>
        <span className="italic italicText" style={{  marginTop: "-19px",textAlign:"center" }}>
          "We aren't just hosting a trade show; we are building a trade
          corridor."
        </span>
      </div>
      <div className="Main-container">
        <div className="red-container">
          <div className="red-box">
            <p>THEME</p>
            <h3>
              "Unlocking Potential: The Canada-Africa Partnership for
              Prosperity"
            </h3>
            <Calendar size={12} color="white" />
            <span className="redBoxIconTest" style={{ paddingInlineStart: "6px", paddingRight: "20px" }}>
              {" "}
              June 10-12, 2026
            </span>
            | <MapPin size={12} color="white" style={{ paddingLeft: "20px" }} />
            <span  className="redBoxIconTest" style={{ paddingInlineStart: "6px" }}>
              Edomonton, Alberta, Canada
            </span>
          </div>

          <div className="white-box">
            <h4 className="whiteBoxText">What to Expect</h4>
            <h5>
              {" "}
              <span
                style={{
                  backgroundColor: "#FFE5E6",
                  padding: "10px",
                  borderRadius: "6px",
                  marginInlineEnd: "10px",
                }}
              >
                <Users size={16} color="red" />
              </span>
              200+ Exhibitors showcasing African excellence
            </h5>
            <h5>
              <span className="icon-span">
                <Globe size={16} />
              </span>
              5,000+ Qualified trade visitors from 25+ countries
            </h5>
            <h5>
              <span className="icon-span">
                <Briefcase size={16} />
              </span>
              Made in Africa Pavilion featuring 30+ African nations
            </h5>
            <h5>
              <span className="icon-span">
                <Lightbulb size={16} />
              </span>
              3-day Conference with 100+ speakers and sessions
            </h5>
            <h5>
              <span className="icon-span">
                <Calendar  size={16} />
              </span>
              B2B Matchmaking Lounge with 1,000+ pre-arranged meetings
            </h5>
            <h5>
              <span className="icon-span">
                <Award size={16}  />
              </span>
              Startup Spotlight featuring 50+ African innovations
            </h5>
          </div>
        </div>

        <div className="black-container">
          <div className="black-box">
            <div 
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "7px",
                justifyContent: "center",
                alignItem:"center"
              }}
            >
              <span className="blackBoxHeadText" style={{ paddingTop:"13px" } }>Expected Outcomes</span>
              <span>
                {" "}
                <CircleCheckBig
                  color="yellow"
                  size={14}
                  style={{ paddingRight: "6px" }}
                />
                $50M+ in business deals and partnerships
              </span>

              <span>
                {" "}
                <CircleCheckBig
                  style={{ paddingRight: "6px" }}
                  color="yellow"
                  size={14}
                />
                500+ B2B connections facilitated
              </span>
              <span>
                {" "}
                <CircleCheckBig
                  style={{ paddingRight: "6px" }}
                  color="yellow"
                  size={14}
                />
                100+ Media coverage globally
              </span>
              <span>
                {" "}
                <CircleCheckBig
                  style={{ paddingRight: "6px" }}
                  color="yellow"
                  size={14}
                />
                Launch pad for Africa-Canada trade corridor
              </span>
            </div>
          </div>
          {/* <div className="white-bo"> */}
            <div className="white-box2">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  justifyContent: "center",
                  color: "gray",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                <h3 className="whiteBoxText">Key Highlights</h3>

                <span style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
                  {" "}
                  <CircleCheckBig
                    style={{ flexShrink: "0", paddingTop: "2px" }}
                    color="green"
                    size={14}
                  />{" "}
                  <div>
                    Free registration for qualified Canadian/African trade
                    visitors
                  </div>
                </span>
                <span style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
                  {" "}
                  <CircleCheckBig
                    style={{ flexShrink: "0", paddingTop: "2px" }}
                    color="green"
                    size={14}
                  />{" "}
                  <div>
                    Visa support for international attendees
                  </div>
                </span>
              <span style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
                  {" "}
                  <CircleCheckBig
                    style={{ flexShrink: "0", paddingTop: "2px" }}
                    color="green"
                    size={14}
                  />{" "}
                  <div>
                    Government delegations from 15+ countries
                  </div>
                </span>
                <span style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
                  {" "}
                  <CircleCheckBig
                    style={{ flexShrink: "0", paddingTop: "2px" }}
                    color="green"
                    size={14}
                  />{" "}
                  <div>
                    Opening night gala with 1,000+ attendees
                  </div>
                </span>

                <span style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
                  {" "}
                  <CircleCheckBig
                    style={{ flexShrink: "0", paddingTop: "2px" }}
                    color="green"
                    size={14}
                  />{" "}
                  <div>
                    Awards ceremony recognizing excellence
                  </div>
                </span>
              </div>
            </div>
            <div className="BtnContainer">
              <button
                className="
                ExhibitorBtn buttonText
            "
              >
                Register as Exhibitor <ArrowUpRight size={16} color="white" />
              </button>
              <button style={{backgroundColor:"#F3F3F5"}} className="sponserBtn  buttonText">
                Become a Sponsor <ArrowUpRight size={16} />
              </button>
            </div>
          {/* </div> */}
           <div className="discountMSg">
            <span>
              🎉 Early Bird Discount: Book by March 15, 2026 and Save 20% on
              Exhibition Space
            </span>
          </div>
        </div>
      </div>
   
    </div> 
  );
}

export default Expo;
