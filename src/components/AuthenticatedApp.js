import React, { Component } from 'react';


class AuthenticatedApp extends Component {
    state = {  }
    render() { 
        return (  
            <form className="login-form">
                <label className="mail"><input type="email"></input></label>
                <label className="password"><input type="password"></input></label>
            </form>
        );
    }
}
 
export default AuthenticatedApp;