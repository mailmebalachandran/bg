import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const Header = (props) => {
  let imageValue = [];
if(props.type === "india"){
  imageValue.push(<Image source={require('../../assets/India.png')} style={{height:50,width:50}} />)
}
else if(props.type === "world"){
  imageValue.push(<Image source={require('../../assets/globe.png')} style={{height:50,width:50}} />)
}

  return (
    <View style={{ flexDirection: "row", backgroundColor: "#fccaf3" }}>
      {/* <View
        style={{ flex: 0.2, marginTop: 10, marginLeft: 10, marginBottom: 10 }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.openDrawer();
          }}>
          <FontAwesome name="bars" size={32} />
        </TouchableOpacity>
      </View> */}
      <View style={{ flex: 0.8, justifyContent:'center',padding:20  }}>
        <Text>{props.headerDetails}</Text>
      </View>
      <View style={{ flex: 0.2, justifyContent:'center'  }}>
      <TouchableOpacity onPress={props.handler}>
        {imageValue}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
