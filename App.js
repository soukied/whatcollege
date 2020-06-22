import React, {useState, Component} from 'react';
import { Platform , View ,StyleSheet} from 'react-native';
import Landing from "./components/Landing";
import Login from "./components/Login";


const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});


const Navigate = {
  Landing: <Landing/>,
  Login: <Login/>
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: Navigate.Landing
    }
  }
  componentDidMount() {
    setTimeout(()=>{
      this.setState({screen: Navigate.Login});
    }, 2000)
  }
  render() {
    return (
    this.state.screen
    );
  }
}