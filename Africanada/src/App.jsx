import "./App.css";
import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/NavBar";
import Expo from "./Components/Expo 2026/Expo";
import Choose from "./Components/Choose-Us/Choose";
import ExpoCom from "./Components/Choose-Us/Expo-Component/ExpoCom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Expo />
      <Choose />
      <ExpoCom />
   </div>
  );
}

export default App;
