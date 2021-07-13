import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { Center, Spinner } from "native-base";
import { SafeAreaView, ScrollView} from "react-native";
import { StyleSheet } from "react-native";


const ProductList = ({ products, navigation }) => {
  const productLoading = useSelector((state) => state.products.loading);
  // const products = useSelector(state => state.products.products)
  const productList = products.map((product) => (
    <ProductItem key={product.id} product={product} navigation={navigation} />
  ));
  return (
    <SafeAreaView >
      <ScrollView style={styles.scrollView}>
       
        {productLoading ?<Spinner/>: productList}
        
      </ScrollView>
    </SafeAreaView>

    // <View>{productLoading ?<Spinner/>: productList}</View>
  );
};

export default ProductList;

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
  