import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import styles from "./styles";

const CategoriesItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: item.color }]}
      onPress={() => onSelected(item)}
    >
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={item.img} resizeMode="center" />
      </View>
    </TouchableOpacity>
  );
};

export default CategoriesItem;
