import React, { useCallback } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { icons, COLORS, SIZES, FONTS } from "./src/constants";

// import store and provider
import { persistor, store } from "./src/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Cart, HomeScreen, WelcomeScreen } from "./src/screens";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createNativeStackNavigator();
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
          <NavigationContainer theme={theme}>
            <Stack.Navigator initialRouteName="Welcome">
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
                        source={icons.menu}
                        resizeMode="contain"
                        style={{ width: 25, height: 25 }}
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
