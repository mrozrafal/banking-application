import React from 'react';

function LoginForm (props) {

    
    return (
        <div className={props.wannaLogin ? "darken-box" : "darken-box slide-down"}>
            <div style={{
                backround: "#6320ee",
                padding: 30

            }}>

                <span className="form-container">

                    <button className="button-close" onClick={props.onClose}>
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

                        <button className="button-submit button-login">Zaloguj</button>

                    </form>
                </span>
            </div>
 </div>
       
    );

}
export default LoginForm;