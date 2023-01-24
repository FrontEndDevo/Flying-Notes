import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavigationBar/Navbar";
import Homepage from "./pages/Homepage";
import NewNote from "./pages/NewNote";
import NotFoundPage from "./pages/NotFoundPage";
import AllNotes from "./pages/AllNotes";
import { useSelector } from "react-redux";
import Auth from "./components/Auth/Auth";

const App = () => {
  let isAuth = useSelector((state) => state.auth.isAuthenticated);
  // This check to keep the user login.
  if (localStorage.getItem("isAuth")) {
    isAuth = true;
  }
  return (
    <div>
      {!isAuth && (
        <Switch>
          <Route path="/Flying-Notes/" exact>
            <Redirect to="/Flying-Notes/authentication" />
          </Route>
          <Route path="/Flying-Notes/authentication">
            <Auth />
          </Route>  
        </Switch>
      )}
      {isAuth && (
        <div>
          <Navbar />
          <Switch>
            <Route path="/Flying-Notes/" exact>
              <Redirect to="/Flying-Notes/home" />
            </Route>
            <Route path="/Flying-Notes/authentication" exact>
              <Redirect to="/Flying-Notes/home" />
            </Route>
            <Route path="/Flying-Notes/home">
              <Homepage />
            </Route>
            <Route path="/Flying-Notes/my-notes" exact>
              <AllNotes />
            </Route>
            <Route path="/Flying-Notes/add-new-note">
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
