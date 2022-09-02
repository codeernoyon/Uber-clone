import { Provider } from "react-redux";
import HomeScreen from "./app/screens/HomeScreen";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}
