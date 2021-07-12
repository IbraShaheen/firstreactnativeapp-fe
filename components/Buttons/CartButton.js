import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";

import { Icon } from "react-native-elements";
import { CART_LIST } from "../Navigation/types";

const CartButton = () => {
    const navigation = useNavigation()
    
  return (
    <View>
      <Icon
        raised
        name="shopping-cart"
        type="entypo"
        color="#f50"
        onPress={() => navigation.navigate(CART_LIST)}
      />
    </View>
  );
};

export default CartButton;
