import React from 'react';
import './style/App.scss';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import KnowHow from './components/Know-how';
import NewsBox from './components/NewsBox';
import Footer from './components/Footer';



function App() {

  return (
    <div className="App">
      <header className="header">
        <Navbar />
        <br />
      </header>

      <Presentation />
      <KnowHow />
      <NewsBox />
    <Footer />


    </div>
  );
}

export default App;
