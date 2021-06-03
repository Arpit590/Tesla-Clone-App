import React from 'react'
import "./SignUp.css";
import LanguageOutLinedIcon from "@material-ui/icons/LanguageOutlined";
import Logo from "./assets/Logo.png";
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import { auth } from './firebase';
import { login } from './userSlice';

function SignUp() {

    const [email, setEmail] = useState("")
    const [password, setPassword]=useState("");
    const [fName, setFName]=useState("");
    const [lName, setLName]=useState("");

    const dispatch = useDispatch();
    const history = useHistory();

    const signUpHandler=(e)=>{
        e.preventDefault();

        if(!fName){
            return alert("Please Enter Your First Name!")
        }
        if(!lName){
            return alert("Please Enter Your Last Name!")
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then(userAuth=>{
            userAuth.user.updateProfile({
                displayName:fName,
            }).then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:fName,
                }))
                history.push("/teslaaccount")
            })
        }).catch(error=>alert(error.message))
    }

    return (
        <div className="signup">
             <div className="signup__header">
                <div className="signup__logo">
                    <Link to="/">
                        <img className="signup__Image"
                        src={Logo} alt="Logo"/>
                    </Link>
                </div>
                <div className="signup__language">
                    <LanguageOutLinedIcon/>
                    <span>en-India</span>
                </div>
            </div>
            <div className="signup__info">
                <h1>Create Tesla Account</h1>
                <form className="signup__form">
                <label htmlFor="fName">
                    First Name
                    </label>
                    <input type="text"
                     id="fName"
                     value={fName} 
                     onChange={e=>setFName(e.target.value)}/>
                    <label htmlFor="lName">
                    Last Name
                    </label>
                    <input type="text"
                     id="lName"
                     value={lName} 
                     onChange={e=>setLName(e.target.value)}/>
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
                    <ButtonPrimary name="Create Account" type="submit" 
                    onClick={signUpHandler}/>
                </form>
                <div className="signup__divider">
                    <hr/>
                    <span>OR</span>
                    <hr/>
                </div>
                <Link to="/login">
                    <ButtonSecondary name="Sign In" />
                </Link>
            </div>
        </div>
    )
}

export default SignUp
