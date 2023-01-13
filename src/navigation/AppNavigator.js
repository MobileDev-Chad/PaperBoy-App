import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import TabIcon from "../components/TabIcon";
import HomeNavigator from "./HomeNavigator";
import { ContactScreen, SearchScreen, Cart } from "../screens";
import { COLORS } from "../constants";

const Tab = createBottomTabNavigator();

export default AppNavigator = () => {
  const cart = useSelector((state) => state.cart);

  const getTotalQuantity = () => {
    let totalQuantity = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };

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
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={({ route }) => ({
          tabBarIcon: ({ focused, color }) => (
            <TabIcon name="home" color={color} focused={focused} />
          ),
          headerShown: false,
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";
            console.log(routeName);
            if (routeName === "Details") {
              return { display: "none" };
            }
            return;
          })(route),
        })}
      ></Tab.Screen>

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

      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              name="email"
              color={color}
              type="entypo"
              focused={focused}
            />
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
          tabBarBadge: getTotalQuantity() || 0,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
