
import "./App.css";
// import ModalComponent from "./Components/Modal";

import AirBnb from "./Pages/Air_BnB";
import PlacetoStay from "./Pages/Place_to_stay";
import {Routes, Route} from "react-router-dom";
// import Mid from "./Components/Mid";
// import Heros from "./Components/Heros";
// import NavBar from "./Components/Navbar";

function App() {
  return (
    <div className="app">
         <Routes>
        <Route path="/" element={ <AirBnb />  } />
        <Route path="place" element={<PlacetoStay />}/>
      </Routes>
    </div>
  );
}

export default App;
