import React from "react";
import { Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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
  

const PlatForm = ({ platform }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    let sortList = {
      platform: "All-Blockchain",
      category: "All-Genre",
      device: "All-Device",
      status: "All-Status",
      nft: "All-NFT",
      f2p: "All-FreeToPlay",
      p2e: "All-PlayToEarn",
      page: 1,
      sort: 'total_rank',
      direction: 'asc',
      is_new : '',
      keyword : ''
    };

    const handleChange = (filter, listName) => {
      let props = { ...sortList, [listName]: filter, page: 1 };
      redirect(props);
      history.push({
        pathname: '/',
        state: "filter"
      });
    };
  
    const redirect = (props) => {
      dispatch(fetchGamesFilter(props));
    };

  return (
      <>
          {platform && platform.length > 0 && (JSON.parse(platform)).map((blockchain, index) => (
                      
                        <LightTooltip title={`${blockchain}`} placement="top">
                          <span
                            style={{
                              fontSize: "23px",
                            }}
                          >
                            <div
                              className={`lazy platformicon ${blockchain} loaded`}
                              data-loader="bgLoader"
                              onClick={() =>
                                handleChange(blockchain, "platform")
                              }
                            ></div>
                          </span>
                        </LightTooltip>
                      
            ))} 
      </>
    
    );
}

export default PlatForm;

