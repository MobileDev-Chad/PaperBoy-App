import React, { useCallback } from "react";
import { StyleSheet, View, } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from './src/auth/context';
import AppNavigator from "./src/navigation/AppNavigator";
import AuthNavigator from "./src/navigation/AuthNavigator";
import { navigationRef } from "./src/navigation/rootNavigation";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

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
    <AuthProvider value={{ currentUser }}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <PaperProvider theme={theme}>
          <NavigationContainer ref={navigationRef}>
            {currentUser ? <AppNavigator /> : <AuthNavigator />}
          </NavigationContainer>
        </PaperProvider>
      </View>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({});
