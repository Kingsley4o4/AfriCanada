import React from "react";
import "./latestupdate.css";
import { ArrowRight, Calendar } from "lucide-react";

const LatestUpdate = () => {
  const updates = [
    {
      tag: "Announcement",
      date: "June 10-12, 2026",
      title: "AfriCanada Expo 2026 Officially Announced for Edmonton",
      description:
        "Made in Africa Expo Canada announces Edmonton as host city for inaugural AfriCanada Expo 2026, bringing together African and Canadian businesses...",
    },
    {
      tag: "Partnership",
      date: "October 15, 2025",
      title: "Ghana, Nigeria Government Officials Endorse Expo",
      description:
        "Senior government officials from Ghana and Nigeria have officially endorsed AfriCanada Expo 2026, promising strong delegation participation...",
    },
    {
      tag: "Registration",
      date: "December 1, 2025",
      title: "Early Bird Exhibitor Registration Opens with 20% Discount",
      description:
        "Exhibitors can now secure exhibition space for AfriCanada Expo 2026 with special early bird pricing available until March 15, 2026...",
    },
  ];

  return (
    <div className="LatestUpdate">
      <h4 className="LatestUpdateKicker">LATEST UPDATES</h4>
      <h1 className="LatestUpdateTitle">News & Announcements</h1>

      <div className="LatestUpdateGrid">
        {updates.map((item) => (
          <div key={item.title} className="LatestUpdateCard">

           
            <div className="LatestUpdateMedia">
              <span className="LatestUpdateBadge">{item.tag}</span>
              <div className="LatestUpdateMediaIcon" aria-hidden="true" />
            </div>

            <div className="LatestUpdateBody">
              <div className="LatestUpdateMeta">
                <Calendar size={14} />
                <span>{item.date}</span>
              </div>
              <h3 className="LatestUpdateCardTitle">{item.title}</h3>
              <p className="LatestUpdateDesc">{item.description}</p>
              <a className="LatestUpdateReadMore" href="#">
                Read More →
              </a>

            </div>
          </div>
        ))}
      </div>

      <div className="LatestUpdateFooter">
        <a className="LatestUpdateViewAll" href="#">
          View All News →
        </a>
      </div>
    </div>
  );
};

export default LatestUpdate;
