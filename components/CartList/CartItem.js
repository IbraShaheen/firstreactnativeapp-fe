import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Box, Center, List } from "native-base";

const CartItem = ({ item }) => {
  return (
    <View>
      <List>
        <Center>
          <Text> {item.name}</Text>
          <Text>QTY: {item.quantity}</Text>
          <Text>total price: {item.price * item.quantity} JD</Text>
        </Center>
      </List>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
