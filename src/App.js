import './App.css';
import {BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import {FilmsPage, SingleFilmPage } from "./pages/index";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<FilmsPage />}/>
      <Route path="/:id" element={<SingleFilmPage />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
