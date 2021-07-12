import { StatusBar } from "expo-status-bar";
import { Center } from "native-base";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SHOPLIST } from "../Navigation/types";
// import { HomeImg } from './styles';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Center flex={1}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: "https://i.pinimg.com/736x/3e/bf/51/3ebf51cc102175ca2c7f80dd784ac4fc.jpg",
          }}
        >
          <Text
            style={{
              fontSize: 40,
              color: "white",
              marginTop: 140,
              textAlign: "center",
              fontWeight: "bold",
              fontFamily:"serif"
            }}
          >
            Chocolate & beyond
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate(SHOPLIST)}
            style={{
              backgroundColor: "#219ebc",
              marginTop: 350,
              width: 180,
              height: 35,
              alignSelf: "center",
              borderRadius: 10,
              fontFamily:"serif"
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Shop list
            </Text>
          </TouchableOpacity>

          <StatusBar style="auto" />
        </ImageBackground>
      </Center>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "transparent"
    // headerTransparent:true
  },
  image: {
    width: 500,
    height: 800,
  },
});
