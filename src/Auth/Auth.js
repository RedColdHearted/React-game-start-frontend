import './Auth.css';
import axios from 'axios';
import {useRef, useState, useEffect} from 'react';

function Auth({ setShowModal }){
    // uhuhuiigu
    const [loggedIn, setLoggedIn] = useState(false);
    const [isRegistr, setIsRegistr] = useState(true);
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const emailHandler = (e) => setEmail(e.target.value);
    const loginHandler = (e) => setLogin(e.target.value);
    const passwordHandler = (e) => setPassword(e.target.value);
    const info = (e) => console.log(login, password, email);
    const registrHandle = () => {
        setIsRegistr(true)
        setLogin("")
        setPassword("")
        setEmail("")
    }
    const loginHandle = () => {
        setIsRegistr(false)
        setLogin("")
        setPassword("")
        setEmail("")
    }

    // const post = () => fetch("http://localhost:8000/api/v1/users/", {
    //     mode: 'no-cors',
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         username: login,
    //         email: email,
    //         password: password
    //     })})
        // .then(response => {return response.json()})
        // .catch(er => console.log(er))
    const post = () => axios.post("http://localhost:8000/api/v1/users/", {
        // mode: 'no-cors',
            username: login,
            email: email,
            password: password
        })
        .then(response => {console.log("Ok")})
        .catch(er => console.log(er))
    return(
        <>
            {!isRegistr ? (<>
            <div className='modalAuthLogin'>
                <div className='authDiv'>
                    <span className='auth' onClick={registrHandle}>Регистрация</span>
                    <svg className='krest' viewPort="0 0 12 12" onClick={() => setShowModal(false)}>
                        <line x1="1" y1="11"
                        x2="11" y2="1"
                        stroke-width="2"/>
                        <line x1="1" y1="1"
                        x2="11" y2="11"
                        stroke-width="2"/>
                    </svg>
                </div>
                <h1 className='authH1'>Вход</h1>
                <form className='form'>
                    <input type='text' placeholder='Email' value={email} onChange={emailHandler}/>
                    <input type='password' placeholder='Пароль' value={password} onChange={passwordHandler}/>
                    <button>Войти</button>
                </form>
            </div>
            <div className='back' onClick={() => setShowModal(false)}></div>
            </>):
            (<>
            <div className='modalAuthRegistr'>
                <div className='authDiv'>
                    <span className='auth' onClick={loginHandle}>Вход</span>
                    <svg className='krest' viewPort="0 0 12 12" onClick={() => setShowModal(false)}>
                        <line x1="1" y1="11"
                        x2="11" y2="1"
                        stroke-width="2"/>
                        <line x1="1" y1="1"
                        x2="11" y2="11"
                        stroke-width="2"/>
                    </svg>
                </div>
                <h1 className='authH1'>Регистрация</h1>
                <div className='form'>
                    <input type='text' placeholder='Логин' value={login} onChange={loginHandler}/>
                    <input type='text' placeholder='Email' value={email} onChange={emailHandler}/>
                    <input type='password' placeholder='Пароль' value={password} onChange={passwordHandler}/>
                    <button onClick={post}>Зарегистрироваться</button>
                </div>
            </div>
            <div className='back' onClick={() => setShowModal(false)}></div>
            </>) }
        </>
    );
}
    

export default Auth;