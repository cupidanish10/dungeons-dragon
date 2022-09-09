import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SpellListing from "./components/SpellListing";
import SpellDetails from "./components/SpellDetails";
import SpellComponent from "./components/SpellComponent";
import FavoriteList from "./components/FavoriteList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/spell" element={<SpellListing />} exact>
            {" "}
          </Route>
          <Route path="/spell/:index" element={<SpellDetails />} exact>
            {" "}
          </Route>
          <Route path="/favorite" element={<FavoriteList />} exact>
            {" "}
          </Route>
          <Route path="/" element={<SpellComponent />} exact>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
