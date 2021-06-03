import './App.css';
import {Route, Switch, Redirect} from "react-router-dom";
import HomePage from "./HomePage";
import Header from './Header';
import { useEffect, useState } from 'react';
import Menu from './Menu';
import LoginPage from './LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './userSlice';
import SignUp from './SignUp';
import TeslaAccount from './TeslaAccount';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch= useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        // User is Signed In
        dispatch(login({
          email: userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName
        }))
      }else{
        //User is Signed Out
        dispatch(logout())
      }
    })
  },[dispatch])

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Header isOpen ={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
          {isMenuOpen && <Menu/>}
          <HomePage/>
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/teslaaccount"/>:<LoginPage/>}
        </Route>
        <Route path="/signup">
          <SignUp/>
        </Route>
        <Route path="/teslaaccount">
          {!user ? <Redirect to="/login"/>: (
          <>
          <TeslaAccount
           isMenuOpen={isMenuOpen}
           setIsMenuOpen={setIsMenuOpen}/>
           {isMenuOpen && <Menu/>}
           </>
           )}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
