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
  

const Device = ({ devices }) => {
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

  const handleChange = (sort, listName) => {
    let props = { ...sortList, [listName]: sort, page: 1 };
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
          {devices && devices.length > 0 && (JSON.parse(devices)).map((device, index) => (
              <LightTooltip title={`${device}`} placement="top" key={index}>
                <span style={{ padding: "0px 4px", fontSize: "23px" }}>
                  <div
                    className={`lazy deviceimg ${device} loaded`}
                    data-loader="bgLoader"
                    onClick={() => handleChange(device, "device")}
                  ></div>
                </span>
              </LightTooltip>
           ))}
      </>
    
    );
}

export default Device;

