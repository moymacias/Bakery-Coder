import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { add_item } from "../store/actions/cart.action";

const DetailsScreen = () => {
  const dispatch = useDispatch();
  const bread = useSelector(state => state.products.selected);

  const handleAddItem = () => {
    dispatch(add_item(bread));
  };

  return (
    <View style={styles.container}>
      <Text>{bread.name}</Text>
      <Text>{bread.description}</Text>
      <Text>${bread.price}</Text>
      <Button title="Add to cart" onPress={handleAddItem} />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
