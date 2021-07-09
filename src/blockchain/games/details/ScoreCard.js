import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { Tooltip } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#3f88c7",
    color: "#fff",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    textTransform: "capitalize",
  },
}))(Tooltip);

const ScoreCard = ({ p2e_score, p2e_score_data, updated_at }) => {
  return (
    <div className="scorecard">
      <Grid container>
        <Grid item xl={5}>
          <div>
            PlayToEarn Score
            <LightTooltip
              title="The PlayToEarn Score represents the game tests & research experiences of the playtoearn.net team up to a certain date. The P2E Score does not contain any gaming fun or anything other than PlayToEarn-relevant aspects."
              placement="top"
            >
              <i className="far fa-question-circle"></i>
            </LightTooltip>
          </div>
          <div>
            {p2e_score &&
              p2e_score.length > 0 &&
              JSON.parse(p2e_score).total_score}
          </div>
          <div className="score">
            <div className="progress">
              {p2e_score &&
                p2e_score.length > 0 &&
                JSON.parse(p2e_score).progresses.map((item) => (
                  <LightTooltip
                    title={`${
                      item?.tooltip.split(":")[0] === "Play-To-Earn"
                        ? "p2e_progress progress-bar"
                        : item?.tooltip.split(":")[0] === "Free-To-Play"
                        ? "f2p_progress progress-bar"
                        : item?.tooltip.split(":")[0] === "Pay-To-Win"
                        ? "p2w_progress progress-bar"
                        : "liq_progress progress-bar"
                    }`}
                    placement="top"
                  >
                    <div
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title={item.tooltip}
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
          </div>
        </Grid>
        <Grid item xl={7}>
          <table>
            <thead>
              <tr className="scorecardheader">
                {p2e_score_data &&
                  p2e_score_data.length > 0 &&
                  JSON.parse(p2e_score_data).map((item) => (
                    <th>
                      <span>{item.name}</span>
                      {item.name === "TOTAL" ? (
                        <></>
                      ) : (
                        <LightTooltip
                          title={ReactHtmlParser(item.tooltip)}
                          placement="top"
                        >
                          <i className="far fa-question-circle"></i>
                        </LightTooltip>
                      )}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {p2e_score_data &&
                  p2e_score_data.length > 0 &&
                  JSON.parse(p2e_score_data).map((item) => (
                    <td>{item.value}</td>
                  ))}
              </tr>
            </tbody>
          </table>
        </Grid>
        <span className="scorecard_updatedate">{updated_at}</span>
      </Grid>
    </div>
  );
};

export default ScoreCard;
