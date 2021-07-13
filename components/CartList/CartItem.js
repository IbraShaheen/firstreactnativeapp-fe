import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Box, Center, List } from "native-base";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../store/action/cartActions";
import { Icon } from "react-native-elements/dist/icons/Icon";

const CartItem = ({ item }) => {
    //  console.log(item)
    const dispatch = useDispatch();
    const handleDelete= ()=>{
        dispatch(deleteFromCart(item.id))
    }
  return (
    <View>
      <List>
        <Center>
          <Text> {item.name}</Text>
          <Text>QTY: {item.quantity}</Text>
          <Text>total price: {item.price * item.quantity} JD</Text>
          <Icon
        onPress={handleDelete}
        name="shopping-basket-remove"
        type="fontisto"
        color="red"

        />
        </Center>
      </List>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
