import React from "react";
import Grid from "@material-ui/core/Grid";

const ScoreCard = () => {
  return (
    <div className="score" style={{width: '100px'}}>
      <div className="list-progress">
        <div
          data-toggle="tooltip"
          data-placement="bottom"
          title="Play-To-Earn: 4 out of 4"
          className="progress-bar p2e_progress"
          role="progressbar"
          style={{ width: "40%" }}
          aria-valuenow="40"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <div
          data-toggle="tooltip"
          data-placement="bottom"
          title="Free-To-Play: 2 out of 2"
          className="progress-bar f2p_progress"
          role="progressbar"
          style={{ width: "20%" }}
          aria-valuenow="20"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <div
          data-toggle="tooltip"
          data-placement="bottom"
          title="Pay-To-Win: 1 out of 2"
          className="progress-bar p2w_progress"
          role="progressbar"
          style={{ width: "10%" }}
          aria-valuenow="10"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <div
          data-toggle="tooltip"
          data-placement="bottom"
          title="Liquidity: 2 out of 2"
          className="progress-bar liq_progress"
          role="progressbar"
          style={{ width: "20%" }}
          aria-valuenow="20"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <span data-nsfw-filter-status="swf">9</span>
    </div>
  );
};

export default ScoreCard;
