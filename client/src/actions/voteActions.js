import axios from "axios";
import { CAST_VOTE, VOTE_FAILED, VOTING_NOW } from "./types";

// Cast a vote for the selected item
export const castVote =
  (votePackage) =>
  (dispatch) => {
    dispatch({ type: VOTING_NOW });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      // baseURL: "http://localhost:5000",
    };

    // const body = JSON.stringify(votePackage.id);

    // console.log(`This is the body! ${body}`);

    axios
      .post("/api/data", votePackage, config)
      .then(() =>
        dispatch({
          type: CAST_VOTE,
        })
      )
      .catch(() =>
        dispatch({
          type: VOTE_FAILED,
        })
      );
  };
