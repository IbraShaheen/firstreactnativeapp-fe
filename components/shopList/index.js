import React from "react";
import { useSelector } from "react-redux";
import ShopItem from "./ShopItem";
import { Center, Spinner } from "native-base";
import { ScrollView, StyleSheet, SafeAreaView } from "react-native";

const ShopList = ({ navigation }) => {
  const shopLoading = useSelector((state) => state.shops.loading);
  const shops = useSelector((state) => state.shops.shops);
  const shopList = shops.map((shop) => (
    <ShopItem key={shop.id} shop={shop} navigation={navigation} />
  ));
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Center flex={1}>
          {shopLoading ? <Spinner color="blue" /> : shopList}
        </Center>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   paddingTop: StatusBar.currentHeight,
    paddingTop: 25,
    marginTop: 20,
    marginBottom: 20,
  },
  scrollView: {
    //   backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
