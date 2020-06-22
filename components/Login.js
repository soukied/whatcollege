import React, {Component} from "react";
import {StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import Home from "./Home";

const IMAGE_SIZE = 200;

export default class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            screen: (<View style={styles.container}>
                <Image style={styles.logo} source={require("../assets/logo.png")}/>
                <Text style={styles.title}>WhatCollege</Text>
                <TextInput style={styles.input} placeholder={"Username"}/>
                <TextInput style={styles.input} placeholder={"Password"} textContentType={"password"}/>
                <Button onPress={()=>{
                    this.setState({screen:<Home/>});
                }} style={{width:70}} title="Login"/>
                <View>
                    <Text style={{fontWeight:"bold",paddingTop: 10,color:"blue", textDecorationLine:"underline", justifyContent:"flex-start"}}>
                        Daftar Baru
                    </Text>
                </View>
            </View>),

        };
    }
    render() {
        return this.state.screen;
    }
}
const styles = StyleSheet.create({
    login: {
        marginTop:10,
        width: 70,
        shadowColor:"black",
        shadowOffset: {width:0, height:4},
        elevation:8,
        shadowRadius: 3,
        shadowOpacity:0.3
    },
    input: {
        backgroundColor:"white",
        borderRadius: 10,
        margin: 10,
        paddingHorizontal: 40,
        paddingVertical: 5,
        shadowColor:"black",
        shadowOffset: {width:0, height:4},
        elevation:8,
        shadowRadius: 3,
        shadowOpacity:0.3,
        paddingLeft: 10
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(168,192,250)'
    }, logo: {
      width: IMAGE_SIZE,
      height: IMAGE_SIZE
    },
    title: {
      fontSize: 24,
      color:"white",
      fontWeight:"bold"
    }
    });