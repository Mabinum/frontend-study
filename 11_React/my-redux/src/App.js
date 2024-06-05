import {Provider} from "react-redux"
import ReduxApp from "./components/ReduxApp";
import { store } from "./components/app/store";

function App() {
  return (
    <Provider store={store}>
      <ReduxApp/>
    </Provider>
  );
};

export default App;