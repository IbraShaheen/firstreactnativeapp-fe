
import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem'
import { Spinner } from 'native-base'


const ProductList = ({products, navigation}) => {
    const productLoading= useSelector((state)=> state.products.loading)
    // const products = useSelector(state => state.products.products)
    const productList = products.map((product)=> <ProductItem key={product.id} product={product} navigation={navigation} />)
    return (
        <View>
           {productLoading ?<Spinner/>: productList}
           {/* <Text style={{fontSize:20, fontWeight:"bold"}}>(( Products list ))</Text> */}
        </View>
    )
}

export default ProductList