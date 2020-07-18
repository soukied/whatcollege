import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default class Quiz extends Component {

    render() {
        return (
            <View>
                <TouchableOpacity onPress={()=>{}}>
                    <Text style={style.Header}>Hello</Text>  
                </TouchableOpacity>
            </View>
        );
    }
}

let style = StyleSheet.create({
    Header : {
        color: "blue",
        fontSize: 18
    }
});