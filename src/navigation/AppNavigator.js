import { HomeScreen, DetailsScreen } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabIcon from "../components/TabIcon";
import { COLORS } from "../constants";

const Tab = createBottomTabNavigator();
// const GameStack = createNativeStackNavigator();
// const StatsStack = createNativeStackNavigator();

export default AppNavigator = (props) => {
  const tabOptions = {
    tabBarShowLabel: false,
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.gray,
    style: {
      height: 90,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.53,
      shadowRadius: 13.97,
      elevation: 21,
    },
  };

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={tabOptions}>
      <Tab.Screen
        name="Home"
        options={{
          // unmountOnBlur: true,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon name="home" color={color} focused={focused} />
          ),
          headerShown: false,
        }}
      >
        {() => (
          <StatsStack.Navigator screenOptions={{ headerShown: false }}>
            <StatsStack.Screen name="Home" component={HomeScreen} />
            <StatsStack.Screen name="Details" component={DetailsScreen} />
          </StatsStack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon name="search" color={color} focused={focused} />
          ),
          headerShown: false,
        }}
      />

      {/* <Tab.Screen
        name="Play"
        options={{
          unmountOnBlur: true,
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              name="game-controller"
              color={color}
              type="rounded"
              focused={focused}
            />
          ),
          headerShown: false,
        }}
      >
        {() => (
          <GameStack.Navigator screenOptions={{ headerShown: false }}>
            <GameStack.Screen name="GameLobby" component={GameLobby} />
            <GameStack.Screen name="StageSelect" component={StageSelect} />
            <GameStack.Screen name="GamePlay" component={GamePlay} />
          </GameStack.Navigator>
        )}
      </Tab.Screen> */}

      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon name="settings" color={color} type="entypo"focused={focused} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon name="shopping-cart" color={color} focused={focused} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
