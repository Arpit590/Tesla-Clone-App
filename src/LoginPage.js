import React, { useState } from 'react'
import "./LoginPage.css";
import Logo from "./assets/Logo.png";
import { Link, useHistory } from 'react-router-dom';
import LanguageOutLinedIcon from "@material-ui/icons/LanguageOutlined";
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import {auth} from "./firebase";
import { useDispatch } from 'react-redux';
import { login } from './userSlice';

function LoginPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword]=useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const signInHandler=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            dispatch(
                login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
            }))
            history.push("/teslaaccount");
        }).catch(error=>alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__header">
                <div className="login__logo">
                    <Link to="/">
                        <img className="login__Image"
                        src={Logo} alt="Logo"/>
                    </Link>
                </div>
                <div className="login__language">
                    <LanguageOutLinedIcon/>
                    <span>en-India</span>
                </div>
            </div>
            <div className="login__info">
                <h1>Sign In</h1>
                <form className="login__form">
                    <label htmlFor="email">
                    Email Address
                    </label>
                    <input type="email"
                     id="email"
                     value={email} 
                     onChange={e=>setEmail(e.target.value)}/>
                    <label htmlFor="password">
                    Password</label>
                    <input type="password"
                     value={password}
                    id="password"
                    onChange={e=>setPassword(e.target.value)}/>
                    <ButtonPrimary name="Sign In" type="submit" 
                    onClick={signInHandler}/>
                </form>
                <div className="login__divider">
                    <hr/>
                    <span>OR</span>
                    <hr/>
                </div>
                <Link to="/signup">
                    <ButtonSecondary name="Create Account"/>
                </Link>
            </div>
        </div>
    )
}

export default LoginPage
