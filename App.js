import React, {useState, Component} from 'react';
import Landing from "./components/Landing";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Quiz from "./components/Quiz";
import Register from "./components/Register";

export default function App() {
  
  let LANDING = <Landing timeout={()=>setScreen(LOGIN)}/>;
  let HOME = <Home quizPressed={()=>setScreen(QUIZ)} profilePressed={()=>setScreen(PROFILE)}/>;
  let LOGIN = <Login loginPressed={()=>setScreen(HOME)} registerPressed={()=>setScreen(REGISTER)}/>;
  let PROFILE = <Profile onTimeout={()=>setScreen(HOME)} timeout={5000}/>;
  let REGISTER = <Register/>;
  let QUIZ = <Quiz/>;
  
  let [screen, setScreen] = useState(LANDING);
  
  return (screen);
}
