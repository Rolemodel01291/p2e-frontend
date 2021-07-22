import React, { useState } from "react";
import { TableCell, Tooltip } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import { fetchGamesFilter } from "../gamesSlice";
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
  const dispatch = useDispatch();
  const sortList = useSelector((state) => state.games.sortList);
  
  const [clicked, setClicked] = useState(false);
  const [selectedColumn,setSelectedColumn] = useState("");
  const sortItems = (sort) => {
    setClicked(true);
    setSelectedColumn(sort);
    let direction = '';
    if (sort === "P2E") sort = "p2e";
    if (sort === "P2E Score") sort = "p2e_score";
    if (sort === "Status") sort = "status";
    if (sort === "Social 24h") sort = "social_24h";
    if (sort === "Name") sort = "name";
    if (sort === "NFT") sort = "nft";
    if (sort === "F2P") sort = "f2p";
    if (sortList.direction === "desc") direction = "asc";
    if (sortList.direction === "asc") direction = "desc";
    // direction === "desc"? "asc": "desc";
    dispatch(
      fetchGamesFilter({  
        ...sortList,
        sort: sort,
        direction: direction,
        page: 1,
        keyword: ''
      })
    );
    
  };

  
  return (
    <>
      <TableCell>#</TableCell>
      {columns &&
        columns.length > 0 &&
        columns.map((column) => {
          return (
            <TableCell
              key={column?.id} style={{padding: column?.padding, textAlign: column?.textAlign, fontFamily: 'inherit'}}
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
                <span
                  
                  data-nsfw-filter-status="swf"
                  value={column?.name}
                  onClick={() => sortItems(column?.name)}
                >
                  {column?.name}{" "}
                  {selectedColumn !== column?.name && sortList.direction === "asc" && !clicked ? (
                    <i className="fa fa-sort"></i>
                  ) : selectedColumn === column?.name && sortList.direction === "asc" && clicked ? (
                    <i className="fa fa-sort-down"></i>
                  ) : selectedColumn === column?.name && sortList.direction === "desc" && clicked ? (
                    <i className="fa fa-sort-up"></i>
                  ) : (
                    <i className="fa fa-sort"></i>
                  )}
                </span>
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
