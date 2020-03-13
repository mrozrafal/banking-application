import React from 'react';
import Navbar from './Navbar';

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
  handleRemoveClass = () => {
    this.setState({ active: false})
  }
  
    render(onClick) {
      return <>
        <header className="header">
          <Navbar />
          
  
          <nav
            className={this.state.active ? 'navigation--active' : 'navigation'}
  
          >
            <div className="navigation">
              <ul className="navigation__list">
                <li onClick={this.handleRemoveClass} className="navigation__item"><a href="#myAccount">Konto osobiste</a></li>
                <li onClick={this.handleRemoveClass} className="navigation__item"><a href="#myLoan">Kredyt hipoteczny</a></li>
                <li onClick={this.handleRemoveClass} className="navigation__item"><a href="#myKnow-how">Wiedza o finansach</a></li>
                <li onClick={this.handleRemoveClass} className="navigation__item"><a href="#myNews">Aktualności</a></li>
              </ul>
            </div>
  
          </nav>
          <br />
        </header>
      </>
    }
  }



export default Header;