import React, { useState, useEffect } from "react";//imports react and hooks for mananging effects
import Card from "./components/Card"//imports Card and Header from respective files
import Header from "./components/Header"

const App = () => {//defines function component App, represents structure of application
  const [deals, setDeals] = useState([]);//initializes variable deals using useState, setDeals is function to update this state

  const getDeals = async () => {//async function that fetches deals from, fetches from API to make GET request, converts data to
    //jSON file 
    try {
      const response = await fetch("http://localhost:8080/deals", { method: "GET" });
      const data = await response.json();
      setDeals(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {//hook to execute the getDeals function when component mounts, empty array ensures that effect runs only when
    //component renders
    getDeals();
  }, []);

  

  return (//returns JSX(extension for JS that lets you write HTML inside JS file)structure that defines layout of application
    <div className="app">
      <Header />
      <nav>
        <button className = "primary"> Amazon </button>
        <button className = "primary" disabled> eBay </button>
        <button className = "primary" disabled> Etsy </button>
      </nav>
      <div>
        <h2>Best Deal!</h2>
        <div className = "feed">
          {deals?.map(deal => <Card key = {deal.pos} item = {deal}/>)}
        </div>
      </div>
    </div>
  );
};

export default App;//exports App as default export 

//react app fetches deals when server mounts, displays header, navigation buttons, and sections with best deals
