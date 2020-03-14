import React from 'react';


const  Footer = () => {
    return ( 
        <footer className="footer">
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
      </footer>
     );
}
 
export default Footer  ;