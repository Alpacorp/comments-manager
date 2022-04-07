import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MenuTab from "./Components/Menu/MenuTab";

const App = () => {
  return (
    <BrowserRouter>
      <MenuTab />
    </BrowserRouter>
  );
};

export default App;
