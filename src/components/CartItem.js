import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { View, Text, TouchableOpacity, Image } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import ListItemSeperator from "../components/ListItemSeperator";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { COLORS, FONTS, SIZES } from "../constants";

const CartItem = ({ id, key, portrait, name, price, icon, quantity, renderRightActions }) => {
  const dispatch = useDispatch();

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <View key={key}>
          <View style={{ marginHorizontal: SIZES.padding, width: "100%" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                marginVertical: SIZES.radius,
              }}
            >
              {/* Portrait */}
              <View>
                <Image
                  source={{ uri: portrait }}
                  resizeMode="contain"
                  style={{ width: 110, height: 110 }}
                />
              </View>

              <View>
                <Text style={{ ...FONTS.h3 }}>{name}</Text>
                <Text>
                  {quantity} X ${price} = ${(quantity * price).toFixed(2)}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      if (quantity === 1) {
                        dispatch(removeItem(id));
                        return;
                      }
                      dispatch(decrementQuantity(id));
                    }}
                  >
                    <FontAwesomeIcon
                      name="minus"
                      size={25}
                      color={COLORS.blue}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => dispatch(incrementQuantity(id))}
                  >
                    <FontAwesomeIcon
                      name="plus"
                      size={25}
                      color={COLORS.blue}
                    />
                  </TouchableOpacity>
                </View>

                <ListItemSeperator />
              </View>
            </View>
          </View>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default CartItem;
