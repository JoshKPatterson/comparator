import React, { useEffect } from "react";
import { itemList } from "../../utilities/data";
import { initBout, changeBout, replenishBout } from "../../actions/boutActions";
import { castVote } from "../../actions/voteActions";
import { connect } from "react-redux";
import { createBouts, nextBout, addNewBouts } from "../../customHooks";
import { Card } from "react-bootstrap";
import "./ActivityTF2.scss";
const ActivityTF2 = (props) => {
  useEffect(() => {
    setup();
    // setBouts(createBouts());
    // props.initBout();
  }, []);

  const config = {
    lengthOfQueue: 50,
    sizeOfDB: 162,
  };

  const setup = () => {
    const a = createBouts(config.lengthOfQueue, config.sizeOfDB);
    props.initBout(a);
    console.log(props);
    // replenish();
  };

  const replenish = () => {
    addNewBouts(
      props.bout.boutQueue,
      config.lengthOfQueue - 10,
      config.sizeOfDB,
      props.replenishBout
    );
  };

  if (props.bout.boutQueue.length < 10) {
    replenish();
  }

  const vote = (boutNum) => {
    let votePackage = {
      id: boutNum + 1,
      // class: itemList[boutNum].class,
      // slot: itemList[boutNum].slot,
    };
    props.castVote(votePackage);
    console.log(votePackage);
    nextBout(props.bout.boutQueue, props.changeBout);
  };

  return props.bout.boutCurrent ? (
    <div className="selection_display">
      <Card onClick={() => vote(props.bout.boutCurrent.bout1)}>
        <Card.Img
          variant="top"
          src={itemList[props.bout.boutCurrent.bout1].thumbnail}
        />
        <Card.Body>
          <Card.Title>{itemList[props.bout.boutCurrent.bout1].name}</Card.Title>
        </Card.Body>
      </Card>
      <Card onClick={() => vote(props.bout.boutCurrent.bout2)}>
        <Card.Img
          variant="top"
          src={itemList[props.bout.boutCurrent.bout2].thumbnail}
        />
        <Card.Body>
          <Card.Title>{itemList[props.bout.boutCurrent.bout2].name}</Card.Title>
        </Card.Body>
      </Card>
      {/* <p>
        {itemList[props.bout.boutCurrent.bout1].name} vs. {itemList[props.bout.boutCurrent.bout2].name}
      </p> */}
      {/* <button onClick={() => nextBout(props.bout.boutQueue, props.changeBout)}>
        Button
      </button> */}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

const mapStateToProps = (state) => ({
  bout: state.bout,
});

export default connect(mapStateToProps, {
  initBout,
  changeBout,
  replenishBout,
  castVote,
})(ActivityTF2);
