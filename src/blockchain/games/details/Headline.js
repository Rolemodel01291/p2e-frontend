import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchGamesFilter } from "../gamesSlice";

const Headline = ({ name, rank, updated, status }) => {
  const dispatch = useDispatch();
  const history = useHistory();
   let sortList = {
    category: "All-Genre",
    platform: "All-Blockchain",
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
    let props = { ...sortList, [listName]: filter, page: 1  };
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
      <div>
        <div className="headline-dapp">
          <h1>{name}</h1>
          <div className="rank_container_float">
            <span className="total_rank rank">#{rank}</span>
          </div>
        </div>
      </div>

      <div className="updated">
        Updated: {updated}
        <span
         
          className={`
                                border-2
                                border-${
                                  status === "Alpha"
                                    ? "blue"
                                    : status === "Live"
                                    ? "green"
                                    : status === "Presale"
                                    ? "red"
                                    : status === "Beta"
                                    ? "yellow"
                                    : status === "Development"
                                    ? "purple"
                                    : ""
                                }-400
                                text-${
                                  status === "Alpha"
                                    ? "blue"
                                    : status === "Live"
                                    ? "green"
                                    : status === "Presale"
                                    ? "red"
                                    : status === "Beta"
                                    ? "yellow"
                                    : status === "Development"
                                    ? "purple"
                                    : ""
                                }-400
                                font-bold
                                rounded 
                                uppercase 
                                text-center
                                `}
          style={{
            fontSize: "10px",
          }}
          onClick={() => handleChange(status, "status")}
        >
          {" "}
          {status}
        </span>
      </div>
    </>
  );
};

export default Headline;
