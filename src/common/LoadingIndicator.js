import React from "react";
import { View, Image, StyleSheet } from "react-native";

const LoadingIndicator = () => {
  return (
    <View style={styles.viewStyle}>
      <Image source={require("../../assets/loading.gif")} />
    </View>
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
