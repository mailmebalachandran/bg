import React from "react";
import { View, Image, StyleSheet } from "react-native";

const LoadingIndicator = (props) => {
  let data = [];
  if(!props.isReady){
    data.push(    <View style={styles.viewStyle}>
      <Image source={require("../../assets/loading.gif")} />
    </View>)
  }
  return (
    <>
    {data}
    </>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    margin: 20,
    padding: 20,
    alignItems: "center",
  },
});

export default LoadingIndicator;
