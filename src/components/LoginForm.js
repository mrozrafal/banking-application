import React from 'react';
import ReactDOM from 'react-dom';
const modalsRoot = document.getElementById("modalsRoot")

class LoginForm extends React.Component {

    
render() {
    
    
    return ReactDOM.createPortal (
        <div className={this.props.wannaLogin ? "darken-box" : "darken-box slide-down"}>
            <div style={{
                backround: "#6320ee",
                padding: 30

            }}>

                <span className="form-container">

                    <button className="button-close" onClick={this.props.onClose}>
                    ✖️
                   
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
            <div className="button__container">
                        <button onClick={this.onSubmit} className="button-submit button-login">Zaloguj</button>
                        <button onClick={this.onOpenAccount} className="button-submit button-login" >Otwórz konto</button>
            </div >
                    </form>
                </span>
            </div>
                </div>
       
     , modalsRoot);

            }
        }
export default LoginForm;