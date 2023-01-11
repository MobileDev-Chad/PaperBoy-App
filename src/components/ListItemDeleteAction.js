import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "../constants";

export default ListItemDeleteAction = ({ onPress }) => {
  const { container } = styles;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={45}
          color={COLORS.red}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
