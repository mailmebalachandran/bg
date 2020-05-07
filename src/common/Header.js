import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const Header = (props) => {
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
      <View style={{ flex: 1, justifyContent:'center',padding:20  }}>
        <Text>{props.headerDetails}</Text>
      </View>
    </View>
  );
};

export default Header;
