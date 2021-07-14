import { useNavigation } from '@react-navigation/native'
import { Box, Button, Center } from 'native-base'
import React from 'react'
import { Alert } from 'react-native'
import { StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { checkoutCart } from '../../store/action/cartActions'
import { SIGN_IN } from '../Navigation/types'
import CartItem from './CartItem'

// import items from "./data"

const CartList = () => {
  const user = useSelector(state=> state.user.user)
    const items = useSelector((state) => state.items.items);
    const products = useSelector((state) => state.products.products);
    const cartList = items
      .map((item) => ({
        ...products.find((product) => product.id === item.productId),
        quantity: item.quantity,
      }))
      .map((item) => <CartItem item={item} key={item.id} />);

      const navigation = useNavigation();
      const dispatch = useDispatch()
      

      const createButtonAlert = () =>
      Alert.alert(
        "",
        "please signin before checking out",
        [
          {
            text: "signin",
            onPress: () => navigation.navigate(SIGN_IN) ,
            
          },
        ]
      );

      const handleCheckOut=() => {
        user? dispatch(checkoutCart()) :createButtonAlert();
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
