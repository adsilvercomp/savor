import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./sections/Main";
import Auth from "./components/Auth/LoginRegister";


const App = () => (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Route exact path="/" component={Auth} />
      </div>
    </Router>
  )
  
  
  
  export default App;