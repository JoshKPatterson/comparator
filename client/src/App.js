import React, { useEffect } from "react";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { editSelection } from "./actions/sectionActions";
import VotingBooth from "./components/VotingBooth";
import { TF2 } from "./actions/types";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Stats from "./components/Stats";
import About from "./components/About";

const App = (props) => {
  useEffect(() => {
    const a = localStorage.getItem("section");
    if (a) {
      props.editSelection(a);
    } else {
      props.editSelection(TF2);
      localStorage.setItem("section", TF2);
    }
  }, []);
  return (
    <div>
      <Router>
        <Navigation />
        {/* <p>Selection: {props.section}</p> */}
        <Container>
          <Switch>
            <Route exact path="/" component={VotingBooth} />
            <Route path="/stats" component={Stats} />
            <Route path="/about" component={About} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => ({
  section: state.section.section,
});

export default connect(mapStateToProps, { editSelection })(App);
