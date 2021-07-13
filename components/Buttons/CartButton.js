import { useNavigation } from "@react-navigation/native";
import { Center } from "native-base";
import React from "react";
import { View, Text } from "react-native";

import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { fontSize } from "styled-system";
import { CART_LIST } from "../Navigation/types";

const CartButton = () => {
    const navigation = useNavigation()
    
    const items = useSelector(state => state.items.items)
    let total =0;

    items.forEach(element => {total += element.quantity
    });

  return (
    <View>
      <Center>
      <Text style={{
        color:"white",
        fontWeight:"bold",
        fontSize:18
      }}>({total})</Text>
      <Icon
        raised
        name="shopping-cart"
        type="entypo"
        color="#f50"
        onPress={() => navigation.navigate(CART_LIST)}
      />
      </Center>
    </View>
  );
};

export default CartButton;
