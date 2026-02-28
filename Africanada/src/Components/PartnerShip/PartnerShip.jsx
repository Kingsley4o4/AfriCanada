import React from "react";
import "./partnership.css";

const PartnerShip = () => {
  return (
    <div className="PartnerShip">
      <div className="PartnerShipIntro">
        <h4>INDIGENOUS PARTNERSHIPS</h4>
        <h2>Honouring Land, Spirit, and Shared Resilience</h2>

        <p className="PartnerShipIntroDesc">
          As a Canada-based initiative, Made in Africa Expo Canada 2026
          recognizes that our gathering takes place on the traditional lands of
          Indigenous Peoples.
        </p>
      </div>
      <div className="partnerShipContentContainer">
        <div className="partnerShipContentCardOne">
          <h4>Our Intentional Design</h4>

          <p className="designIntro">
            Guided by Indigenous advisors, Elders, and Knowledge Keepers from
            across Treaty 6, the 2026 Expo in Edmonton is designed to:
          </p>

          <div className="numberedList">
            <div className="numberedItem">
              <span className="numberBadge">1</span>
              <div>
                <span className="numberedTitle">Honour the Land</span>
                <p className="numberedDesc">
                  Deeply respect the Peoples who host us.
                </p>
              </div>
            </div>
            <div className="numberedItem">
              <span className="numberBadge">2</span>
              <div>
                <span className="numberedTitle">Drive Economic Growth</span>
                <p className="numberedDesc ">
                  Create tangible opportunities for Indigenous and African
                  businesses.
                </p>
              </div>
            </div>
            <div className="numberedItem">
              <span className="numberBadge">3</span>
              <div>
                <span className="numberedTitle">Bridge Histories</span>
                <p className="numberedDesc">
                  Build understanding between communities with shared
                  experiences of resilience.
                </p>
              </div>
            </div>
            <div className="numberedItem">
              <span className="numberBadge">4</span>
              <div>
                <span className="numberedTitle">Inspire Generations</span>
                <p className="numberedDesc">
                  Foster long-term collaboration across continents.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="partnerShipContentCardTwo">
          <h4>Core Programming & Protocols</h4>
          <div className="BoxesContainer">
            <div className="Boxes">
              <h6>Ceremonial Opening</h6>
              <p>
                Led by a respected Elder or Knowledge Keeper, the Expo begins
                with a Land Acknowledgement and traditional ceremony.
              </p>
            </div>
            <div className="Boxes">
              <h6>Trade & Innovation</h6>
              <p>
                Dedicated spaces highlighting Indigenous-led enterprises in
                energy, technology, agriculture, and creative industries.
              </p>
            </div>
            <div className="Boxes">
              <h6>B2B Matchmaking</h6>
              <p>
                Specialized networking sessions designed to spark joint ventures
                between Indigenous and African business leaders.
              </p>
            </div>
            <div className="Boxes">
              <h6>Shared History Dialogues</h6>
              <p>
                Sessions exploring common threads of land stewardship, community
                governance, and overcoming systemic barriers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fullBoxContainer">
        <div className="fullBox">
          <span>
            "Indigenous Peoples in Canada and African communities both carry
            histories marked by colonialism and land dispossession.  At  <br />
            the same time, both hold deep knowledge of intergenerational
            resilience and stewardship. We gather to weave these futures {" "}
            together."
          </span>
        </div>
      </div>
      <div className="OutroContainer">
        <div className="outtroCard">
          <h4>Join Our Partnership</h4>
          <span>
            We invite Indigenous Nations, organizations, and businesses across
            Edmonton, Alberta, and <br />
            Canada to help shape this global stage. We are actively seeking
            participation from:
          </span>
        </div>
      </div>
      <div className="lastContainer">
  <span>Economic Development Corporations looking for global trade bridges</span>
  <span>Indigenous-Owned Businesses and cooperatives</span> 
  <span>Chambers of Commerce and tourism groups</span>
  <span>Cultural Practitioners and Knowledge Keepers</span>
</div>
    </div>
  );
};

export default PartnerShip;
