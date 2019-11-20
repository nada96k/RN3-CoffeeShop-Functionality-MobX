import React, { Component } from "react";
import { observer } from "mobx-react";
// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

//store
import cartStore from "../../store/cartStore";

class CoffeeCart extends Component {
  render() {
    const cartItems = cartStore.items.map(item => (
      <CartItem item={item} key={`${item.drink} ${item.option}`} />
    ));

    return (
      <List>
        {cartItems}
        <Button full danger onPress={() => cartStore.checkoutCart()}>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

CoffeeCart.navigationOptions = {
  title: "Cart"
};

export default observer(CoffeeCart);
