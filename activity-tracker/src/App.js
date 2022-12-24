import logo from './logo.svg';
import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";




function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Route path="/" component={ExercisesList}/>
    </Router>
    
  );
}

export default App;
  