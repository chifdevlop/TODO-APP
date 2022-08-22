import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/LayoutArea/Header/Header';
import Main from './Components/LayoutArea/Main/Main';
import Footer from './Components/LayoutArea/Footer/Footer';
import Menu from './Components/LayoutArea/Manu/Menu';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
