import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import { LinearGradient } from "expo-linear-gradient";

import { COLORS, FONTS, SIZES } from "../../constants";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <>
      <TouchableOpacity
        style={[
          styles.shadow,
          {
            marginTop: SIZES.padding * 2,
            width: "70%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
        onPress={handleSubmit}
      >
        <LinearGradient
          style={{
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
          }}
          colors={["#46aeff", "#5884ff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default SubmitButton;
