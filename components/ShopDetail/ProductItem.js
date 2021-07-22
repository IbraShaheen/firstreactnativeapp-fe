import { Center } from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { PRODUCTDETAIL } from "../Navigation/types";
import NumericInput from "react-native-numeric-input";
import { TouchableOpacity } from "react-native";
import { addToCart } from "../../store/action/cartActions";
import { useDispatch } from "react-redux";


const ProductItem = ({ product, navigation }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()
  

  const handleAdd = () => {
    const newItem = { quantity, productId: product.id, total:quantity*product.price }
    dispatch(addToCart(newItem))
  };
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
          minValue={1}
          iconStyle={{ color: "white" }}
          rightButtonBackgroundColor="green"
          leftButtonBackgroundColor="red"
        />

        <TouchableOpacity
          onPress={handleAdd}
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
