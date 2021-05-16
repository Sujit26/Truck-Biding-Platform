// import UnionGrid from "./components/unions";
// import UnionBooking from "./components/BookingComponent/union_booking";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/home";
import BookingScreen from "./screens/booking_screen";
import ConsignmentScreen from "./screens/consignment_screen";

import PrimarySearchAppBar from "./components/AppBar/appbar";
import ActiveConsignments from "./screens/TruckUnion/active_consignment"
import UnionHome from "./screens/TruckUnion/home";
import UnionDrivers from "./screens/TruckUnion/union_drivers";
import UnionConsignments from "./screens/TruckUnion/consignments";
import DriverFormScreen from "./screens/TruckUnion/driver_form_screen";
import TrackingScreen from "./screens/tracking_screen";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <PrimarySearchAppBar />
        </header>

        <Switch>
          {/* CONSINEE PATHH */}
          <Route path="/consginment">
            <ConsignmentScreen />
          </Route>
          <Route path="/bookingscreen/:id">
            <BookingScreen />
          </Route>

          {/* UNION PATHS */}
          <Route path="/union/home">
            <UnionHome />
          </Route>
          <Route path="/union/drivers/">
            <UnionDrivers />
          </Route>
          <Route path="/union/consignments/">
            <UnionConsignments />
          </Route>
          <Route path="/union/driver_form/new">
            <DriverFormScreen />
          </Route>
          <Route path="/active_consignment">
            <ActiveConsignments/>
          </Route>
          <Route path="/trackingscreen/:id">
            <TrackingScreen/>
          </Route>

          
          {/* <Route path="/driver_form/:id">
            <DriverFormScreen />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// TODO
// Correctly align all details on booking page of customer
//      make Union page
// DONE Union can add driver 
// DONE union can see driver list
//      union can see consingments
//       union can track cosgimnments

// make driver page
//      can see profile his
//      driver can see this consginmnets
// driver can accpet the consgimnet
