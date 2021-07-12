import { Box, Center, List } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
import CartItem from './CartItem'

import items from "./data"

const CartList = () => {
    const item = items.map((item)=> <CartItem key={item.id} item={item} />)
    return (
        <Center flex={1} >
            <Box w="65%">
           
                     {item}
           
            </Box>
        </Center>
    )
}

export default CartList

const styles = StyleSheet.create({})
