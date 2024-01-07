import MainNavigation from "./components/MainNavigation";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Travels from "./pages/travels";
import Countries from "./pages/countries";
import Hotels from "./pages/hotels";

function App() {
  return (
    <>
      <MainNavigation>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/travels" element={<Travels />}></Route>
          <Route path="/hotels" element={<Hotels />}></Route>
          <Route path="/countries" element={<Countries />}></Route>
        </Routes>
      </MainNavigation>
    </>
  );
}

export default App;
