import React from 'react';


class LoginForm extends React.Component {
    
render() {
    return (
         
  
   
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"




        }}>
            <div style={{
                backround: "6320ee",
                padding: 30

            }}>

                <span className="form-container">

                    <button className="button-close" onClick={this.props.onClose}>
                        <span className="button-close__cross">
                            
                        </span>
                    </button>
                   
                 


                        
                        <form className="login-form">

                            <label className="login-form__label">
                                Email:
    <input type="email">
                                </input>
                            </label>
                            <label className="login-form__label" >
                                Hasło:
    <input type="password">
                                </input>
                            </label>

                            <button className="button-submit button-login">Zaloguj</button>

                        </form>
                </span>
            </div>
            </div>
    );

}
}
export default LoginForm;