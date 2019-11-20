import React, { Component } from "react";
import NumericInput from "react-native-numeric-input";
import { observer } from "mobx-react";

// NativeBase Components
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Thumbnail,
  Left,
  Picker,
  Right,
  Text
} from "native-base";

// Style
import styles from "./styles";

//List
import coffeeStore from "../../store/coffeeStore";
import CartButton from "../Buttons/CartButton";

//Store
import cartStore from "../../store/cartStore";

class CoffeeDetail extends Component {
  state = {
    drink: "",
    option: "",
    quantity: 0
  };

  changeDrink = value =>
    this.setState({
      drink: value
    });

  changeOption = value =>
    this.setState({
      option: value
    });

  render() {
    const coffeeshopID = this.props.navigation.getParam("coffeeshopID");
    const coffeeshop = coffeeStore.coffeeShops.find(
      coffeeshop => coffeeshopID === coffeeshop.id
    );
    return (
      <Container>
        <Content>
          <Card transparent style={styles.card}>
            <CardItem>
              <Left>
                <Text style={styles.text}>
                  {coffeeshop.name + "\n"}
                  <Text note>{coffeeshop.location}</Text>
                </Text>
              </Left>
              <Body />
              <Right>
                <Thumbnail bordered source={{ uri: coffeeshop.img }} />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Picker
                  note
                  mode="dropdown"
                  style={styles.picker}
                  onValueChange={this.changeDrink}
                  placeholder="Choose Drink"
                  selectedValue={this.state.drink}
                >
                  <Picker.Item label="Cappuccino" value="Cappuccino" />
                  <Picker.Item label="Latte" value="Latte" />
                  <Picker.Item label="Espresso" value="Espresso" />
                </Picker>
              </Left>
              <Body>
                <Picker
                  note
                  mode="dropdown"
                  style={styles.picker}
                  onValueChange={this.changeOption}
                  placeholder="Choose Option"
                  selectedValue={this.state.option}
                >
                  <Picker.Item label="Small" value="Small" />
                  <Picker.Item label="Medium" value="Medium" />
                  <Picker.Item label="Large" value="Large" />
                </Picker>
              </Body>
            </CardItem>
            <CardItem>
              <Body style={styles.numericInput}>
                <NumericInput
                  value={this.state.value}
                  onChange={quantity => this.setState({ quantity })}
                  initValue={this.state.quantity}
                />
              </Body>

              <Right>
                <Button
                  full
                  style={styles.addButton}
                  onPress={() => {
                    cartStore.addItemToCart(this.state);
                    cartStore.sumCart(this.state);
                  }}
                >
                  <Text>Add</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

CoffeeDetail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("coffeeshopName"),
  headerRight: <CartButton />
});

export default observer(CoffeeDetail);
