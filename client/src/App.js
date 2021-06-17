import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Categories from "./components/Categories";
import AllBusinesses from "./components/AllBusinesses";
import Businesses from "./components/Businesses";
import Business from "./components/Business";
import Parks from "./components/Parks";
import "./css/reset.css";

function App() {
  const [allBusinesses, setAllBusinesses] = useState([]);
  const [chosenCategories, setChosenCategories] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    fetch("/businesses")
      .then((res) => res.json())
      .then((data) => {
        // console.log("DATA", data.data);
        setAllBusinesses(data.data);
        setHasLoaded(true);
        // console.log("TEST", allBusinesses);
      });
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage
              allBusinesses={allBusinesses}
              setSelectedPlace={setSelectedPlace}
              hasLoaded={hasLoaded}
              // setHasLoaded={setHasLoaded}
            />
          </Route>
          <Route exact path="/categories">
            <Categories
              allBusinesses={allBusinesses}
              chosenCategories={chosenCategories}
              setChosenCategories={setChosenCategories}
              hasLoaded={hasLoaded}
              // setHasLoaded={setHasLoaded}
            />
          </Route>
          <Route exact path="/businesses">
            <AllBusinesses
              allBusinesses={allBusinesses}
              setSelectedPlace={setSelectedPlace}
              hasLoaded={hasLoaded}
              // setHasLoaded={setHasLoaded}
            />
          </Route>
          <Route exact path="/categories/businesses">
            <Businesses
              allBusinesses={allBusinesses}
              chosenCategories={chosenCategories}
              setChosenCategories={setChosenCategories}
              selectedPlace={selectedPlace}
              setSelectedPlace={setSelectedPlace}
              hasLoaded={hasLoaded}
              // setHasLoaded={setHasLoaded}
            />
          </Route>
          <Route exact path="/categories/businesses/business">
            <Business
              allBusinesses={allBusinesses}
              selectedPlace={selectedPlace}
              hasLoaded={hasLoaded}
              // setHasLoaded={setHasLoaded}
            />
          </Route>
          <Route exact path="/parks">
            <Parks
              allBusinesses={allBusinesses}
              setSelectedPlace={setSelectedPlace}
              hasLoaded={hasLoaded}
              // setHasLoaded={setHasLoaded}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
