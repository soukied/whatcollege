import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";

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
                    <Text>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis nunc, ultricies et interdum sit amet, aliquet eu ante. Nam id augue auctor, sollicitudin sapien maximus, sodales neque. Integer eget nisl quis enim mollis volutpat. Cras ac neque a nunc pulvinar convallis vitae mollis leo. Nulla ac nisl euismod, rhoncus sem eu, viverra magna. Sed cursus ullamcorper libero, congue sagittis neque tempus ac. Quisque elit ex, condimentum vitae tortor id, sodales lacinia lectus. Mauris ut velit sed dolor efficitur porttitor tempor a turpis. Nullam tortor neque, sollicitudin non nibh dictum, malesuada elementum sapien. Nam suscipit pellentesque malesuada. Etiam commodo felis in turpis dictum, porta sodales enim eleifend. Morbi vitae leo sem. Pellentesque porttitor est sit amet dignissim interdum. Donec enim massa, fermentum in interdum nec, fermentum in mauris. Aenean elementum purus vitae nibh commodo auctor.

                Maecenas sit amet gravida massa, ac dignissim ipsum. Pellentesque sagittis elementum lorem, eget pharetra nisl tristique quis. Integer condimentum mauris ipsum. Quisque sodales, nulla vitae gravida gravida, tortor arcu dictum nulla, et finibus nibh diam ac neque. Cras facilisis elit eu ex auctor molestie. Donec eget magna at sem sagittis auctor. Sed pretium, tellus sed efficitur sollicitudin, sem metus ultricies dolor, non vehicula dolor metus sed ante. Pellentesque posuere urna eros, vel cursus nisl fermentum vestibulum. Morbi ut elit faucibus, placerat eros vitae, vulputate enim. Nullam vel placerat leo. Nullam mattis nec tellus at commodo. Donec quis lectus dapibus ex dictum finibus. Curabitur in blandit urna. Curabitur id mi eleifend, placerat mauris a, consequat ex. Integer ut ultricies elit, at malesuada nibh.

                Proin blandit facilisis felis sit amet tempor. Nam sed pharetra libero. In vitae lectus eget dolor placerat interdum. Phasellus in cursus magna. Morbi auctor lobortis pellentesque. In tincidunt vel velit ut semper. Ut sed sodales ante. Nam aliquam risus eget pellentesque bibendum. Donec congue sem vitae erat posuere consectetur at vel lorem. Duis auctor, sapien at laoreet viverra, tellus lacus tincidunt dui, sed dignissim dui nibh a odio. Sed eleifend, nisl porttitor vulputate convallis, neque est facilisis lacus, nec auctor elit nisi ac orci. Aliquam eu leo et nisl condimentum fermentum ac sed augue. Aliquam lobortis dapibus tellus et dictum. Pellentesque neque mi, interdum non ultricies sit amet, lobortis at ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

                Praesent vulputate egestas laoreet. Donec scelerisque metus lacus, vitae tincidunt enim bibendum ut. Sed ut efficitur velit. Duis ut pellentesque quam, a ullamcorper tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas ut felis ultrices, commodo sem a, fermentum velit. Fusce tortor nunc, sodales quis dolor vel, elementum tempus nibh. Etiam in tellus tempus, vestibulum nibh at, consequat dui. Morbi nulla elit, rutrum sit amet dui at, mollis maximus tellus. Donec efficitur elit sapien. Sed tristique lobortis sagittis. Aliquam in porta orci, sit amet pharetra nibh. Mauris magna nulla, lacinia.
                    </Text>
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