import React from 'react';
import './style/App.scss';
import Navbar from './components/Navbar';
import News from './components/News';



function App() {

  return (
    <div className="App">
      <header className="header">
          <Navbar />
          <br />
        </header>

      <section className="presentation">
        <section className="presentation__account" id="myAccount">
          <div className="presentation__account--picture" alt="people holding hands"></div>
          <article className="presentation__account--text-container">
            <h3>Konto osobiste</h3>
            <p>
              Otwórz przez internet konto osobiste i otrzymuj na nie wynagrodzenie z tytułu umowy o pracę.
              Otrzymaj bonus 200zł za założenie, oraz dodatkowe 50zł za każdą poleconą osobę.
        </p>

          </article>

          <span className="presentation__button--container presentation__account--button-container">
            <button className="presentation__button presentation__button--more">Więcej</button>
            <button className="presentation__button presentation__button--open-account">Otwórz konto</button>
          </span>
        </section>



        <section className="presentation__app">
          <div className="presentation__app--picture" alt="woman holding smartphone in a hand"></div>

          <h3>Aplikacja mobilna</h3>
          <p>
            Pobierz aplikację i wykonuj przelewy. Wypłacaj gotówkę nawet bez portfela!
        </p>
          <span className="presentation__button--container">
            <button className="presentation__button presentation__button--more">Więcej</button>
          </span>
        </section>



        <section className="presentation__mortgage" id="myLoan">
          <div className="presentation__mortgage--picture" alt="nice looking apparment"></div>

          <h3>Kredyt hipoteczny</h3>
          <p>
            Złóż wniosek przez internet. Sprawdź swoją zdolność kredytową. Oblicz ratę. Kup wymarzone mieszkanie, dom lub działkę!
        </p>
          <span className="presentation__button--container">
            <button className="presentation__button presentation__button--more">Więcej</button>
          </span>
        </section>
      </section>



      <section className="know-how" id="myKnow-how">
        <h3>Jak sobie radzić z finansami? Poznaj nasze sposoby.</h3>
        <button className="button-knowledge" >Wiedza o finansach</button>
      </section>


      <h2 id="fetched-news-from-newsapi" className="news__big-header">Aktualności</h2>
      <News id={0}/>
      <News id={1}/>
      <News id={2}/>
      <h6 className="news-api-info"><em>Artykuły pobrano z newsapi.org</em></h6>

      <nav className="footer">
        <section className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__list footer__list--element">Konta osobiste</li>
            <li className="footer__list footer__list--element">Kredyt hipoteczny</li>
            <li className="footer__list footer__list--element">Pożyczki</li>
            <li className="footer__list footer__list--element">Wiedza o finansach</li>
          </ul>
        </section>
        <section className="footer__social">
          <ul className="social__list">
            <li className="social__list social__list--link">fb</li>
            <li className="social__list social__list--link">email</li>
            <li className="social__list social__list--link">kontakt</li>
          </ul>
        </section>
      </nav>
    </div>
  );
}

export default App;
