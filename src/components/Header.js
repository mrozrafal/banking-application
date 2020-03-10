import React from 'react'

class Header extends React.Component {

    state = {
      active: false
    }
  
    toggleClass() {
      const currentState = this.state.active;
      this.setState({ active: !currentState });
    }
  
    handleClick = () => {
      this.toggleClass();
    }
  
  
    render(onClick) {
      return <>
        <header className="header">
          <div className="header__bar">
  
            <button
              onClick={this.handleClick}
              className={this.state.active ? 'hamburger--active' : "hamburger"}
            >
              <span className="hamburger__box">
                <span className="hamburger__inner"></span>
              </span>
            </button>
  
            <h1 className="bank-name">Neverland Bank</h1>
            <button className="button-login">Zaloguj</button>
          </div>
  
          <nav
            className={this.state.active ? 'navigation--active' : 'navigation'}
  
  
          >
            <div className="navigation">
              <ul className="navigation__list">
                <li className="navigation__item"><a href="">Konto osobiste</a></li>
                <li className="navigation__item"><a href="">Kredyt hipoteczny</a></li>
                <li className="navigation__item"><a href="">Wiedza o finansach</a></li>
                <li className="navigation__item"><a href="">Aktualności</a></li>
              </ul>
            </div>
  
          </nav>
          <br />
        </header>
      </>
    }
  }



export default Header;