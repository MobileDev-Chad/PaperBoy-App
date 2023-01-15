import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItem } from "../redux/cartSlice";
import routes from "../navigation/routes";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONTS, SIZES, icons } from "../constants";

const IconLabel = ({ icon, label }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={{ uri: icon }}
        resizeMode="contain"
        style={{ width: 50, height: 50 }}
      />
      <Text
        style={{ marginTop: SIZES.radius, color: COLORS.gray, ...FONTS.h3 }}
      >
        {label}
      </Text>
    </View>
  );
};

const DetailsScreen = ({ route, navigation }) => {
  const { character, id, name, portrait, price, icon } = route.params;

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const cartBtn = () => {
    if (cart.filter((item) => item.id === id).length > 0) {
      return true;
    }
    return false;
  };

  const cName = cartBtn(character)
    ? ["#ed213a", "#93291e"]
    : ["#46aeff", "#5884ff"];

  const handleCart = () => {
    cartBtn(character)
      ? dispatch(removeItem(id))
      : dispatch(addToCart({ id, name, portrait, price, icon }));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{ flex: 2 }}>
        <Image
          source={{ uri: character.images.portrait_2 }}
          resizeMode="contain"
          style={{ width: "100%", height: "80%" }}
        />

        <View
          style={[
            styles.shadow,
            {
              position: "absolute",
              bottom: "5%",
              left: "5%",
              right: "5%",
              borderRadius: 15,
              padding: SIZES.padding,
              backgroundColor: COLORS.white,
            },
          ]}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={styles.shadow}>
              <Image
                source={{ uri: character.emblem }}
                resizeMode="cover"
                style={{ width: 70, height: 70, borderRadius: 15 }}
              />
            </View>

            <View
              style={{
                marginHorizontal: SIZES.radius,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ ...FONTS.h3 }}>{character.name}</Text>
              <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
                {character.series.name}
              </Text>

              <Text style={{ color: COLORS.darkgreen, ...FONTS.body3 }}>
                ${character.series.price}
              </Text>
            </View>

            <View></View>
          </View>
        </View>

        {/* Header Buttons */}
        <View
          style={{
            position: "absolute",
            top: 40,
            left: 25,
            right: 25,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate(routes.HOME_SCREEN)}>
              <Image
                source={icons.back}
                resizeMode="contain"
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <TouchableOpacity onPress={console.log("Menu")}>
              <Image
                source={icons.menu}
                resizeMode="contain"
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Body */}
      <View style={{ flex: 1.5 }}>
        {/* Icons */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.base,
            paddingHorizontal: SIZES.padding * 2,
            justifyContent: "space-between",
          }}
        >
          <>
            <IconLabel icon={character.debut} label={character.alsoAppearsIn} />
            <IconLabel icon={character.id_logo} label={character.id} />
            <IconLabel
              icon={character.series.icon}
              label={character.series.name}
            />
          </>
        </View>
        {/* About */}
        <Text
          style={{
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
            ...FONTS.h2,
          }}
        >
          About
        </Text>
        <ScrollView>
          <View
            style={{
              paddingHorizontal: SIZES.padding,
            }}
          >
            <View>
              <Text
                style={{
                  marginTop: SIZES.radius,
                  color: COLORS.gray,
                  ...FONTS.body3,
                }}
              >
                {character.description}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Footer */}
      <View style={{ flex: 0.5, paddingHorizontal: SIZES.padding }}>
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
              <Text style={{ ...FONTS.h1 }}>${character.series.price}</Text>
            </View>

            <TouchableOpacity
              style={{
                width: 130,
                height: "80%",
                marginHorizontal: SIZES.radius,
              }}
              onPress={() => handleCart()}
            >
              <LinearGradient
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
                colors={cName}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
                  {cartBtn(character) ? "Remove" : "Add"}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default DetailsScreen;
