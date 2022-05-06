import React from 'react';
import './App.css';
import Header from "./components/Header" // Added to use Header.js
import Home from "./components/Home" // Added to use Home tag from Home.js

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
