import React, {Component, useState} from "react";
import {View, Text, StyleSheet, Image, Button, TouchableHighlight} from "react-native";
import {Input} from "react-native-elements";

const gambarSearch = require("../assets/search.svg");
const gambarProfile = require("../assets/profile.png")

function ImageBanner() {
    return (
        <View style={{
            borderColor: "black",
            borderWidth: 1,
            borderLeftWidth:0,
            borderRightWidth:0,
            marginHorizontal:0,
            height: 200,
            justifyContent:"center",
            alignItems: "center",
            marginTop: 20
        }}>
            <View><Text>Ini gambar</Text></View>
        </View>
    );
}

function TextBox(props) {
    return(
        <View style={{margin: 17, padding: 10,borderRadius: 10, backgroundColor:"rgb(233,237,253)"}}>
            <Text>Text</Text>
            <Text style={{fontSize:11, marginBottom: 10}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac interdum enim, eu euismod purus. Vivamus pulvinar, sapien sit amet eleifend posuere, lorem orci euismod quam, eu finibus metus diam at justo. Nam finibus risus eget dui ultricies molestie. Integer ipsum justo, ultricies non commodo vitae, egestas ac libero. Quisque nec diam in felis euismod sagittis eget eu ex. Donec eget justo urna. Integer mollis congue venenatis. Phasellus eu ex ultricies, ultricies ex in, sollicitudin sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </Text>
            <Button style={style.testButton} onPress={()=>props.quizPressed()} title={"Tes Minat"}/>
        </View>
    );
}

function Header(props) {
    let [value, setValue] = useState("");
    return (
        <View style={style.header}>
                <Input style={style.input} value={value} onChangeText={(val)=>setValue(val)} placeholder={"Cari"}/>
                <TouchableHighlight onPress={()=>console.log(value)}>
                    <Image style={{
                        height:20,
                        width:20,
                        marginTop:5,
                        marginLeft: 10
                    }} source={gambarSearch}/>
                </TouchableHighlight>
        <TouchableHighlight onPress={()=>props.profilePressed()}>
            <Image style={{
                height:25,
                width:25,
                marginTop:5,
                marginLeft: 10,
                justifyContent: "space-between"
            }} source={gambarProfile}/>
        </TouchableHighlight>
        </View>
    );
}

export default class Home extends Component {
    render() {
        return (
            <View style={{marginTop:25}}>
                <Header profilePressed={this.props.profilePressed}/>
                <ImageBanner/>
                <TextBox quizPressed={this.props.quizPressed}/>
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
        flexDirection:"row",
        justifyContent: "space-between",
        marginBottom: 20
    },
    input: {
        width: 120,
        height: 30,
        backgroundColor: "white",
        paddingHorizontal: 20,
        borderRadius: 20,
        display: "flex"
    },
    icon: {
        height:20,
        width:20,
        marginTop:5,
        marginLeft: 10
    },
    testButton:{
        
    }
});