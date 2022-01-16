import React, { Component } from "react";
import { View, WebView} from "react-native";

export default class Browser extends Component{
render(){
return(

    <View>
       <WebView source={{ uri: this.props.navigation.state.params.url}} 
       style ={{flex:0.75}}
       />

    </View>
)

}


}