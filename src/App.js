import React from 'react';
import './style/App.scss';
import Header from './components/Header';
import Presentation from './components/Presentation';
import KnowHow from './components/Know-how';
import NewsBox from './components/NewsBox';
import Footer from './components/Footer';
import { unstable_batchedUpdates } from 'react-dom';




class App extends React.Component {

    

render() {


  return (
    <div className="App">
      <header className="header">
        <Header />
        <br />
      </header>      
      <Presentation />
      <KnowHow />
      <NewsBox />
    <Footer />


    </div>
  );
}
}

export default App;
