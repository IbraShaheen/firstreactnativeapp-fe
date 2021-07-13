import { Box, Button, Center } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { checkoutCart } from '../../store/action/cartActions'
import CartItem from './CartItem'

// import items from "./data"

const CartList = () => {
    const items = useSelector((state) => state.items.items);
    const products = useSelector((state) => state.products.products);
    const cartList = items
      .map((item) => ({
        ...products.find((product) => product.id === item.productId),
        quantity: item.quantity,
      }))
      .map((item) => <CartItem item={item} key={item.id} />);

      const dispatch = useDispatch()
      const handleCheckOut=() => {
          dispatch(checkoutCart())
          alert("Done successfully")
      }
    return (
        <Center flex={1} >
            <Box w="65%">
           
                     {cartList}
           <Button onPress={handleCheckOut}> Check out</Button>
            </Box>
        </Center>
    )
}

export default CartList

const styles = StyleSheet.create({})
