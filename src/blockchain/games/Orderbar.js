import React, { useState } from "react";
import _ from "lodash";
import Dropdown from "./orderbar/dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchGamesFilter,
} from "./gamesSlice";
import {
  category,
  platform,
  device,
  status,
  nft,
  f2p,
  p2e,
  categoryMatch,
  nftMatch,
  f2pMatch,
  p2eMatch
} from "../../data/orderList";

import "./styles/Games.css";

const Orderbar = () => {
  const dispatch = useDispatch();
  const sortList = useSelector((state) => state.games.sortList);

  const [searchQuery, setSearchQuery] = useState("");

  const { page, sort, direction, is_new, keyword, ...selectedValueList } =
    sortList;

  const dropdownTypes = [
    { list: category, listName: "category" },
    { list: platform, listName: "platform" },
    { list: device, listName: "device" },
    { list: status, listName: "status" },
    { list: nft, listName: "nft" },
    { list: f2p, listName: "f2p" },
    { list: p2e, listName: "p2e" },
  ];
  const [isNew, setIsNew] = useState(false);

  const filterNew = (isNew) => {
    setIsNew(isNew);
    //is_new state
    if (isNew) {
      let props = {
        ...sortList,
        is_new: 1,
        platform: "All-Blockchain",
        category: "All-Genre",
        status: "All-Status",
        device: "All-Device",
        nft: "All-NFT",
        f2p: "All-FreeToPlay",
        p2e: "All-PlayToEarn",
        page: 1,
        sort: "total_rank",
        direction: "asc",
        keyword: "",
      };
      dispatch(fetchGamesFilter(props));
    //cancel is_new state
    } else {
      let props = {
        ...sortList,
        is_new: "",
        platform: "All-Blockchain",
        category: "All-Genre",
        status: "All-Status",
        device: "All-Device",
        nft: "All-NFT",
        f2p: "All-FreeToPlay",
        p2e: "All-PlayToEarn",
        page: 1,
        sort: "total_rank",
        direction: "asc",
        keyword: "",
      };
      dispatch(fetchGamesFilter(props));
    }
  };

  const searchItem = () => {
    let props = {
      ...sortList,
      is_new: "",
      platform: "All-Blockchain",
      category: "All-Genre",
      status: "All-Status",
      device: "All-Device",
      nft: "All-NFT",
      f2p: "All-FreeToPlay",
      p2e: "All-PlayToEarn",
      page: 1,
      sort: "total_rank",
      direction: "asc",
      keyword: searchQuery
    };
    dispatch(fetchGamesFilter(props));
    setSearchQuery("");
  }

  const redirect = (props) => {
    dispatch(fetchGamesFilter({ ...props, page: 1 }));
  };

  //dropdown select
  const onDropDownItemChange = (changedData) => {
    // setState(changedData);
    redirect(changedData);
  };

  //dropdown selectedvalue change by clicking game items
  let _cat = selectedValueList.category;
  let _nft = selectedValueList.nft;
  let _f2p = selectedValueList.f2p;
  let _p2e = selectedValueList.p2e;

  const arraySelectedValueList = _.values({...selectedValueList, category: categoryMatch[_cat], nft: nftMatch[_nft], f2p: f2pMatch[_f2p], p2e: p2eMatch[_p2e]});

  return (
    <div
      className="orderbar"
      style={{ marginBottom: "1rem", visibility: "visible" }}
    >
      {dropdownTypes &&
        dropdownTypes.length > 0 &&
        dropdownTypes.map((type, index) => {
          return (
            <Dropdown
              key={index}
              type={type.list}
              listName={type.listName}
              state={sortList}
              selectedValue={arraySelectedValueList[index]}
              onChange={(changedData) => onDropDownItemChange(changedData)}
            />
          );
        })}

      <div div className="order-new">
        <div className="inner-order-new">
          <span className="order-new-new">New</span>
          <label className="switch">
            <input
              type="checkbox"
              aria-label="NewEntries"
              name="newList"
              checked={isNew}
              onChange={(e) => filterNew(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="dropdown search">

        <input placeholder="Search" autoComplete="off" value={searchQuery} className="form-control mr-sm-2 fulltextsearch" name="fulltextsearch" type="text" onChange={(e)=>setSearchQuery(e.target.value)}/>
        <button className="search-button my-2 my-sm-0" aria-label="Search" onClick={()=>searchItem()}><i className="fas fa-search"></i></button>

      </div>
    </div>
  );
};

export default Orderbar;
