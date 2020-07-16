import React, {Component, useState} from "react";
import {View, Text, TextInput, StyleSheet, Image, Button, TouchableOpacity} from "react-native";
import Quiz from "./Quiz";

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

function TextBox() {
    return(
        <View style={{margin: 17, padding: 10,borderRadius: 10, backgroundColor:"rgb(233,237,253)"}}>
            <Text>Text</Text>
            <Text style={{fontSize:11, marginBottom: 10}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac interdum enim, eu euismod purus. Vivamus pulvinar, sapien sit amet eleifend posuere, lorem orci euismod quam, eu finibus metus diam at justo. Nam finibus risus eget dui ultricies molestie. Integer ipsum justo, ultricies non commodo vitae, egestas ac libero. Quisque nec diam in felis euismod sagittis eget eu ex. Donec eget justo urna. Integer mollis congue venenatis. Phasellus eu ex ultricies, ultricies ex in, sollicitudin sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </Text>
            <Button style={style.testButton} onPress={()=>{}} title={"Tes Minat"}/>
        </View>
    );
}

function Header(props) {
    let [value, setValue] = useState("");
    return (<View style={style.header}>
        <View style={{flexDirection:"row"}}>
            <TextInput style={style.input} value={value} onChangeText={(val)=>setValue(val)} placeholder={"Cari"}/>
            <TouchableOpacity onPress={()=>console.log(value)}>
                <Image style={{
                    height:20,
                    width:20,
                    marginTop:5,
                    marginLeft: 10
                }} source={gambarSearch}/>
            </TouchableOpacity>
     </View>
     <TouchableOpacity onPress={props.toProfile}>
        <Image style={{
            height:25,
            width:25,
            marginTop:5,
            marginLeft: 10,
            justifyContent: "space-between"
            
        }} source={gambarProfile}/>
     </TouchableOpacity>
    </View>);
}

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            screen: <View>
            <Header toProfile={()=>this.setState({screen:<Quiz number="5"/>})}/>
            <ImageBanner/>
            <TextBox/>
        </View>
        }
    }
    

    render() {
        return (
            this.state.screen
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