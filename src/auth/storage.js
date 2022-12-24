import AsyncStorage from "@react-native-async-storage/async-storage";

const storeKey = "@storage_Key";
const storeData = async (value) => {
  try {
    await AsyncStorage.setItem(storeKey, value);
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem(storeKey);
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};

export default {
  storeData,
  getData,
};
