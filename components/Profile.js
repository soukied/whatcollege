import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import Header from "./Header";
import {Icon} from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Profile extends Component {
    componentDidMount() {
        if (typeof this.props.onTimeout == "function") 
            setTimeout(()=>this.props.onTimeout(), typeof this.props.timeout == "number" ? this.props.timeout : 1000);
    }
    render() {
        return(
            <View style={style.container}>
                <Header color="rgb(197, 208, 250)" inner={
                    <TouchableOpacity style={{flexDirection:"row", alignItems:"center"}} onPress={()=>this.props.backPressed()}>
                        <Icon name="chevron-left"/>
                        <Text>Kembali</Text>
                    </TouchableOpacity>
                }/>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex:1,
        marginTop:25
    }
});