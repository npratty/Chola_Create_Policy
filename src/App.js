import { Provider } from "react-redux";
import "./App.css";
import NewPolicyForm from "./components/NewPolicyForm";
import store from "./state/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NewPolicyForm />
      </div>
    </Provider>
  );
}

export default App;
