import { StatusBar } from 'expo-status-bar';
import { Center } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
// import { HomeImg } from './styles';





export default function Home() {
  return (
    <View style={styles.container}>
   <Center flex={1}>
      <ImageBackground style={styles.image} source={{uri: "https://i.pinimg.com/736x/3e/bf/51/3ebf51cc102175ca2c7f80dd784ac4fc.jpg"}}>
      <Text style={{ fontSize: 50, color:"white",marginTop:100, textAlign:"center", fontWeight:"bold"}}>Home page</Text>
      {/* <HomeImg source={{uri: "https://images.theconversation.com/files/355094/original/file-20200827-16-1wdtphh.jpg?ixlib=rb-1.1.0&rect=51%2C14%2C4837%2C3239&q=45&auto=format&w=496&fit=clip"}}/> */}
           
          
            <TouchableOpacity 
        onPress={() => alert('Good morning')}
      
        style={{ backgroundColor: 'darkcyan', marginTop:350,  width:150, alignSelf:"center" , borderRadius:10 }}>
        <Text style={{ fontSize: 20, color: '#fff000', textAlign:"center" }}>test button</Text>
        
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:500,
    height:800
  }
});
