import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
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
          <Route path="/dungeons-dragon/" element={<Home />} exact>
            {" "}
          </Route>
          <Route path="/dungeons-dragon/spell" element={<SpellListing />} exact>
            {" "}
          </Route>
          <Route
            path="/dungeons-dragon/spell/:index"
            element={<SpellDetails />}
            exact
          >
            {" "}
          </Route>
          <Route
            path="/dungeons-dragon/favorite"
            element={<FavoriteList />}
            exact
          >
            {" "}
          </Route>
          <Route path="/spell-card" element={<SpellComponent />} exact>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
