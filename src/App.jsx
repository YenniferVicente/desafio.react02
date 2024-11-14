import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';


const App = () => {
  return (
    
    <div className="App-container">
      <Navbar />
      {/* <Home /> */}
      {/* <Register /> */}
      <Login />
      <Footer />

    </div>
    


  );
};

export default App;
