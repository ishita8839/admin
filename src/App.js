import React, { Fragment } from "react";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import './App.css';
import { Dashboard } from "./pages/Dashboard";
import { Tables } from "./pages/Tables";
import { Hero404 } from "./pages/Hero404";
import { Profile } from "./pages/Profile";

function App() {
    return (
      <Fragment>
        <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard/> } />
          <Route path="/tables" element={<Tables/>} />
          <Route path="/hero404" element={<Hero404/>} />
          <Route path="/profile" element={<Profile/>} />
          </Routes>
        </Router>
      </Fragment>
    );
  };
  
  export default App;
  

