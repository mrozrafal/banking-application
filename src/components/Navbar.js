import React from 'react'


class Navbar extends React.Component {
    state = {
        auth: false,
        slide: 0,  // How much should the Navbar slide up or down
        lastScrollY: 0,
        hamburgerActive: false
    };

    componentDidMount() {
        // When this component mounts, begin listening for scroll changes
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        // If this component is unmounted, stop listening
        window.removeEventListener('scroll', this.handleScroll);
    }
    toggleClass() {
        const currentState = this.state.hamburgerActive;
        this.setState({ hamburgerActive: !currentState });
    }

    handleClick = () => {
        this.toggleClass();
    }
    handleRemoveClass = () => {
        this.setState({ hamburgerActive: false })

    }

    handleScroll = () => {
        if (!this.state.hamburgerActive) {
            const { lastScrollY } = this.state;
            const currentScrollY = window.scrollY;


            if (currentScrollY > lastScrollY) {
                this.setState({ slide: '-48px' });
            } else {
                this.setState({ slide: '0px' });
            }
            this.setState({ lastScrollY: currentScrollY });
        }

    };
 

    render() {
        return (

            <div className="header__bar" style={{
                transform: `translate(0, ${this.state.slide})`,
                transition: 'transform 90ms ease-in-out',
            }}>

                <button
                    onClick={this.handleClick}
                    className={this.state.hamburgerActive ? 'hamburger hamburger--active' : "hamburger"}
                    aria-label="hamburger menu"

                >
                    <span className="hamburger__box">
                        <span className="hamburger__inner"></span>
                    </span>
                </button>
                <nav
                    className={this.state.hamburgerActive ? 'navigation navigation--active' : 'navigation'}

                >

                    <ul className="navigation__list">
                        <li onClick={this.handleRemoveClass} className="navigation__item"><a href="#myAccount">Konto osobiste</a></li>
                        <li onClick={this.handleRemoveClass} className="navigation__item"><a href="#myLoan">Kredyt hipoteczny</a></li>
                        <li onClick={this.handleRemoveClass} className="navigation__item"><a href="#myKnow-how">Wiedza o finansach</a></li>
                        <li onClick={this.handleRemoveClass} className="navigation__item"><a href="#fetched-news-from-newsapi">Aktualności</a></li>
                    </ul>


                </nav>

                <h1 className="bank-name">Neverland Bank</h1>
                <button 
               
                className="button-login">Zaloguj</button>
            </div>



        );
    }
}

export default Navbar;