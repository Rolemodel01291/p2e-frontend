import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchGamesFilter } from "../gamesSlice";

const Categories = ({ categories }) => {
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

  const handleChange = (sort, listName) => {
    let props = { ...sortList, [listName]: sort, page: 1 };
    redirect(props);
    history.push({
      pathname: "/",
      state: "filter",
    });
  };

  const redirect = (props) => {
    dispatch(fetchGamesFilter(props));
  };

  return (
    <div className="dapp_categories">
      {categories &&
        categories.length > 0 &&
        JSON.parse(categories).map((category, index) => (
          <span
            key={index}
            onClick={() => handleChange(category, "category")}
          >
            {category}
          </span>
        ))}
    </div>
  );
};

export default Categories;
