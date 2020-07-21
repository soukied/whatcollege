import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import {Icon} from "react-native-elements";

export default class Register extends Component {
    componentDidMount() {
        if (typeof this.props.onTimeout == "function")
        setTimeout(()=>this.props.onTimeout(), typeof this.props.timeout == "number" ? this.props.timeout : 1000);
    }
    render() {
        return (
            <View style={style.container}>
                <Text>Ini Register</Text>
                <Icon/>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex:1,
        marginTop: 20,
        backgroundColor: "aqua"
    }
});