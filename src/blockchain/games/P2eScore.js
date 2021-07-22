import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Tooltip } from "@material-ui/core";
import { SelectionState } from "@devexpress/dx-react-chart";

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
      {console.log(data.total_score)}
      {data.total_score === "UNCHECKED" ? (
        <span className="unchecked">Unchecked</span>
      ) : (
        <div className="list-progress">
          {data.progresses.map((item) => (
            <LightTooltip title={item.tooltip} placement="top">
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
                style={{
                  width: `${item.value}%`,
                  borderTopLeftRadius: `${
                    item?.tooltip.split(":")[0] === "Play-To-Earn" ? "5px" : "0"
                  }`,
                  borderBottomLeftRadius: `${
                    item?.tooltip.split(":")[0] === "Play-To-Earn" ? "5px" : "0"
                  }`,
                }}
                aria-valuenow={item.value}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </LightTooltip>
          ))}
        </div>
      )}
      {data.total_score === "UNCHECKED" ? (
        <></>
      ) : (
        <span data-nsfw-filter-status="swf">{data.total_score}</span>
      )}
    </div>
  );
};

export default ScoreCard;
