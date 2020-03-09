import React from 'react';
import './App.scss';




function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__bar">
        <div className="menu menu--js">=</div>
        <h1 className="bank-name">Neverland Bank</h1>
        <button className="button-login">Zaloguj</button>
        </div>
        
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__list navigation__list--element">Konta osobiste</li>
            <li className="navigation__list navigation__list--element">Kredyt hipoteczny</li>
            <li className="navigation__list navigation__list--element">Pożyczki</li>
            <li className="navigation__list navigation__list--element">Wiedza o finansach</li>
          </ul>
          
        </nav>
        <br/>
      </header>



      <section className="presentaion">
        <section className="presentation__account">
          <div className="presentation__account--picture" alt="people holding hands"></div>

          <h3>Konto osobiste</h3>
          <p>
            Otwórz przez internet konto osobiste i otrzymuj na nie wynagrodzenie z tytułu umowy o pracę.
            Otrzymaj bonus 200zł za założenie, oraz dodatkowe 50zł za każdą poleconą osobę.
        </p>
       <span className="presentation__button--container">
        <button className="presentation__button presentation__button--more">Więcej</button>
        <button className="presentation__button presentation__button--open-account">Otwórz konto</button>
        </span>
        </section>



        <section className="presentation__app">
          <div className="presentation__app--picture" alt="woman holding smartphone in hand"></div>

          <h3>Aplikacja mobilna</h3>
          <p>
            Pobierz aplikację i wykonuj przelewy. Wypłacaj gotówkę nawet bez portfela!
        </p>
        <span className="presentation__button--container">
        <button className="presentation__button presentation__button--more">Więcej</button>
         </span>
        </section>



        <section className="presentation__mortgage">
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



      <section className="know-how">
        <h3>Jak sobie radzić z finansami? Poznaj nasze sposoby.</h3>
        <button className="button-knowledge">Wiedza o finansach</button>
      </section>




      <section className="news">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </section>
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
