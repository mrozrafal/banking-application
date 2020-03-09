import React from 'react';
import './App.scss';

class Header extends React.Component {

state = {
  active: false
}  
  
toggleClass() {
  const currentState= this.state.active;
  this.setState({ active: !currentState});
}

handleClick = () => {
  this.toggleClass();
}


  render (onClick) {
    return <>
    <header className="header">
        <div className="header__bar">

          <button 
          onClick={this.handleClick} 
          className={this.state.active ? 'hamburger--active': "hamburger"} 
>
            <span className="hamburger__box">
              <span className="hamburger__inner"></span>
            </span>
          </button>

          <h1 className="bank-name">Neverland Bank</h1>
          <button className="button-login">Zaloguj</button>
        </div>

        <nav 
        className={this.state.active ?  'navigation--active' :  'navigation' } 
       
        
        >
          <div class="navigation">
  <ul class="navigation__list">
    <li class="navigation__item"><a href="">Konto osobiste</a></li>
    <li class="navigation__item"><a href="">Kredyt hipoteczny</a></li>
    <li class="navigation__item"><a href="">Wiedza o finansach</a></li>
    <li class="navigation__item"><a href="">Aktualności</a></li>
  </ul>
</div>

        </nav>
        <br />
      </header>
    </>
  }
}

function App() {
  
  return (
    <div className="App">
      <Header />

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
          <div className="presentation__app--picture" alt="woman holding smartphone in a hand"></div>

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
        <article className="news__container">
          <h3 className="news__header">Zawirowania na giełdzie z powodu koronawirusa</h3>
          <p className="news__item">
            Ogólnoświatowa panika spowodowana epidemią wirusa COVID-19 odbija się echem
             na rynkach kapitałowych. Inwestorzy wycofują swoje środki z wielu inwestycji.
             Produkcja w wielu fabrykach została wstrzymana, aż do zakończenia kwarantanny
             w zagrożonych obszarach Chin. Powoduje to opóźnienia w dostępności wielu towarów,
            szczególenie podzespołów elektronicznych. Nie dziwi wzrost ich cen. Zauważamy niespotykaną
            dotąd zmienność na giełdzie. Ceny akcji dużych spółek spadają w zawrotnym tempie, aby potem znów
            skokowo wzrosnąć do wartości przewyższających te sprzed kryzysu wywołanego wirusem.
            </p>
          <button className="button-knowledge">Więcej</button>
        </article>

        <article className="news__container">
          <h3 className="news__header">Życie po brexicie. Start negocjacji, Johnson już straszy UE</h3>
          <p className="news__item">
            Unia i Wielka Brytania zaczęły negocjacje w sprawie stosunków gospodarczo-politycznych po
            brexicie. Cele obu stron na razie się wykluczają, a Londyn już używa straszaka „no deal”.
            Choć więcej straciliby na tym Brytyjczycy.
           </p>
          <button className="button-knowledge">Więcej</button>
        </article>

        <article className="news__container">
          <h3 className="news__header">Życie po brexicie. Start negocjacji, Johnson już straszy UE</h3>
          <p className="news__item">
            Unia i Wielka Brytania zaczęły negocjacje w sprawie stosunków gospodarczo-politycznych po
            brexicie. Cele obu stron na razie się wykluczają, a Londyn już używa straszaka „no deal”.
            Choć więcej straciliby na tym Brytyjczycy.
           </p>
          <button className="button-knowledge">Więcej</button>
        </article>


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
