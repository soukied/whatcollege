import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import RadioForm from "react-native-simple-radio-button";

function Question(props) {
    return(
        <View style={{
            
        }}>

    <Text style={{
        fontWeight: "bold"
    }}>{props.no}. {props.question}</Text>
        <RadioForm size={1} radio_props={props.options} buttonSize={5} initial={0} onPress={(value)=>typeof props.onPress == "function" ? props.onPress(value):0}/>
        </View>
    );
}

export default class Quiz extends Component {

    render() {
        return (
            <View>
                <View style={style.Header}>
                    <TouchableOpacity style={{flexDirection:"row", alignItems:"center"}} onPress={()=>this.props.backPressed()}>
                    <Icon name="chevron-left"/>
        <Text>Kembali {this.props.label}</Text>  
                    </TouchableOpacity>
                </View>
                <ScrollView>
                   <Question no={1} question="Apakah anda yakin ingin terus bersama?" options={[{label:"Hantu", value:0},{label:"Hantukan", value:1}, {label:"Jiran", value:2}]}/>
                </ScrollView>
            </View>
        );
    }
}

let style = StyleSheet.create({
    Header : {
        backgroundColor: "rgb(197, 208, 250)",
        marginTop:25,
        flexDirection:"row",
        alignItems:"center",
        height:35,
    }
});