import React, { useState, useEffect } from "react";
import "./App.scss";

import Menu from "./Menu/Menu";
import Hero from "./Hero/Hero";
import AboutPage from "./AboutPage/AboutPage";
import Footer from "./Footer/Footer";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";

import axios from "axios";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {

  const [chartData, setChartData] = useState({ doData:[], title:[],
    budget:[]});
    
  const getData = () => {
    axios.get('http://localhost:3500/budget').then((res) => {
      setChartData({doData: [...res.data.myBudget],
        title: res.data.myBudget.map((data) => {
          return data.title;
        }),
        budget: res.data.myBudget.map((data) => {
          return data.budget;
        }),
      });
    });
  };

  
  useEffect(() => {
    getData();
  }, []); // Empty brackets mean onMount because the empty array never changes between renders.

  const { title, budget, doData } = chartData;

  
  return (
    <Router>
      <Menu />
      <Hero />
      <div className='Main Container'>
        <Switch>
          <Route path='/about'>
            <AboutPage/>
          </Route>
          <Route path='/login'>
            <LoginPage/>
          </Route>
          <Route path='/about'>
            <AboutPage/>
          </Route>
          <Route path='/'>
            <HomePage title={title} budget={budget} doData={doData}/>
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
