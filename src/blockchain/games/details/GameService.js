import React from "react";
import { Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchGamesFilter } from "../gamesSlice";
import { transform } from "lodash";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#3f88c7",
    color: "#fff",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    textTransform: "capitalize",
  },
}))(Tooltip);

const GameService = ({ nft, p2e, f2p }) => {
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
    sort: "total_rank",
    direction: "asc",
    is_new: "",
    keyword: "",
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
    <>
      <div className="dapp_nft_p2e">
        <div>
          <span data-nsfw-filter-status="swf">NFT Support:</span>
          {nft &&
            nft.length > 0 &&
            JSON.parse(nft).map((nft, index) => (
              <LightTooltip
                title={`${nft === "YES" ? "NFT support" : "No NFT support"}`}
                placement="top"
              >
                <span
                  
                  style={{
                    fontSize: "10px",
                    border: "1px solid #00000052",
                    backgroundColor: nft === "YES" ? "#33afc3" : "#ff5151",
                  }}
                  onClick={() => handleChange(nft, "nft")}
                >
                  {nft.toUpperCase()}
                </span>
              </LightTooltip>
            ))}
        </div>
        <div>
          <span>Free-To-Play:</span>
          {f2p &&
            f2p.length > 0 &&
            JSON.parse(f2p).map((f2p, index) => (
              <LightTooltip
                title={`${
                  f2p === "NFT"
                    ? "NFT Required"
                    : f2p === "GAME"
                    ? "Game required"
                    : f2p === "YES"
                    ? "Free-to-Play"
                    : "Crypto Required"
                }`}
                placement="top"
              >
                <span
                  
                  style={{
                    fontSize: "10px",
                    border: "1px solid #00000052",
                    backgroundColor: f2p === "YES" ? "#33afc3" : "#ff5151",
                  }}
                  onClick={() => handleChange(f2p, "f2p")}
                >
                  {f2p.toUpperCase()}
                </span>
              </LightTooltip>
            ))}
        </div>
        <div>
          <span>Play-To-Earn:</span>
          {p2e &&
            p2e.length > 0 &&
            JSON.parse(p2e).map((p2e, index) => (
              <LightTooltip title={`${p2e} Play-To-Earn`} placement="top">
                <span
                  style={{
                    fontSize: "10px",
                    border: "1px solid #00000052",
                    backgroundColor: "#33afc3",
                    padding:  "0 7px",
                    margin: "3px",
                    color: "#fff",
                    fontWeight : "700",
                    borderRadius: "3px"
                  }}
                  onClick={() => handleChange(p2e, "p2e")}
                >
                  {p2e.toUpperCase()}
                </span>
              </LightTooltip>
            ))}
        </div>
      </div>
    </>
  );
};

export default GameService;
