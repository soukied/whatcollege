import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";

import Home from "./Home";

export default class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {screen:(
            <View>
                <Text>This is number {this.props.number}</Text>
            </View>
        )}
    }
    componentDidMount() {
        setTimeout(()=>this.setState({screen:<Home/>}), 1000);
    }
    render() {
        return this.state.screen;
    }
}