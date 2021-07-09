import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { TableCell, TableRow, Tooltip } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import P2eScore from "../P2eScore";
import Chart from "../Chart";
import styles from "../styles/Games.module.css";
import { ThemeContext } from "../../../App";
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

const Body = ({ rows }) => {
  const mode = React.useContext(ThemeContext);
  const dispatch = useDispatch();
  const sortList = useSelector((state) => state.games.sortList);
  const useStyles = makeStyles((theme) => ({
    darkHeaderbar: {
      color: "#6ba4dd",
    },
    lightHeaderbar: {
      color: "#fff",
    },
  }));


  const classes = useStyles();
  const handleChange = (filter, listName) => {
    let props = { ...sortList, [listName]: filter, page: 1, keyword: "" };
    redirect(props);
  };

  const redirect = (props) => {
    dispatch(fetchGamesFilter(props));
  };

  
  
  return (
    <>
      {" "}
      {rows.map((row, index) => {
        return <TableRow key={row.id}>
         
          <TableCell component="th" scope="row" style={{padding : '0'}}>
            {sortList.is_new === 1 && row.id != 13 ? <a className="new" href="#" data-nsfw-filter-status="swf">New!</a>:<></>}
            <div>{50 * (sortList.page - 1) + index + 1}</div>
            
          </TableCell>
          <TableCell component="th" scope="row" style={{padding: '0'}}>
            <Link
              to={`/blockchaingame/${row?.id}`}
              className="dapp_detaillink"
              style={{ color: "#0056b3" }}
            >
              {row?.id && (
                <div
                  className={`dapp_profilepic 
                    dapp_profilepic_list
                  `}
                >
                  <img
                    loading="lazy"
                    src={row.profile_pic}
                    alt={row.name}
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
              )}
              <div
                className={`${styles.dapp_name} ${mode} === 'dark' && ${classes.darkHeaderbar} `}
              >
                <span>{row?.name}</span>
                <span>{row?.short_desc}</span>
              </div>
            </Link>
          </TableCell>
          <TableCell component="th" scope="row">
            {row?.genres && row?.genres.length > 0 && (JSON.parse(row?.genres)).map((genre, index) => (
              <div key={index}>
                <a
                  href="#"
                  className={`text-right font-bold text-xs uppercase block whitespace-nowrap no-underline ${styles.dapp_name}`}
                  onClick={() => handleChange(genre, "category")}
                >
                  {genre.toUpperCase()}
                </a>
              </div>
            ))}
          </TableCell>
          <TableCell component="th" scope="row">
            {row?.block_chains && row?.block_chains.length > 0 && (JSON.parse(row?.block_chains)).map((blockchain, index) => (
              <div className="text-right" key={index}>
                <LightTooltip title={`${blockchain}`} placement="top">
                  <span
                    style={{
                      fontSize: "23px",
                    }}
                  >
                    <div
                      className={`lazy platformicon ${blockchain} loaded`}
                      data-loader="bgLoader"
                      onClick={() => handleChange(blockchain, "platform")}
                    ></div>
                  </span>
                </LightTooltip>
              </div>
            ))}
          </TableCell>
          <TableCell component="th" scope="row">
            {row?.devices && row?.devices.length > 0 && (JSON.parse(row?.devices)).map((device, index) => (
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
          </TableCell>
          <TableCell component="th" scope="row">
            <LightTooltip title={`${row?.status}`} placement="top">
              <a
                href="#"
                className={`
                                border-2
                                border-${
                                  row?.status === "Alpha"
                                    ? "blue"
                                    : row?.status === "Live"
                                    ? "green"
                                    : row?.status === "Presale"
                                    ? "red"
                                    : row?.status === "Beta"
                                    ? "yellow"
                                    : row?.status === "Development"
                                    ? "purple"
                                    : ""
                                }-400
                                text-${
                                  row?.status === "Alpha"
                                    ? "blue"
                                    : row?.status === "Live"
                                    ? "green"
                                    : row?.status === "Presale"
                                    ? "red"
                                    : row?.status === "Beta"
                                    ? "yellow"
                                    : row?.status === "Development"
                                    ? "purple"
                                    : ""
                                }-400
                                font-bold 
                                px-2
                                py-0
                                rounded 
                                uppercase 
                                block
                                text-center
                                `}
                style={{
                  fontSize: "10px",
                }}
                onClick={() => handleChange(row?.status, "status")}
              >
                {row?.status && row?.status.length > 0 && row?.status}
              </a>
            </LightTooltip>
          </TableCell>
          <TableCell component="th" scope="row">
            {row?.nft && row?.nft.length > 0 && (JSON.parse(row?.nft)).map((nft, index) => (
              <LightTooltip
                title={`${
                  row?.nft === "YES" ? "NFT support" : "No NFT support"
                }`}
                placement="top"
              >
                <a
                  href="#"
                  className="font-bold px-2 py-0 mx-1 my-0 uppercase block text-center rounded border-2 text-white"
                  style={{
                    fontSize: "10px",
                    border: "1px solid #00000052",
                    backgroundColor: row.nft === "YES" ? "#33afc3" : "#ff5151",
                  }}
                  onClick={() => handleChange(nft, "nft")}
                >
                  {nft.toUpperCase()}
                </a>
              </LightTooltip>
            ))}
          </TableCell>
          <TableCell component="th" scope="row">
            {row?.f2p && row?.f2p.length > 0 && (JSON.parse(row?.f2p)).map((f2p, index) => (
              <LightTooltip
                title={`${
                  row?.f2p === "NFT"
                    ? "NFT Required"
                    : row?.f2p === "GAME"
                    ? "Game required"
                    : row?.f2p === "YES"
                    ? "Free-to-Play"
                    : "Crypto Required"
                }`}
                placement="top"
              >
                <a
                  href="#"
                  className="font-bold px-2 py-0 mx-1 my-0 uppercase block text-center rounded border-2 text-white"
                  style={{
                    fontSize: "10px",
                    border: "1px solid #00000052",
                    backgroundColor: row?.f2p === "YES" ? "#33afc3" : "#ff5151",
                  }}
                  onClick={() => handleChange(f2p, "f2p")}
                >
                  {f2p.toUpperCase()}
                </a>
              </LightTooltip>
            ))}
          </TableCell>
          <TableCell component="th" scope="row">
            {row?.p2e && row?.p2e.length > 0 && (JSON.parse(row?.p2e)).map((p2e, index) => (
              <div className="border-1" key={index}>
                <LightTooltip title={`${p2e} Play-To-Earn`} placement="top">
                  <a
                    href="#"
                    className="font-bold px-2 py-0 my-1 mx-0 uppercase block text-center rounded border-2 text-white"
                    style={{
                      fontSize: "10px",
                      border: "1px solid #00000052",
                      backgroundColor:
                        row?.f2p !== "no" ? "#33afc3" : "#ff5151",
                    }}
                    onClick={() => handleChange(p2e, "p2e")}
                  >
                    {p2e.toUpperCase()}
                  </a>
                </LightTooltip>
              </div>
            ))}
          </TableCell>
          <TableCell component="th" scope="row">
            <P2eScore data={row?.p2e_score && row?.p2e_score.length > 0 && (JSON.parse(row?.p2e_score))}/>
          </TableCell>
          <TableCell component="th" scope="row">
            <div
              className="dailychangepercentage"
              data-nsfw-filter-status="swf"
            >
              {row?.social_24h && row?.social_24h.length> 0 && (JSON.parse(row?.social_24h)).score}
            </div>
            <div style={{ color: "#ff3860" }} data-nsfw-filter-status="swf">
              {row?.social_24h && row?.social_24h.length> 0 && (JSON.parse(row?.social_24h)).percent}
            </div>
          </TableCell>
          <TableCell component="th" scope="row">
            <Chart data = {(row.social_7d ? JSON.parse(row.social_7d) : [])}/>
          </TableCell>
        </TableRow>
})}
    </>
  );
};

export default Body;
