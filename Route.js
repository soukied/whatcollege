import React from "react";
import {Router, Scene} from "react-native-router-flux";

function Home() {
    return (<Text>This is home</Text>);
}

function Login() {
    retunr (<Text>This is login</Text>);
}

function Routes() {
    return(
        <Router>
            <Scene key="root">
                <Scene key="home" title="Home" component={Home} initial={true}/>
                <Scene key="login" title="Login" component={Login}/>
            </Scene>
        </Router>
    );
}

export default Routes;