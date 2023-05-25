import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { useSelector } from "react-redux";

const DetailsScreen = () => {
  const bread = useSelector(state => state.products.selected);

  return (
    <View>
      <Text>{bread.name}</Text>
      <Text>{bread.description}</Text>
      <Text>${bread.price}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
