import React from "react";
import "./connect.css";
import footerLogo from "./footerLogo.png"
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
const Connect = () => {
  return (
    <div className="ConnectContainer">
      <div className="ConnectIntro">
        <h1>Are You Ready to Be Part of History?</h1>
        <span>
          Join us for the inaugural Made in Africa Expo Canada event. Whether
          you're <br />
          showcasing products, sourcing opportunities, or building partnerships,
          AfriCanada <br />
          Expo 2026 is your platform to achieve more and succeed faster.
        </span>

        <div className="btnContainer">
          <button className="exhibit-btn">
            EXHIBIT <ArrowRight size={12} />
          </button>
          <button className="white-btn">VISIT</button>
          <button className="sponsor-btn">SPONSOR</button>
        </div>
        <span style={{ marginTop: "10px", fontSize: "15px" }}>
          Questions? Contact our team: info@madeinafricaexpo.com | +1 (587)
          501-3257
        </span>
      </div>
      <div className="stayConnectedContainer">
        <div className="stayConnectedWrapper">
          <h2>Stay Connected</h2>
          <span className="stayConnectedSub">
            Get exclusive updates on exhibitors, speakers, special offers, and
            announcements.
          </span>

          <form className="stayConnectedCard">
            <div className="stayConnectedGrid">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Company Name" />
              <select defaultValue="">
                <option value="" disabled>
                  I'm interested in...
                </option>
                <option value="Exhibiting">Exhibiting</option>
                <option value="Visiting">Visiting</option>
                <option value="Sponsorship">Sponsorship</option>
                <option value="Partnership">Partnership</option>
              </select>
            </div>

            <label className="stayConnectedCheck">
              <input type="checkbox" />
              <span>
                I agree to receive emails from Made in Africa Expo Global
              </span>
            </label>

            <button type="button" className="subscribeBtn">
              Subscribe Now
            </button>

            <div className="privacyNote">
              We respect your privacy. Unsubscribe anytime.
            </div>
          </form>
        </div>
      </div>

      <footer className="siteFooter">
        <div className="footerInner">
          <div className="footerTop">
            <div className="footerBrand">
              <div className="footerLogo"  > 
                <img src={footerLogo} alt=""/>
              </div>
              <p>
                Canada's premier trade exhibition connecting African excellence
                with global opportunities. Join us June 10-12, 2026 in Edmonton,
                Alberta.
              </p>

              <div className="footerMiniForm">
                <h4>Stay Connected</h4>
                <span>
                  Get updates on exhibitors, speakers, and special offers.
                </span>
                <div className="footerMiniRow">
                  <input type="email" placeholder="Enter your email" />
                  <button type="button">Subscribe</button>
                </div>
              </div>
            </div>

            <div className="footerCols">
              <div className="footerCol">
                <h4>Quick Links</h4>
                <a href="#">About Us</a>
                <a href="#">Why Exhibit</a>
                <a href="#">Why Visit</a>
                <a href="#">Contact Us</a>
              </div>
              <div className="footerCol">
                <h4>For Exhibitors</h4>
                <a href="#">Exhibitor Packages</a>
                <a href="#">Book Your Stand</a>
                <a href="#">Exhibitor Manual</a>
              </div>
              <div className="footerCol">
                <h4>For Visitors</h4>
                <a href="#">Visitor Registration</a>
                <a href="#">Conference Passes</a>
                <a href="#">Travel Information</a>
                <a href="#">Visa Support</a>
              </div>
            </div>
          </div>

          <div className="footerDivider" />

          <div className="footerContacts">
            <div className="footerContact">
              <Mail color="#E2473C" size={14} />
              <div>
                <div className="footerContactLabel">General Inquiries</div>
                <div className="footerContactValue">
                  info@madeinafricaexpo.com
                </div>
              </div>
            </div>
            <div className="footerContact">
              <Phone color="#E2473C" size={14} />
              <div>
                <div className="footerContactLabel">Phone</div>
                <div className="footerContactValue">+1 (587) 501-3257</div>
              </div>
            </div>
            <div className="footerContact">
              <MapPin color="#E2473C" size={14} />
              <div>
                <div className="footerContactLabel">Location</div>
                <div className="footerContactValue">
                  Edmonton, Alberta, Canada
                </div>
              </div>
            </div>
          </div>

          <div className="footerSocial">
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter size={16} />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube size={16} />
            </a>
          </div>

          <div className="footerBottom">
            <div className="footerBottomTop">
              <div style={{paddingLeft:"35px"}}> © 2025 Made in Africa Expo. All rights reserved.</div>
              <div className="footerBottomLinks">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms &amp; Conditions</a>
              </div>
            </div>
            <div className="footerDividerHalf"></div>

            <div className="footerAcknowledge">
              We acknowledge that we are on Treaty 6 territory, the traditional
              lands of the Nêhiyaw (Cree), Dene, Anishinaabe/Saulteaux, Nakota
              Isga (Nakota Sioux), and Niitsitapi (Blackfoot), and the Métis
              Districts 9, 10, and 11 of the Métis Nation of Alberta. We honour
              the spirit and traditions of our shared responsibility to build
              respectful relationships.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Connect;
