import React from "react";
import { connect } from "react-redux";
import { TF2 } from "../actions/types";
import ActivityTF2 from "./topics/ActivityTF2";

const VotingBooth = ({ section }) => {
  const render = () => {
    switch (section) {
      case TF2:
        return <ActivityTF2 />;
      default:
        return <p>No selection</p>;
    }
  };
  return <>{render()}</>;
};

const mapStateToProps = (state) => ({
  section: state.section.section,
});

export default connect(mapStateToProps, {})(VotingBooth);
