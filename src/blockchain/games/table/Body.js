import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { TableCell, TableRow, Tooltip } from "@material-ui/core";

import P2eScore from "../P2eScore";
import Chart from "../Chart";
import styles from "../styles/Games.module.css";
import { ThemeContext } from "../../../App";

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
  const useStyles = makeStyles((theme) => ({
    darkHeaderbar: {
      color: "#6ba4dd",
    },
    lightHeaderbar: {
      color: "#fff",
    },
  }));
  const classes = useStyles();
  return (
    <>
      {" "}
      {rows.map((row) => (
        <TableRow key={row.id}>
          <TableCell component="th" scope="row">
            <div>{row?.id}</div>
          </TableCell>
          <TableCell component="th" scope="row">
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
                  <img loading="lazy" src={row.profile_pic} alt={row.name} style={{width: '50px', height: '50px'}}/>
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
            {(row?.genres).split(",").map((genre, index) => (
              <div key={index}>
                <a
                  href={`https://playtoearn.net/blockchaingames/All-Blockchain/${genre}/All-Status/All-Device/All-NFT/All-PlayToEarn/All-FreeToPlay`}
                  className={`text-right font-bold text-xs uppercase block whitespace-nowrap no-underline ${styles.dapp_name}`}
                >
                  {genre.toUpperCase()}
                </a>
              </div>
            ))}
          </TableCell>
          <TableCell component="th" scope="row">
            {row?.block_chains?.split(",").map((blockchain, index) => (
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
                    ></div>
                  </span>
                </LightTooltip>
              </div>
            ))}
          </TableCell>
          <TableCell component="th" scope="row">
            {row?.devices?.split(",").map((device, index) => (
              <LightTooltip title={`${device}`} placement="top" key={index}>
                <span style={{ padding: "0px 4px", fontSize: "23px" }}>
                  <div
                    className={`lazy deviceimg ${device} loaded`}
                    data-loader="bgLoader"
                  ></div>
                </span>
              </LightTooltip>
            ))}
          </TableCell>
          <TableCell component="th" scope="row">
            <LightTooltip title={`${row?.status}`} placement="top">
              <a
                href={`https://playtoearn.net/blockchaingames/All-Blockchain/All-Genre/${row?.status}/All-Device/All-NFT/All-PlayToEarn/All-FreeToPlay`}
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
              >
                {" "}
                {row?.status}
              </a>
            </LightTooltip>
          </TableCell>
          <TableCell component="th" scope="row">
            <LightTooltip
              title={`${row?.nft === "YES" ? "NFT support" : "No NFT support"}`}
              placement="top"
            >
              <a
                href={`https://playtoearn.net/blockchaingames/All-Blockchain/All-Genre/All-Status/All-Device/${
                  row?.nft === "yes" ? "NFT" : "no-NFT"
                }/All-PlayToEarn/All-FreeToPlay`}
                className="font-bold px-2 py-0 mx-1 my-0 uppercase block text-center rounded border-2 text-white"
                style={{
                  fontSize: "10px",
                  border: "1px solid #00000052",
                  backgroundColor: row.nft === "YES" ? "#33afc3" : "#ff5151",
                }}
              >
                {row.nft.toUpperCase()}
              </a>
            </LightTooltip>
          </TableCell>
          <TableCell component="th" scope="row">
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
                href={`https://playtoearn.net/blockchaingames/All-Blockchain/All-Genre/All-Status/All-Device/All-NFT/All-PlayToEarn/Free-To-Play`}
                className="font-bold px-2 py-0 mx-1 my-0 uppercase block text-center rounded border-2 text-white"
                style={{
                  fontSize: "10px",
                  border: "1px solid #00000052",
                  backgroundColor: row?.f2p === "YES" ? "#33afc3" : "#ff5151",
                }}
              >
                {row?.f2p.toUpperCase()}
              </a>
            </LightTooltip>
          </TableCell>
          <TableCell component="th" scope="row">
            {row?.p2e?.split(",").map((p2e, index) => (
              <div className="border-1" key={index}>
                <LightTooltip title={`${p2e} Play-To-Earn`} placement="top">
                  <a
                    href={`https://playtoearn.net/blockchaingames/All-Blockchain/All-Genre/All-Status/All-Device/All-NFT/${p2e}-PlayToEarn/All-FreeToPlay`}
                    className="font-bold px-2 py-0 my-1 mx-0 uppercase block text-center rounded border-2 text-white"
                    style={{
                      fontSize: "10px",
                      border: "1px solid #00000052",
                      backgroundColor:
                        row?.f2p !== "no" ? "#33afc3" : "#ff5151",
                    }}
                  >
                    {p2e.toUpperCase()}
                  </a>
                </LightTooltip>
              </div>
            ))}
          </TableCell>
          <TableCell component="th" scope="row">
            <P2eScore />
          </TableCell>
          <TableCell component="th" scope="row">
              {/* {(row?.social_24h?.split(',')).map(social)}
            <div className="dailychangepercentage" data-nsfw-filter-status="swf">
              {row?.social_24h}
            </div>
            <div style={{color: '#ff3860'}} data-nsfw-filter-status="swf">
              -10.38%
            </div> */}
          </TableCell>
          <TableCell component="th" scope="row">
            <Chart />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default Body;
