import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { MenuTab } from "./Components/Menu/MenuTab";
import { Helmet } from "react-helmet";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Comments Management Page</title>
        <meta
          name="description"
          content="Gestiona los comentarios guardándolos y viéndolos de forma local"
        />
      </Helmet>
      <MenuTab />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
