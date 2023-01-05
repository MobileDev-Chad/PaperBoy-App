import React, { useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { WelcomeScreen,DetailsScreen } from "./src/screens";
import { COLORS, SIZES, icons } from "./src/constants";
import AppNavigator from "./src/navigation/AppNavigator";
import { navigationRef } from "./src/navigation/rootNavigation";

// import store and provider
import { persistor, store } from "./src/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./src/assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <NavigationContainer theme={theme} ref={navigationRef}>
            <Stack.Navigator initialRouteName={"Welcome"}>

              {/* Screens */}
              <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{
                  title: null,
                  headerStyle: {
                    backgroundColor: COLORS.white,
                  },
                  headerLeft: null,
                  headerRight: () => (
                    <TouchableOpacity
                      style={{ marginRight: SIZES.padding }}
                      onPress={() => console.log("Pressed")}
                    >
                      <Image
                        source={icons.bar}
                        resizeMode="contain"
                        style={{
                          width: 25,
                          height: 25,
                        }}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />

              {/* Tabs */}
             
              <Stack.Screen
                name="AppNavigator"
                component={AppNavigator}
                options={{
                  headerShown: false,
                  title: null,
                  headerStyle: {
                    backgroundColor: COLORS.white,
                  },
                  headerLeft: ({ onPress }) => (
                    <TouchableOpacity
                      style={{ marginLeft: SIZES.padding }}
                      onPress={onPress}
                    >
                      <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                          width: 25,
                          height: 25,
                        }}
                      />
                    </TouchableOpacity>
                  ),
                  headerRight: () => (
                    <TouchableOpacity
                      style={{ marginRight: SIZES.padding }}
                      onPress={() => console.log("Menu")}
                    >
                      <Image
                        source={icons.menu}
                        resizeMode="contain"
                        style={{
                          width: 25,
                          height: 25,
                        }}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({});
