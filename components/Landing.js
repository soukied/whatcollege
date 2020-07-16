import * as React from "react";
import {StyleSheet, Text, View, Image } from 'react-native';

const IMAGE_SIZE = 150;

export default class Landing extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require("../assets/logo_highres.png")}/>
                <Text style={styles.title}>WhatCollege</Text>
            </View>
            );
    }
}

const styles = StyleSheet.create({
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
      color: "white",
      fontWeight: "bold"
    }
    });
