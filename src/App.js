import React from 'react';
import './App.css';
import Navbar from './container/navbar/Navbar';
import Hero from './container/hero/Hero';
import AboutUs from './container/aboutus/AboutUs';
import MenuPrices from './container/menuprices/MenuPrices';
import Chef from './container/chef/Chef';
import Video from './container/video/Video';
import Awards from './container/awards/Awards';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <MenuPrices/>
      <Chef/>
      <Video/>
      <Awards/>
    </div>
  );
}

export default App;
