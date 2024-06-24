import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Bar2 from './components/Bar2';
import Images from './components/Images';
import Footer from './components/Footer';



// import Dropdown from './components/Dropdown';
function App() {
  return (
    <div>
      <Navbar/>
      <Bar2/>
      <Images/>
      <Footer/>
      {/* <Dropdown/> */}
    </div>
  );
}

export default App;
