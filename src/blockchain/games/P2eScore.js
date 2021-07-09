import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Tooltip } from "@material-ui/core";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#3f88c7",
    color: "#fff",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    textTransform: "capitalize",
  },
}))(Tooltip);
const ScoreCard = ({ data }) => {
  return (
    <div className="score" style={{ width: "100px" }}>
      <div className="list-progress">
        {data.progresses.map((item) => (
          <LightTooltip
            title={item.tooltip}
            placement="top"
          >
            <div
              data-toggle="tooltip"
              data-placement="bottom"
              className={`${
                item?.tooltip.split(":")[0] === "Play-To-Earn"
                  ? "p2e_progress progress-bar"
                  : item?.tooltip.split(":")[0] === "Free-To-Play"
                  ? "f2p_progress progress-bar"
                  : item?.tooltip.split(":")[0] === "Pay-To-Win"
                  ? "p2w_progress progress-bar"
                  : "liq_progress progress-bar"
              }`}
              role="progressbar"
              style={{ width: `${item.value}%` }}
              aria-valuenow={item.value}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </LightTooltip>
        ))}
      </div>
      <span data-nsfw-filter-status="swf">{data.total_score}</span>
    </div>
  );
};

export default ScoreCard;
