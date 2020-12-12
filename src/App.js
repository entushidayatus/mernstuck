import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
// import SampleNumber from "pages/sample/SampleInputNumber";
// import SampleDate from "pages/sample/SampleInputDate";
// import SampleBreadcrumb from "pages/sample/SampleBreadcrumb";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
        <Route path="/checkout" component={Checkout}></Route>
        {/* <Route path="/sample/number" component={SampleNumber}></Route> */}
        {/* <Route path="/sample/date" component={SampleDate}></Route> */}
        {/* <Route path="/sample/breadcrumb" component={SampleBreadcrumb}></Route> */}
      </Router>
    </div>
  );
}

export default App;
