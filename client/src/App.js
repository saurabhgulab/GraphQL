import "./App.css";
import Navbar from "./components/Navbar";
import routes from "../src/routes.js";
import { useRoutes } from "react-router-dom";

function App() {
  const element = useRoutes(routes);
  return (
    <div className="App">
      <Navbar />
      {element}
    </div>
  );
}

export default App;
