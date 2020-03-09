import React from 'react';
import './App.css';




function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="navigation">
          <h1 className="bank-name">Neverland Bank</h1>
          <ul className="navigation__list">
            <li className="navigation__list navigation__list--element">Konta osobiste</li>
            <li className="navigation__list navigation__list--element">Kredyt hipoteczny</li>
            <li className="navigation__list navigation__list--element">Pożyczki</li>
            <li className="navigation__list navigation__list--element">Wiedza o finansach</li>
          </ul>
          <button className="button-login">Zaloguj</button>
        </nav>
      </header>
      <section className="presentaion">
        <section className="presentation__account">
          <img src="" alt="people holding hands"></img>

          <h3>Konto osobiste</h3>
          <p>
            Otwórz przez internet konto osobiste i otrzymuj na nie wynagrodzenie z tytułu umowy o pracę.
            Otrzymaj bonus 200zł za założenie, oraz dodatkowe 50zł za każdą poleconą osobę.
        </p>

        </section>
        <section className="presentation__app">
          <img src="" alt="woman holding smartphone in hand"></img>

          <h3>Aplikacja mobilna</h3>
          <p>
            Pobierz aplikację i wykonuj przelewy. Wypłacaj gotówkę nawet bez portfela!
        </p>
        </section>
        <section className="presentation__mortgage">
          <img src="" alt="nice looking apparment"></img>

          <h3>Kredyt hipoteczny</h3>
          <p>
            Złóż wniosek przez internet. Sprawdź swoją zdolność kredytową. Oblicz ratę. Kup wymarzone mieszkanie, dom lub działkę!
        </p>
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
