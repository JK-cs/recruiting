import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./header";
import Main from "./views/main";
import Apply from "./views/apply";
import ApplyClosed from "./views/applyClosed";
import Result from "./views/result";
import ShowResult from "./views/showResult";
import ResultManager from "./views/resultManager";
import Edit from "./views/edit";
import Manager from "./views/manager";
import Success from "./views/success";
import Closed from "./views/closed";
function App() {
  return (
    <div>
      <Header />
      <div>
        <Route path="/" component={Main} exact={true} />
        <Route path="/apply" component={Apply} />
        <Route path="/applyClosed" component={ApplyClosed} />
        <Route path="/result" component={Result} />
        <Route path="/showresult/:key" component={ShowResult} />
        <Route path="/manager" component={Manager} />
        <Route path="/success" component={Success} />
        <Route path="/closed" component={Closed} />
        <Route path="/result2001Manager/:key" component={ResultManager} />
        <Route path="/edit/:id" component={Edit} />
      </div>
    </div>
  );
}

export default App;
