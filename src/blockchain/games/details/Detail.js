import React from "react";
import { useHistory } from "react-router";
import { Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import {
  godsUnchained,
  litenite,
} from "../../../data/gameDetails/godsUnchained";

import ScoreCard from "./ScoreCard";
import Headline from "./Headline";
import Description from "./Description";
import Categories from "./Categories";
import PlatForm from "./PlatForm";
import Device from "./Device";
import GameService from "./GameService";
import NFTs from "./NFTs";
import Token from "./Token";
import ImageSlider from "./ImageSlider";
import VideoDiv from "./VideoDiv";
import RelatedGamePanel from "./RelatedGamePanel";
import "./styles/Default.css";
import "./styles/View.css";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#3f88c7",
    color: "#fff",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    textTransform: "capitalize",
  },
}))(Tooltip);

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
    <div className="details">
      <div>
        <div>
          <div className="detail">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-9 col-lg-8">
                <div>
                  <div className="detail_profilepic">
                    <img
                      loading="lazy"
                      src={detail.profile_pic}
                      alt={detail.name}
                    />
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
                  <Headline
                    name={detail?.name}
                    rank={detail?.total_rank}
                    updated={detail?.updated_at}
                    status={detail?.status}
                  />
                  <hr />
                  <Description desc={detail?.description} />
                  <hr />
                  <Categories categories={detail?.genres} />
                  <hr />
                  <div className="dapp_platforms">
                    <PlatForm platform={detail?.block_chains} />
                  </div>
                  <div className="dapp_devices">
                    <Device devices={detail?.devices} />
                  </div>
                  <hr />
                  <GameService
                    nft={detail?.nft}
                    f2p={detail?.f2p}
                    p2e={detail?.p2e}
                  />

                  <hr />
                  <div className="dapp_socialscore">
                    <div>
                      Social Score
                      <LightTooltip
                        title="Social Score is a new metric that reflects the popularity of the crypto community in a certain game. A game with a higher Social Score has captured more interest in the social network. (updates every 24h)"
                        placement="top"
                      >
                        <i className="far fa-question-circle"></i>
                      </LightTooltip>
                      <span className="socialscore_number">
                        {detail?.social_24h &&
                          detail?.social_24h.length > 0 &&
                          JSON.parse(detail?.social_24h)?.score}{" "}
                      </span>
                      <span className="dailychangepercentage">
                        (
                        <span style={{ color: "#23d160" }}>
                          {detail?.social_24h &&
                            detail?.social_24h.length > 0 &&
                            JSON.parse(detail?.social_24h)?.percent}
                        </span>
                        )
                      </span>
                    </div>
                  </div>
                  <hr />
                  <ScoreCard
                    p2e_score={detail?.p2e_score}
                    p2e_score_data={detail?.p2e_score_data}
                    updated_at={detail?.updated_at}
                  />
                  <hr />
                  <NFTs supported_nfts={detail?.supported_nfts} />

                  <hr />
                  <Token supported_token={detail?.supported_tokens} />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-4">
                <hr className="mobileonly" />
                <div className="social">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://blankos.com/?utm_source=PlayToEarn.net"
                    className="btn btn-outline-success"
                    data-nsfw-filter-status="swf"
                  >
                    <div
                      className="lazy socialimg website loaded"
                      data-loader="bgLoader"
                    ></div>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/PlayBlankos"
                    className="btn btn-outline-success"
                    data-nsfw-filter-status="swf"
                  >
                    <div
                      className="lazy socialimg twitter loaded"
                      data-loader="bgLoader"
                    ></div>
                  </a>
                  <a
                    target="_blank"
                    href="https://discord.com/invite/Qjd4Vj9"
                    className="btn btn-outline-success"
                    data-nsfw-filter-status="swf"
                    rel="noreferrer"
                  >
                    <div
                      className="lazy socialimg discord loaded"
                      data-loader="bgLoader"
                    ></div>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/playblankos"
                    className="btn btn-outline-success"
                    data-nsfw-filter-status="swf"
                    rel="noreferrer"
                  >
                    <div
                      className="lazy socialimg youtube loaded"
                      data-loader="bgLoader"
                    ></div>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/playblankos/"
                    className="btn btn-outline-success"
                    data-nsfw-filter-status="swf"
                    rel="noreferrer"
                  >
                    <div
                      className="lazy socialimg facebook loaded"
                      data-loader="bgLoader"
                    ></div>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/playblankos/"
                    className="btn btn-outline-success"
                    data-nsfw-filter-status="swf"
                    rel="noreferrer"
                  >
                    <div
                      className="lazy socialimg instagram loaded"
                      data-loader="bgLoader"
                    ></div>
                  </a>
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
              <RelatedGamePanel related_game={detail?.related_games} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
