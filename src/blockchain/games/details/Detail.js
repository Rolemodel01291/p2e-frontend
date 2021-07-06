import React from "react";
import { useHistory } from "react-router";

import {
  godsUnchained,
  litenite,
} from "../../../data/gameDetails/godsUnchained";

import ScoreCard from "./ScoreCard";
import Headline from "./Headline";
import Description from "./Description";
import Categories from "./Categories";
import ImageSlider from "./ImageSlider";
import VideoDiv from "./VideoDiv";
import RelatedGamePanel from "./RelatedGamePanel";
import "./styles/Default.css";
import "./styles/View.css";

const Detail = ({ detail }) => {
  const history = useHistory();
  const getPathName = history?.location?.pathname?.split("/")[2];
  const [gameSelected, setGameSelected] = React.useState({});
  React.useEffect(() => {
    if (getPathName && getPathName === "litenite") {
      setGameSelected(litenite);
      if (gameSelected === "gods-unchained") setGameSelected(godsUnchained);
    }
    if (getPathName && getPathName === "gods-unchained") {
      setGameSelected(godsUnchained);
    }
    return {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGoBack = () => {
    history.push("/");
  };

  return (
    <div className="detail">
      <div className="row">
        <div className="col-12 col-lg-8 col-xl-9">
          <div>
            <div className="dapp_profilepic">
              <img loading="lazy" src={detail.profile_pic} alt={detail.name} />
            </div>
            <div className="backbutton">
              <button
                className="dropdown-item"
                onClick={handleGoBack}
                style={{
                  marginLeft: "15px",
                }}
              >
                <i className="fa fa-chevron-circle-left"></i>
                <span>All Games</span>
              </button>
            </div>
            <Headline gameSelected={gameSelected} />
            <hr />
            <Description desc={detail?.description} />
            <hr />
            <Categories categories={gameSelected?.categories} />
            <hr />
            <div className="dapp_platforms">
              <a
                data-toggle="tooltip"
                data-placement="top"
                title="Ethereum"
                href="https://playtoearn.net/blockchaingames/Ethereum/All-Genre/All-Status/All-Device/All-NFT/All-PlayToEarn"
              >
                <div
                  className="lazy platformicon Ethereum"
                  data-loader="bgLoader"
                ></div>
              </a>
              <a
                data-toggle="tooltip"
                data-placement="top"
                title="Immutable-X"
                href="https://playtoearn.net/blockchaingames/Immutable-X/All-Genre/All-Status/All-Device/All-NFT/All-PlayToEarn"
              >
                <div
                  className="lazy platformicon Immutable-X"
                  data-loader="bgLoader"
                ></div>
              </a>
            </div>
            <div className="dapp_devices">
              <a
                data-toggle="tooltip"
                data-placement="top"
                title="Windows"
                href="https://playtoearn.net/blockchaingames/All-Blockchain/All-Genre/All-Status/Windows/All-NFT/All-PlayToEarn"
              >
                <div
                  className="lazy deviceimg Windows"
                  data-loader="bgLoader"
                ></div>
              </a>
              <a
                data-toggle="tooltip"
                data-placement="top"
                title="MAC"
                href="https://playtoearn.net/blockchaingames/All-Blockchain/All-Genre/All-Status/MAC/All-NFT/All-PlayToEarn"
              >
                <div
                  className="lazy deviceimg MAC"
                  data-loader="bgLoader"
                ></div>
              </a>
            </div>
            <hr />
            <div className="dapp_nft_p2e">
              <div>
                <span>NFT Support:</span>
                <a
                  href="https://playtoearn.net/blockchaingames/All-Blockchain/All-Genre/All-Status/All-Device/NFT/All-PlayToEarn/Free-To-Play"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="NFT Support"
                >
                  Yes
                </a>
              </div>
              <div>
                <span>Free-To-Play:</span>
                <a
                  href="https://playtoearn.net/blockchaingames/All-Blockchain/All-Genre/All-Status/All-Device/All-NFT/All-PlayToEarn/Free-To-Play"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Free-To-Play"
                >
                  Yes
                </a>
              </div>
              <div>
                <span>Play-To-Earn:</span>
                <a
                  href="https://playtoearn.net/blockchaingames/All-Blockchain/All-Genre/All-Status/All-Device/All-NFT/nft-PlayToEarn/Free-To-Play"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="NFT Play-To-Earn"
                >
                  NFT
                </a>
              </div>
            </div>
            <hr />
            <div className="dapp_socialscore">
              <div>
                Social Score
                <i
                  data-html="true"
                  data-toggle="tooltip-large"
                  data-placement="bottom"
                  title="Social Score is a new metric that reflects the popularity of the crypto community in a certain game. A game with a higher Social Score has captured more interest in the social network. (updates every 24h)"
                  className="far fa-question-circle"
                ></i>
                <span className="socialscore_number">61 </span>
                <span className="dailychangepercentage">
                  (<span style={{ color: "#23d160" }}>+12.96%</span>)
                </span>
              </div>
            </div>
            <hr />
            <ScoreCard />
            <hr />
            <div className="dapp_nftlist">
              <p className="related_dapp_h1">Supported NFTs:</p>
              <ul>
                <li>
                  <a href="https://playtoearn.net/non-fungible-token/gods-unchained">
                    <div className="related_dapp_img related_nft">
                      <img
                        loading="lazy"
                        src="https://lh3.googleusercontent.com/yArciVdcDv3O2R-O8XCxx3YEYZdzpiCMdossjUgv0kpLIluUQ1bYN_dyEk5xcvBEOgeq0zNIoWOh7TL9DvUEv--OLQ=s60"
                        alt="Gods Unchained"
                      />
                      <span>Gods Unchained</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://playtoearn.net/non-fungible-token/gods-unchained-collectibles">
                    <div className="related_dapp_img related_nft">
                      <img
                        loading="lazy"
                        src="https://lh3.googleusercontent.com/ovghE-VPltxS00_l_ufwOlqnsrEVG9WRe2ci8Rr8M2P62dYIkD0cycq1RZDF6ojbA21tnqvylymmUU2IJaR3xD58VA=s60"
                        alt="Gods Unchained Collectibles"
                      />
                      <span>Gods Unchained Collectibles</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <hr />
            <div className="dapp_nftlist">
              <p className="related_dapp_h1">Supported Crypto Tokens:</p>
              <ul>
                <li>
                  <a href="https://playtoearn.net/crypto-token/ethereum">
                    <div className="related_dapp_img related_token">
                      <img
                        loading="lazy"
                        src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
                        alt="Ethereum"
                      />
                      <span>Ethereum</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-xl-3">
            <hr class="mobileonly"/>
            <div className="social">
                <a target="_blank" rel="nofollow noopener" href="https://blankos.com/?utm_source=PlayToEarn.net" className="btn btn-outline-success" data-nsfw-filter-status="swf"><div className="lazy socialimg website loaded" data-loader="bgLoader"></div></a>
                <a target="_blank" rel="nofollow noopener" href="https://twitter.com/PlayBlankos" className="btn btn-outline-success" data-nsfw-filter-status="swf"><div className="lazy socialimg twitter loaded" data-loader="bgLoader"></div></a>
                <a target="_blank" rel="nofollow noopener" href="https://discord.com/invite/Qjd4Vj9" className="btn btn-outline-success" data-nsfw-filter-status="swf"><div className="lazy socialimg discord loaded" data-loader="bgLoader"></div></a>
                <a target="_blank" rel="nofollow noopener" href="https://www.youtube.com/playblankos" className="btn btn-outline-success" data-nsfw-filter-status="swf"><div className="lazy socialimg youtube loaded" data-loader="bgLoader"></div></a>
                <a target="_blank" rel="nofollow noopener" href="https://www.facebook.com/playblankos/" className="btn btn-outline-success" data-nsfw-filter-status="swf"><div className="lazy socialimg facebook loaded" data-loader="bgLoader"></div></a>
                <a target="_blank" rel="nofollow noopener" href="https://www.instagram.com/playblankos/" className="btn btn-outline-success" data-nsfw-filter-status="swf"><div className="lazy socialimg instagram loaded" data-loader="bgLoader"></div></a>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-lg-9 dappimages">
                <ImageSlider images={detail?.app_images} />
            </div>
            <div className="col-12 col-lg-3">
                <VideoDiv />
            </div>
        </div>
        <RelatedGamePanel/>
      </div>
    </div>
  );
};

export default Detail;
