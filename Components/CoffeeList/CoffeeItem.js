import React from "react";
import { withNavigation } from "react-navigation";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles";

const CoffeeItem = ({ coffeeshop, navigation }) => {
  const handlePress = () =>
    navigation.navigate("DetailScreen", {
      coffeeshopID: coffeeshop.id,
      coffeeshopName: coffeeshop.name
    });

  return (
    <ImageBackground
      source={{ uri: coffeeshop.background }}
      style={styles.background}
    >
      <View style={styles.overlay} />
      <ListItem button onPress={handlePress} style={styles.listitem}>
        <Card style={styles.transparent}>
          <CardItem style={styles.transparent}>
            <Left>
              <Thumbnail
                bordered
                source={{ uri: coffeeshop.img }}
                style={styles.thumbnail}
              />
              <Text style={styles.text}>{coffeeshop.name}</Text>
              <Text note style={styles.text}>
                {coffeeshop.distance}
              </Text>
            </Left>
          </CardItem>
        </Card>
      </ListItem>
    </ImageBackground>
  );
};

export default withNavigation(CoffeeItem);
