import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import SavedPage from "./pages/SavedPage";
import Navbar from "./components/Navbar";

// componentDidMount () {
//   // stuff
// }

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/Search" component={SearchPage} />
          <Route exact path="/Saved" component={SavedPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
