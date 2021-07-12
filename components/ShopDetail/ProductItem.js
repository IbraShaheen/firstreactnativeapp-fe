import { Center } from 'native-base';
import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import { PRODUCTDETAIL } from '../Navigation/types';


const ProductItem = ({product, navigation}) => {
//    const product = props.product;

  return (
    
       <View>
           <Center>
      <Text onPress={() => navigation.navigate(PRODUCTDETAIL, {product:product})} >{product.name}</Text>
      {/* <Text>{product.price} JD</Text> */}
      <Image style={styles.img} source={{uri: product.image}}/>
      </Center>
      </View>
    
  );
};
export default ProductItem;


const styles = StyleSheet.create({
    img:{
        width:150,
        height:150,
    }
})