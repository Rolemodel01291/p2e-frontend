import React from "react";
import { TableCell, Tooltip } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#3f88c7",
    color: "#fff",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    textTransform: "capitalize",
  },
}))(Tooltip);

const Head = ({ columns }) => {
  return (
    <>
      <TableCell>#</TableCell>
      {columns &&
        columns.length > 0 &&
        columns.map((column) => {
          return (
            <TableCell
              key={column?.id}
              className={`whitespace-nowrap bold ${
                column.name === "Genre" ? "right" : ""
              }`}
            >
              {column?.name === "Name" ||
              column?.name === "Status" ||
              column?.name === "NFT" ||
              column?.name === "F2P" ||
              column?.name === "P2E" ||
              column?.name === "P2E Score" ||
              column?.name === "Social 24h" ? (
                <a
                  href="https://playtoearn.net/blockchaingames?sort=status_id&amp;direction=desc"
                  data-nsfw-filter-status="swf"
                >
                  {column?.name} <i class="fa fa-sort"></i>
                </a>
              ) : column?.name === "Social 7d" ? (
                <>
                  <LightTooltip
                    title="Social Score is a new metric that reflects the popularity of the crypto community in a certain game. A game with a higher Social Score has captured more interest in the social network. (updates every 24h)"
                    placement="top"
                  >
                    <i className="far fa-question-circle"></i>
                  </LightTooltip>
                  {column?.name}
                </>
              ) : (
                column?.name
              )}
            </TableCell>
          );
        })}
    </>
  );
};

export default Head;
