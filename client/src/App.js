import React, { useEffect } from "react";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { editSelection } from "./actions/sectionActions";
import VotingBooth from "./components/VotingBooth";
import { TF2 } from "./actions/types";

const App = (props) => {
  useEffect(() => {
    const a = localStorage.getItem("section");
    if (a) {
      props.editSelection(a);
    } else {
      props.editSelection(TF2);
      localStorage.setItem('section', TF2);
    }
  }, []);
  return (
    <div>
      <Navigation />
      <p>Hello</p>
      <p>Selection: {props.section}</p>
      <VotingBooth />
    </div>
  );
};

const mapStateToProps = (state) => ({
  section: state.section.section,
});

export default connect(mapStateToProps, { editSelection })(App);