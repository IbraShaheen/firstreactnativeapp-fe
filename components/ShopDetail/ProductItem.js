import { Center } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { PRODUCTDETAIL } from "../Navigation/types";

import NumericInput from "react-native-numeric-input";
import { TouchableOpacity } from "react-native";

const ProductItem = ({ product, navigation }) => {
  //    const product = props.product;

  const [quantity, setQuantity] = useState(1);

  return (
    <View>
      <Center>
        <Text
          onPress={() =>
            navigation.navigate(PRODUCTDETAIL, { product: product })
          }
        >
          {product.name}
        </Text>
        <Image style={styles.img} source={{ uri: product.image }} />
        <NumericInput
          //  onChange={(value) =>setQuantity(value)}
          initValue={quantity}
          Value={quantity}
          onChange={setQuantity}
          totalWidth={180}
          totalHeight={50}
          iconSize={25}
          step={1}
          valueType="real"
          rounded
          textColor="#B0228C"
          iconStyle={{ color: "white" }}
          rightButtonBackgroundColor="green"
          leftButtonBackgroundColor="red"
        />

        <TouchableOpacity
          onPress={() => alert(quantity)}
          style={{
            backgroundColor: "#023047",
            marginTop: 5,
            width: 100,
            height: 35,
            alignSelf: "center",
            borderRadius: 10,
            fontFamily: "serif",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Add
          </Text>
        </TouchableOpacity>
      </Center>
    </View>
  );
};
export default ProductItem;

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
  },
});
