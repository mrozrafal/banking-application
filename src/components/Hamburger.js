import React from 'react'
class Hamburger extends React.Component {
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
    render (onClick) {
        return         <>
        <button
        onClick={this.handleClick}
        className={this.state.active ? 'hamburger hamburger--active' : "hamburger"}

    >
        <span className="hamburger__box">
            <span className="hamburger__inner"></span>
        </span>
    </button>
    <nav
            className={this.state.active ? 'navigation navigation--active' : 'navigation'}
  
          >
            
              <ul className="navigation__list">
                <li onClick={this.handleRemoveClass} className="navigation__item"><a href="#myAccount">Konto osobiste</a></li>
                <li onClick={this.handleRemoveClass} className="navigation__item"><a href="#myLoan">Kredyt hipoteczny</a></li>
                <li onClick={this.handleRemoveClass} className="navigation__item"><a href="#myKnow-how">Wiedza o finansach</a></li>
                <li onClick={this.handleRemoveClass} className="navigation__item"><a href="#myNews">Aktualności</a></li>
              </ul>
           
  
          </nav>
    </>
    }
}

export default Hamburger;