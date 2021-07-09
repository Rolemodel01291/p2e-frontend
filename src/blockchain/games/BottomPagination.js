import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector,useDispatch } from 'react-redux';

import {fetchGamesFilter} from "../games/gamesSlice";
const useStyles = makeStyles((theme) => ({
  container: {
    color: theme.palette.primary.main,
    textAlign: "center",
  },
}));


const BottomPagination = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const total_count = useSelector((state)=>state.games.total_count);
  // const page = useSelector((state)=>state.games.page);
  const sortList = useSelector((state) => state.games.sortList);

  const handleNext = () => { 
    dispatch(fetchGamesFilter({...sortList, page: sortList.page+1}));
  }

  const handlePrevious = () => {
    dispatch(fetchGamesFilter({...sortList, page: sortList.page-1}));
  }

  
  return (
    <div className="bottom-pagination">
      <ul className="pagination" role="navigation">
        <li className={sortList.page == 1?"page-item disabled": "page-item"} aria-disabled="true">
          <a href="#" className="page-link " data-nsfw-filter-status="swf"  rel="previous" onClick={()=> handlePrevious()}>
            « Previous 50
          </a>
        </li>
        <li class= {sortList.page == Math.floor(total_count / 50) + 1 ?"page-item disabled": "page-item"}>
          <a
            className="page-link"
            rel="next"
            href = "#"
            data-nsfw-filter-status="swf"
            onClick = {() => handleNext()}
          >
            Next 50 »
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BottomPagination;
