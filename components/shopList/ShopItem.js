import { Center } from 'native-base';
import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';


const ShopItem = (props) => {
  const shop = props.shop;
  return (
    <Center>

       <View>
      <Text style={{textAlign:"center"}}>{shop.name}</Text>

      <Image style={styles.image} source={{uri:shop.image}}/>
      </View>
    
    </Center>
  );
};
export default ShopItem;


const styles = StyleSheet.create({
    image:{
        width:150,
        height:150,
    }
})