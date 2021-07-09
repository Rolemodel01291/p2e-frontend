import React from "react";
import { useSelector } from "react-redux";
import { makeStyles,withStyles } from "@material-ui/core/styles";
import { Tooltip } from "@material-ui/core";


const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: "#3f88c7",
      color: "#fff",
      boxShadow: theme.shadows[1],
      fontSize: 11,
      textTransform: "capitalize",
    },
  }))(Tooltip);

const Headbar = () => {
  const mode = useSelector((state) => state.ui.mode);
  const useStyles = makeStyles((theme) => ({
    headerbar: {
      color: theme.palette.primary.main,
    },
  }));
  
  const classes = useStyles();
  return (
    <div>
      <div className="headerbar">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <span>
              <i className="fas fa-users"></i>
              <span className={mode === "dark" ? classes.headerbar : ""}>
                Users (24h)
                <LightTooltip title="The number of wallets that had interacted (transactions) with a game’s smart contracts. (currenty only ETH)" placement="top">
                    <i
                    className="far fa-question-circle"
                    ></i>
                </LightTooltip>
                
                <br />
                3,165
              </span>
            </span>
            <span>
              <i className="fas fa-share-square"></i>
              <span className={mode === "dark" ? classes.headerbar : ""}>
                Transactions (24h)
                <LightTooltip title="The amount of transaction represents the numbers of actions between users and games that involved smart contract interactions. (currenty only ETH)" placement="top">
                    <i
                    className="far fa-question-circle"
                    ></i>
                </LightTooltip>
                
                <br />
                6,891
              </span>
            </span>
            <span>
              <i className="fas fa-balance-scale"></i>
              <span className={mode === "dark" ? classes.headerbar : ""}>
                Volume (24h)
                <LightTooltip title="Transaction volume of tokens to a game’s smart contracts, which is the amount of tokens spent in the game. (currenty only ETH)" placement="top">
                    <i
                    className="far fa-question-circle"
                    ></i>
                </LightTooltip>
                
                <br />
                $2,549,868
              </span>
            </span>
            <span>
              <ul className="header_total_container">
                <li>
                  <span className={mode === "dark" ? classes.headerbar : ""}>
                    <i className="fas fa-gamepad"></i> Games:
                    <a href="https://playtoearn.net/blockchaingames">264</a>
                  </span>
                </li>
                <li>
                  <span className={mode === "dark" ? classes.headerbar : ""}>
                    <i className="fas fa-vr-cardboard"></i> VW Buildings:
                    <a href="https://playtoearn.net/virtualworld-buildings">
                      18
                    </a>
                  </span>
                </li>
              </ul>
              <ul className="header_total_container">
                <li>
                  <span className={mode === "dark" ? classes.headerbar : ""}>
                    <i className="fas fa-puzzle-piece"></i> NFTs:
                    <a href="https://playtoearn.net/non-fungible-token">
                      19719
                    </a>
                  </span>
                </li>
                <li>
                  <span className={mode === "dark" ? classes.headerbar : ""}>
                    <i className="fas fa-coins"></i> Tokens:
                    <a href="https://playtoearn.net/crypto-token">10165</a>
                  </span>
                </li>
              </ul>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Headbar;
