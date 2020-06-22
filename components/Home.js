import React, {Component} from "react";
import {View, Text, TextInput, StyleSheet, Image} from "react-native";

const gambarSearch = require("../assets/search.svg");

export default class Home extends Component {
    render() {
        return (
            <View>
                <View style={style.header}>
                    <TextInput style={style.input} placeholder={"Cari"}/>
                    <Image style={style.searchIcon} source={gambarSearch}/>    
                </View> 
            </View>
        );
    }
}

const style = StyleSheet.create({
    header: {
        marginHorizontal: 0,
        backgroundColor: "rgb(197, 208, 250)",
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex:1,
        flexDirection:"row"
    },
    input: {
        width: 120,
        height: 30,
        backgroundColor: "white",
        paddingHorizontal: 20,
        borderRadius: 20,
        display: "flex"
    },
    searchIcon: {
        height:20,
        width:20,
        marginTop:5,
        marginLeft: 10
    }
});