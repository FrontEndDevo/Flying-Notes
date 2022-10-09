import { Redirect, Route } from "react-router-dom";
import Navbar from "./components/Home/NavigationBar/Navbar";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Route path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Homepage />
      </Route>
    </div>
  );
};

export default App;
