import React from "react";
import { View } from "react-native";
const CardSection = ({ children }) => {
  return <View style={styles.containerStyle}>{children}</View>;
};

export { CardSection };

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative",
    elevation: 1
  }
};
