import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";


const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
          <div className="ItemList">
            <ItemListContainer greeting="Gracias por visitarnos!" />
          </div>
      </div>
      <Routes>
        <Route path="/" element={ HomePage}/>
        <Route path="/Detail" element={ DetailPage}/>
        <Route path="/Contact" element={ ContactPage}/>
        <Route path="/Category" element={ CategoryPage}/>
      </Routes>
    </Router>
  );
}

export default App;