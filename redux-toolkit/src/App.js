import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Landing } from "pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;