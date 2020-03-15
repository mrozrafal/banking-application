import React from 'react';

const Presentation = () => {
    return ( 
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
            <button className="button-login presentation__button presentation__button--open-account">Otwórz konto</button>
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

     );
}
 
export default Presentation;