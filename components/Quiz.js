import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Icon , Button} from "react-native-elements";
import RadioForm from "react-native-simple-radio-button";

function Question(props) {
    return(
        <View style={{
            backgroundColor:"rgba(0,0,0,0.05)",
            marginTop: 20,
            marginHorizontal: 20,
            padding: 20,
            borderRadius: 6
        }}>

    <Text style={{
        fontWeight: "bold",
        marginBottom: 5,
        fontSize: 15
    }}>{props.no}. {props.question}</Text>
        <RadioForm size={1} radio_props={props.options} buttonSize={5} initial={0} onPress={(value)=>typeof props.onPress == "function" ? props.onPress(value):0}/>
        </View>
    );
}

export default class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listPertanyaan: require("../assets/pertanyaan.json")
        }
        for (var val of this.state.listPertanyaan) {
            val.opsi = val.opsi.map(function(val, i){
                if (typeof val == "string")
                return {label:val,value:i}
                else return val;
            })
        }
    }

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
                {this.state.listPertanyaan.map((val,i)=><Question key={i+Math.random()} no={i+1} question={val.pertanyaan} options={val.opsi}/>)}
                <View style={{flexDirection:"row", marginTop: 20, marginLeft: 20}}>
                <Button title="Lihat hasil"/>
                </View>
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