import { Provider } from "react-redux";
import { Blogpage } from "./pages";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Blogpage></Blogpage>
      </div>
    </Provider>
  );
}

export default App;
