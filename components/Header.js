import React, {Component} from "react";
import {View, StyleSheet} from "react-native";

export default function Header(props) {
    
    let bgColor = props.color ? "white": props.color

    let style = StyleSheet.create({
        header:{
            flexDirection: "row",
            alignItems:"center",
            padding:8,
            backgroundColor: props.color
        }
    });
    
    return(<View style={style.header}>
        {props.inner}
    </View>);
}