import { Center } from 'native-base';
import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import { SHOPDETAIL } from '../Navigation/types';


const ShopItem = ({shop,navigation}) => {
  // const shop = props.shop;
  return (
    <Center>

       <View style={{marginTop:10}}>
      <Text
       onPress={() => {navigation.navigate(SHOPDETAIL,{shop: shop})}}
      style={{textAlign:"center",fontWeight:"bold", fontSize:20, fontFamily:"serif"}}>{shop.name}</Text>

      <Image  style={styles.image}
      source={{uri:shop.image}}/>
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