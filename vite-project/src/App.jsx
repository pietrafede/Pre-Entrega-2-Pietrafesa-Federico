import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ErrorPage from './pages/Errorpage/ErrorPage'


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail:id" element={<DetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/category/:categoryid" element={<CategoryPage />} />
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        <div className="ItemList">
          <ItemListContainer greeting="Gracias por visitarnos!" />
        </div>
      </div>
    </Router>
  );
};

export default App;
