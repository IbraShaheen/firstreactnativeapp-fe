import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Center, Input } from "native-base";
import { useDispatch } from "react-redux";
import { signin } from "../../store/action/authActions";
import { SIGN_UP } from "../Navigation/types";



const Signin = ({ navigation }) => {
  const dispatch = useDispatch();
  // const navigation = useNavigation()
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = () => {
    dispatch(signin(user, navigation));
  };
  return (

    <View style={{ marginTop: 200 }}>
      <Input
        autoCapitalize="none"
        color="white"
        onChangeText={(username) => setUser({ ...user, username })}
        w="80%"
        mx={4}
        placeholder="enter username"
      />
      <Input
        secureTextEntry={true}
        autoCapitalize="none"
        color="white"
        onChangeText={(password) => setUser({ ...user, password })}
        w="80%"
        mx={4}
        placeholder="enter password"
      />
      <Center>

        <Button onPress={handleSubmit} style={{ width: 100,marginTop:10 }}>
          Sign in
        </Button>
      </Center>

      <Center>

        <Text
          onPress={() => navigation.navigate(SIGN_UP)}
          style={{ width: 300, marginTop:25, textAlign:"center" }}
        >
          Sign up if you don't have an account
        </Text>
      </Center>
    </View>

  );
};

export default Signin;

const styles = StyleSheet.create({});
