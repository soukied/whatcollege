import React, {Component} from "react";
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import {Input, Button} from "react-native-elements";

const IMAGE_SIZE = 150;

export default class Login extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:"center"}}>
                        <View style={styles.container}>
                        <Image style={styles.logo} source={require("../assets/logo_highres.png")}/>
                        <Text style={styles.title}>WhatCollege</Text>
                        <View style={{
                            width: 230
                        }}>
                            <Input inputContainerStyle={{borderBottomWidth:0}} inputStyle={styles.input} placeholder={"Username"}/>
                            <Input inputContainerStyle={{borderBottomWidth:0}} secureTextEntry={true} inputStyle={styles.input} placeholder={"Password"} textContentType={"password"}/>
                        </View>
                        <Button onPress={()=>this.props.loginPressed()} style={{width:70}} title="Login"/>
                        <TouchableHighlight onPress={()=>this.props.registerPressed()}>
                            <Text style={{marginLeft:-90,fontWeight:"bold",paddingTop: 10,color:"rgb(0,0,90)", textDecorationLine:"underline"}}>
                                Daftar Baru
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
        );
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
      backgroundColor: "white",
      borderBottomWidth: 0,
      paddingLeft: 10,
      color: "black",
      borderRadius: 10,
      fontSize: 14
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
      fontWeight:"bold",
      marginTop: -15,
      marginBottom: 15,
      letterSpacing: 1
    }
    });
