import products from "@/assets/data/products";
import EditScreenInfo from "@/src/components/EditScreenInfo";
import Colors from "@/src/constants/Colors";
import { StyleSheet, View, Text, Image } from "react-native";

export default function TabOneScreen() {
  const pizza = products[0]
  return (
    <View style={styles.container}>
      <Image source={{ uri: pizza.image}} style={styles.img} />
      <Text style={styles.title}>{pizza.name}</Text>
      <Text style={styles.price}>R$ {pizza.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    margin: 10
  },
  img: {
    width: '100%',
    aspectRatio: 1
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold'
  },
});
