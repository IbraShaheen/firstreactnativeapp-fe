import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Box, Center, List } from "native-base";

const CartItem = ({item}) => {
    return (
        <View>
            
            <List>
                <Center>
            <Text> {item.name} </Text>
            <Text> {item.price} JD</Text>
            <Text> {item.quantity} </Text>
            </Center>
            </List>

        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({})
