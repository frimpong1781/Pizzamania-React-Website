import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css';
import NavBar from './component/NavBar';
import Hero from './component/Hero';
import AboutPizza from './component/AboutPizza';
import PizzaType from './component/PizzaType';
import Footer from './component/Footer';

function App() {
  return (
      <div>
          <NavBar />
          <Hero />
          <AboutPizza />
          <PizzaType />
          <Footer />
      </div>
  
  );
}

export default App;
