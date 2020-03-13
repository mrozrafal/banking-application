import React from 'react'

class Navbar extends React.Component {
    state = {
      auth: false,
      slide: 0,  // How much should the Navbar slide up or down
      lastScrollY: 0,  // Keep track of current position in state
    };
  
    componentWillMount() {
      // When this component mounts, begin listening for scroll changes
      window.addEventListener('scroll', this.handleScroll);
    }
  
    componentWillUnmount() {
      // If this component is unmounted, stop listening
      window.removeEventListener('scroll', this.handleScroll);
    }
  
    handleScroll = () => {
      const { lastScrollY } = this.state; 
      const currentScrollY = window.scrollY;
  
  
      if (currentScrollY > lastScrollY) {
        this.setState({ slide: '-48px' });
      } else {
        this.setState({ slide: '0px' });
      }
      this.setState({ lastScrollY: currentScrollY });
    };
  
     render() {    
      return (

        <div className="header__bar" style={{
            transform: `translate(0, ${this.state.slide})`,
            transition: 'transform 90ms ease-in-out',
          }}>
  
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
        
          
        
       );
     }
   }

   export default Navbar;