import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { getProductById } from '../../store/utlis'
import ProductList from './ProductList'

const shopDetail = () => {
    const shop = useSelector(state => state.shops.shops[1])
    const products = useSelector(state => state.products.products)

 const productsFromProductsStore = shop.products ? shop.products.map((product)=> getProductById(product.id, products)) : []
    // const productsFromProductsStore= shop.products.map((product)=>products.find((_product)=>(product.id===_product.id)))
    return (
        <View>
             <Text style={{fontSize:25}} >{shop.name}</Text>
            <Image  style={styles.image} source={{uri:shop.image}}/>
             {/* <Text>{shopDetail}</Text> */}


            <ProductList products={productsFromProductsStore}/>

        </View>
    )
}

export default shopDetail;

const styles = StyleSheet.create({
    image:{
        width:150,
        height:150,
    },
})