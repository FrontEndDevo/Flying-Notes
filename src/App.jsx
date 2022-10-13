import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavigationBar/Navbar";
import Homepage from "./pages/Homepage";
import NewNote from "./pages/NewNote";
import NotFoundPage from "./pages/NotFoundPage";
import AllNotes from "./pages/AllNotes";
import { useSelector } from "react-redux";
import Auth from "./components/Auth/Auth";

const App = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      {!isAuth && <Auth />}
      {isAuth && (
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Homepage />
            </Route>
            <Route path="/my-notes" exact>
              <AllNotes />
            </Route>
            <Route path="/add-new-note">
              <NewNote />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      )}
    </div>
  );
};

export default App;
