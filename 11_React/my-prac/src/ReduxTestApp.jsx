import store from "./components/app/store";
import Counter from "./components/features/counter/Counter";
import Product from "./components/features/product/Product";
import {Provider} from "react-redux";
function ReduxTestApp() {
  return (
    <Provider store={store}>
      <Counter/>
      <Product/>
    </Provider>
  );
};

export default ReduxTestApp;