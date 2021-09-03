import React, { useEffect } from "react";
import { itemList } from "../../utilities/data";
import { initBout, changeBout, replenishBout } from "../../actions/boutActions";
import { connect } from "react-redux";
import { createBouts, nextBout, addNewBouts } from "../../customHooks";

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

  return props.bout.boutCurrent ? (
    <>
      <p>
        {props.bout.boutCurrent.bout1} vs. {props.bout.boutCurrent.bout2}
      </p>
      {/* <button onClick={() => console.log(props.bout)}>Button</button> */}
      <button onClick={() => nextBout(props.bout.boutQueue, props.changeBout)}>
        Button
      </button>
    </>
  ) : (
    <p>Loading...</p>
  );
};

const mapStateToProps = (state) => ({
  bout: state.bout,
});

export default connect(mapStateToProps, { initBout, changeBout, replenishBout })(
  ActivityTF2
);
