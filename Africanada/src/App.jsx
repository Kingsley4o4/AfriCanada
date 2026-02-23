import "./App.css";
import Header from "./Components/Header/Header.jsx";
import NavBar from "./Components/Navbar/NavBar.jsx";
import Expo from "./Components/Expo 2026/Expo.jsx";
import Choose from "./Components/Choose-Us/Choose.jsx";
import ExpoCom from "./Components/Choose-Us/Expo-Component/ExpoCom";
import PartnerShip from "./Components/PartnerShip/PartnerShip.jsx";
import OurPartner from "./Components/OurPartner/OurPartner.jsx";
import LatestUpdate from "./Components/LatestUpdate/LatestUpdate.jsx";
import Connect from "./Components/StayConnected/Connect.jsx";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Expo />
      <Choose />
      <ExpoCom />
      <PartnerShip />
     <OurPartner />
     <LatestUpdate />
     <Connect />
    </div>
  );
}

export default App;
