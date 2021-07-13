import { Box, Center, List } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

// import items from "./data"

const CartList = () => {
    const items = useSelector(state=> state.items.items)
    // const item = items.map((item)=> <CartItem key={item.id} item={item} />)
    const products = useSelector((state) => state.products.products);

    const cartList = items
    .map((item) => ({
      ...products.find((product) => product.id === item.id),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.id} />);

    return (
        <Center flex={1} >
            <Box w="65%">
           
                     {cartList}
           
            </Box>
        </Center>
    )
}

export default CartList

const styles = StyleSheet.create({})