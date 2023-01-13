import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useFormikContext } from "formik";

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
            backgroundColor: COLORS.green
          },
        ]}
        onPress={handleSubmit}
      >
        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{title}</Text>
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
