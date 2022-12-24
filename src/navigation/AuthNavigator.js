import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  WelcomeScreen,
} from '../screens';

const Stack = createStackNavigator();

export default AuthNavigator = () => {
  return (
    <Stack.Navigator>
    {/* Sreens */}
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
  );
};
