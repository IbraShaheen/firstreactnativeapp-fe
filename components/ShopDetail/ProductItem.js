import { Center } from 'native-base';
import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';


const ProductItem = (props) => {
  const product = props.product;
  return (
    
       <View>
           <Center>
      <Text>{product.name}</Text>
      <Text>{product.price} JD</Text>
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