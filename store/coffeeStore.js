import { decorate, observable, computed } from "mobx";
import axios from "axios";

class CoffeeStore {
  loading = true;

  coffeeShops = [];

  fetchAllCoffeeShops = async () => {
    try {
      const res = await axios.get("http://178.128.114.232/api/?format=json");
      const shops = res.data;
      this.coffeeShops = shops;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}

decorate(CoffeeStore, {
  coffeeShops: observable,
  loading: observable
});

const coffeeStore = new CoffeeStore();
coffeeStore.fetchAllCoffeeShops();
export default coffeeStore;
