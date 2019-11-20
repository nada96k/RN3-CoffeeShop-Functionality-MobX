import { decorate, observable } from "mobx";

class CartStore {
  items = [];
  counter = 0;

  addItemToCart = item => {
    const existingItem = this.items.find(
      obj => obj.drink === item.drink && obj.option === item.option
    );
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push(item);
    }
  };

  removeItemFromCart = item => {
    this.items.remove(item);
    this.counter -= item.quantity;
  };

  checkoutCart = () => {
    this.items.length = 0;
    this.counter = 0;
    alert("Thank you for using our app :D !");
  };

  sumCart = currentItem => {
    this.counter += currentItem.quantity;
  };
}

decorate(CartStore, {
  items: observable,
  counter: observable
});

const cartStore = new CartStore();

export default cartStore;
