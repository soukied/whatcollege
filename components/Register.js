import React, {Component} from "react";

export default class Register extends Component {
    componentDidMount() {
        if (typeof this.props.onTimeout == "function")
        setTimeout(()=>this.props.onTimeout(), typeof this.props.timeout == "number" ? this.props.timeout : 1000);
    }
    render() {
        return (
            <View>
                <Text>Ini Register</Text>
            </View>
        );
    }
}