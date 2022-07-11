import React from 'react';
import { useState, useRef, useEffect} from 'react';
import Hashtable from './Hashtable';


function Login (){
    const initialState = {
        username: "",
        password: ""
    };
    const ref = useRef(null);
    const ht = new Hashtable();

    

    const [info, setInfo] = useState(initialState);
    const [confPas, setConfPas] = useState("");

 
const handleSubmit =  e => {
    e.preventDefault();
    alert(info.username);
    alert(info.password);
    }

const handleChange = e => { 
    const {name, value } = e.target;
    setInfo(prevInfo => ({...prevInfo, [name]: value}));
};

const changeForm = e => {
    e.preventDefault();
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

}; 
    return (
        <div className="LoginComponent">
            <form className="form" id="login" onSubmit = {handleSubmit}>
    <div className="form__input-group">
    <input type="text" className="form__input" required autoFocus  placeholder="Username or email" value = {info.username} name= "username" onChange={handleChange}/>   
    {/* {renderErrorMessage("username")} */}
    </div>
    <div>   
    <input type="password" className="form__input" required autoFocus placeholder="Password" value = {info.password} name= "password" onChange={handleChange}/> 
    {/* {renderErrorMessage("username")} */}
    </div>
    <input type="submit" />
    <p className="form__text">
         <a href="#" className="form__link">Forgot your password?</a> */
    </p>
    <p className="form__text">
        <a className="form__link"  href="./" id="linkCreateAccount" onClick = {changeForm}>Don't have an account? Create account</a>
    </p>
    </form>

    <form className="form form--hidden" id="createAccount" onSubmit={handleSubmit}>
        <h1 className="form__title">Create Account</h1>
        <div className="form__input-group">
        <input type="text" className="form__input" required autoFocus  placeholder="Username" value = {info.username} name= "username" onChange={handleChange}/>
        </div>
        <div className="form__input-group">
        <input type="email" className="form__input" required autoFocus placeholder="Email" value = {info.email} name= "password" onChange={handleChange}/> 
        </div>
        <div className="form__input-group">
        <input type="password" className="form__input" required autoFocus placeholder="Password" value = {info.password} name= "password" onChange={handleChange}/> 
            <div className="form__input-error-message"></div>
        </div>
        <div className="form__input-group">
        <input type="password2" className="form__input" required autoFocus placeholder="Confirm Password" value = {confPas} name= "password" onChange={handleChange}/>
        </div>
        <button className="form__button" type="submit">Continue</button>
        <p className="form__text">
            <a className="form__link"  href="./" id="linkLogin" onClick = {changeForm}>Already have an account? Sign in</a>
        </p>
    </form>
        </div>
    )
}
export default Login;
    // document.querySelectorAll(".form__input").forEach(inputElement => {
    //     inputElement.addEventListener("blur", e => {
    //         if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
    //             setInputError(inputElement, "Username must be at least 10 characters in length");
    //         }
    //     });

    //     inputElement.addEventListener("input", e => {
    //         clearInputError(inputElement);
    //     });
    // });