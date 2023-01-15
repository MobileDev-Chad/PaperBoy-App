import React from "react";
import { View, TouchableOpacity, Text, ScrollView, Image } from "react-native";
import CartItem from "../components/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../redux/cartSlice";
import { SIZES, COLORS, FONTS, images, icons } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
import { StripeProvider } from "@stripe/stripe-react-native";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Screen from "../components/Screen";
import Checkout from "../components/Checkout";
import routes from "../navigation/routes";

const CartScreen = ({ navigation }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Screen>
      <View
        style={{
          flex: 0.5,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ marginTop: SIZES.radius, marginLeft: SIZES.padding }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={icons.back}
              resizeMode="contain"
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            marginTop: SIZES.base,
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
          }}
        >
          Shopping Cart
        </Text>

        {/* Clear */}
        <View
          style={{
            justifyContent: "center",
            marginHorizontal: SIZES.padding,
          }}
        >
          <TouchableOpacity
            onPress={() => dispatch(clearCart(cart))}
            style={{
              width: 100,
              height: "55%",
            }}
          >
            <LinearGradient
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
              }}
              colors={["#56ab2f", "#a8e063"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={{ color: COLORS.white, ...FONTS.body3 }}>Clear</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      {/* Cart */}
      <View style={{ flex: 5 }}>
        {cart.length === 0 ? (
          <>
            <View
              style={{
                flex: 1,
                marginTop: SIZES.base,
                paddingHorizontal: SIZES.padding,
              }}
            >
              <Text> Your Cart is Empty</Text>
              <Image
                source={images.emptyCart}
                resizeMode="contain"
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.HOME_SCREEN)}
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: SIZES.padding * 2,
              }}
            >
              <Image
                source={icons.back}
                resizeMode="contain"
                style={{ width: "5%", height: "50%" }}
              />
              <Text style={{ ...FONTS.body3, color: COLORS.primary }}>
                Continue Shopping
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginTop: SIZES.base,
              paddingBottom: SIZES.radius,
              justifyContent: "center",
            }}
          >
            {cart.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  {...item}
                  renderRightActions={() => (
                    <ListItemDeleteAction
                      onPress={() => dispatch(removeItem(item.id))}
                    />
                  )}
                />
              );
            })}
          </ScrollView>
        )}
      </View>

      {/* Checkout */}
      <View style={{ flex: 0.75, paddingHorizontal: SIZES.padding }}>
        <StripeProvider publishableKey="pk_test_51MGtABIDqQ40Mwz4ZlaDqGcJJraIm44U6jLNQBUeBlsTQ6QZNHuQq9ji12Pp7tOPzniAcO2yLh9ljsw2EhcfZ6Vi00xlvkPtmP">
          <Checkout />
        </StripeProvider>
      </View>
    </Screen>
  );
};

export default CartScreen;
