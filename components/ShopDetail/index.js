import { Center } from 'native-base'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { getProductById } from '../../store/utlis'
import ProductList from './ProductList'

const ShopDetail = ({route, navigation}) => {
   // const shop = useSelector(state => state.shops.shops[1])
    const products = useSelector(state => state.products.products)

    const {shop} = route.params;

 const productsFromProductsStore = shop.products ? shop.products.map((product)=> getProductById(product.id, products)) : []
    // const productsFromProductsStore= shop.products.map((product)=>products.find((_product)=>(product.id===_product.id)))
    return (
        <Center>
        <View>

          <Text style={{fontSize:25}} >{shop.name}</Text>
            <Image  style={styles.image} source={{uri:shop.image}}/>

            <ProductList products={productsFromProductsStore} navigation={navigation} />

        </View>
        </Center>
    )
}

export default ShopDetail;

const styles = StyleSheet.create({
    image:{
        width:150,
        height:150,
    },
})