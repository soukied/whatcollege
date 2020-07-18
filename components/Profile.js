import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";

export default class Profile extends Component {
    componentDidMount() {
        if (typeof this.props.onTimeout == "function") 
            setTimeout(()=>this.props.onTimeout(), typeof this.props.timeout == "number" ? this.props.timeout : 1000);
    }
    render() {
        return(
            <View>
                <Text>Ini Profile</Text>
            </View>
        );
    }
}