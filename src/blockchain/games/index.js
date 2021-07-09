import React, { useEffect,useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Games from "./GamesTable";
import Navbar from "./Navbar";
import Headbar from "./Headbar";
import List from "./List";
import Orderbar from "./Orderbar";
import Toppages from "./Toppages";
import BottomPagination from "./BottomPagination";
import { fetchGamesAsync, fetchGamesFilter } from "./gamesSlice";
// import Footer from './Footer';

// import { ThemeContext } from '../../App';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.backgroundColor,
    color: theme.palette.primary.main,
    padding: "1rem",
  },
}));

const Home = () => {
  // const changeMode = React.useContext(ThemeContext);
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  const sortList = useSelector((state)=>state.games.sortList);
 

  

  useEffect(() => {
    dispatch(fetchGamesAsync());
    if (location.state !== "filter") {
      dispatch(fetchGamesFilter(sortList));
    }
  }, [dispatch, location, sortList]);

  const [isMove, setIsMove] = useState(false);

  const handleClick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  const checkScrollTop = () => {
    if (!isMove && window.pageYOffset > 400){
      setIsMove(true)
    } else if (isMove && window.pageYOffset <= 400){
      setIsMove(false)
    }
  };

  window.addEventListener('scroll', checkScrollTop)

  const scrollButtonStyle = isMove ? { display: 'block' } : { display: 'none' };
 

  return (
    <div className={classes.container}> 
      <Toppages />
      <Navbar />
      <Headbar />
      <List />
      <Orderbar />
      <Games />
      <BottomPagination />
      <div className = "scroll-to-top" style={scrollButtonStyle}>
        <button className="btn" aria-label="ScrollToTop" onClick = {()=>handleClick()}>
          <span className="fa fa-chevron-up" data-nsfw-filter-status="swf"></span>
        </button>
      </div>
    </div>
  );
};

export default Home;
