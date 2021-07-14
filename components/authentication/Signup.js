import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import {Button, Center, Input} from "native-base"
import { useDispatch } from 'react-redux'
import { signup } from '../../store/action/authActions'

const Signup = ({navigation}) => {
    const dispatch = useDispatch();

    const [user,setUser]=useState({
        username:"",
        password:"",
        email:"",
        firstName:"",
        lastName:""
    })
    const handleSubmit =()=>{
        dispatch(signup(user,navigation))
    }
    return (
        <View style={{marginTop:100}}>
            <Input

            autoCapitalize="none"
            onChangeText={(username)=>setUser({...user, username})}
      w="80%"
      mx={4}
      placeholder="username"

    />
       <Input
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={(password)=>setUser({...user, password})}
      w="80%"
      mx={4}
      placeholder="password"

    />
         <Input

           autoCapitalize="none"
           onChangeText={(email)=>setUser({...user, email})}
     w="80%"
     mx={4}
     placeholder="email"

   />
        <Input

           autoCapitalize="none"
           onChangeText={(firstName)=>setUser({...user, firstName})}
     w="80%"
     mx={4}
     placeholder="enter your first name"

   />
        <Input

           autoCapitalize="none"
           onChangeText={(lastName)=>setUser({...user, lastName})}
     w="80%"
     mx={4}
     placeholder="enter your last name"

   />
    <Center> <Button onPress={handleSubmit} style={{width:100}} >Submit</Button></Center>

        </View>
    )
}

export default Signup

const styles = StyleSheet.create({})