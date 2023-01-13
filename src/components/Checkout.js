import { useStripe } from "@stripe/stripe-react-native";
import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Platform } from "react-native";
import { useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { SIZES, COLORS, FONTS } from "../constants";
import Total from "./Total";

const Checkout = () => {
  const stripe = useStripe();
  const name = "PosterBoy";

  const cart = useSelector((state) => state.cart);

  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  const payment = async () => {
    try {
      const finalAmount = parseFloat(getTotalPrice());
      if (finalAmount < 1)
        return Alert.alert("Add a Poster to the Shopping Cart!");
      const response = await fetch(
        Platform.OS === "android"
          ? "http://192.168.2.11:5000/poster"
          : "http://localhost:5000/poster",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: finalAmount, name }),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        return Alert.alert(data.message);
      }
      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: data.clientSecret,
        merchantDisplayName: "Merchant Name",
      });
      if (initSheet.error) {
        console.error(initSheet.error);
        return Alert.alert(initSheet.error.message);
      }
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret: data.clientSecret,
      });
      if (presentSheet.error) {
        console.error(presentSheet.error);
        return null;
      }
      Alert.alert("Purchase successfully! Thank you for your order.");
    } catch (err) {
      console.error(err);
      Alert.alert("Payment failed!");
    }
  };

  return (
    <View>
      <LinearGradient
        style={{ height: 70, width: "100%", borderRadius: 15 }}
        colors={["#edf0fc", "#d6dfff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              flex: 1,
              marginHorizontal: SIZES.padding,
              justifyContent: "center",
            }}
          >
            <Text style={{ ...FONTS.body3 }}>
              <Total quantity={0} />
            </Text>
          </View>

          <TouchableOpacity
            style={{
              width: 130,
              height: "60%",
              marginHorizontal: SIZES.radius,
            }}
            onPress={() => payment()}
          >
            <LinearGradient
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
              colors={["#8E2DE2", "#4A00E0"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Checkout</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Checkout;
