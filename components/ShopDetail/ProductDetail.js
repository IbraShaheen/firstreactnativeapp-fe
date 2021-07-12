import { Center } from 'native-base';
import React from 'react'
import {  Text, Image, StyleSheet } from 'react-native'



const ProductDetail = ({ route}) => {

    const {product} = route.params;
    return (
        <Center>
            
            <Text style={{fontSize:35}}>{product.name}</Text>
            <Image style={styles.image} source={{uri: product.image}} alt={product.name}/>
            <Text style={{fontSize:20}}>{product.description}</Text>
            <Text style={{fontSize:20}}> {product.price} JD</Text>
        </Center>
    )
}

export default ProductDetail;

const styles = StyleSheet.create({
    image:{
        width:150,
        height:150,
    },
})




