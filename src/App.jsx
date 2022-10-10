import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavigationBar/Navbar";
import Homepage from "./pages/Homepage";
import NewNote from "./pages/NewNote";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Homepage />
        </Route>
        <Route path="/add-new-note" exact>
          <NewNote />
        </Route>
        <Route path="*" exact>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
