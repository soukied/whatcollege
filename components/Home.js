import React, {Component, useState} from "react";
import {View, Text, StyleSheet, Image, Button, TouchableHighlight, TextInput} from "react-native";
import {Icon} from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

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
            <Image style={{flex:1,width:"100%", justifyContent:"center"}} source={require("../assets/banner.png")}/>
        </View>
    );
}

function TextBox(props) {
    return(
        <View style={{margin: 17, padding: 10,borderRadius: 10, backgroundColor:"rgb(233,237,253)"}}>
            <Text style={{fontWeight:"bold"}}>Text</Text>
            <Text style={{fontSize:11, marginBottom: 10}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac interdum enim, eu euismod purus. Vivamus pulvinar, sapien sit amet eleifend posuere, lorem orci euismod quam, eu finibus metus diam at justo. Nam finibus risus eget dui ultricies molestie. Integer ipsum justo, ultricies non commodo vitae, egestas ac libero. Quisque nec diam in felis euismod sagittis eget eu ex. Donec eget justo urna. Integer mollis congue venenatis. Phasellus eu ex ultricies, ultricies ex in, sollicitudin sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </Text>
            <Button style={style.testButton} onPress={()=>props.quizPressed()} title={"Tes Minat"}/>
        </View>
    );
}

function Header(props) {
    let [value, setValue] = useState("");
    return (
        <View style={style.header}>
            <View style={{flexDirection:"row", justifyContent:"flex-start"}}>
                <TextInput style={{marginLeft: 5,backgroundColor:"white", width:130, borderRadius:50, paddingLeft: 10, marginRight:7}} placeholder="Cari"/>
                <TouchableOpacity onPress={()=>{}}>
                    <Icon style={{marginRight:10}} name="search"/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>props.profilePressed()}>
                <Icon name="account-circle" style={{marginRight:10}}/>
            </TouchableOpacity>
        </View>
    );
}

export default class Home extends Component {
    render() {
        return (
            <View style={{marginTop:25}}>
                <Header profilePressed={this.props.profilePressed}/>
                <ScrollView>
                    <ImageBanner/>
                    <TextBox quizPressed={this.props.quizPressed}/>
                </ScrollView>
            </View>
        );
    }
}

const style = StyleSheet.create({
    header: {
        marginHorizontal: 0,
        backgroundColor: "rgb(197, 208, 250)",
        paddingVertical: 10,
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems:"center",
        marginBottom: 20
    },
    input: {
        backgroundColor:"white"
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