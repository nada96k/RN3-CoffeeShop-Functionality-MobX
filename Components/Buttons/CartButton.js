import React from "react";
import { withNavigation } from "react-navigation";
import { Icon, Text } from "native-base";
import { observer } from "mobx-react";
import cartStore from "../../store/cartStore";

const CartButton = ({ navigation }) => {
  return (
    <Text>
      {cartStore.counter}
      <Icon
        name="shoppingcart"
        type="AntDesign"
        onPress={() => navigation.navigate("CartScreen")}
      />
    </Text>
  );
};

export default withNavigation(observer(CartButton));
