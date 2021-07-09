import React from "react";

const RelatedGamePanel = ({related_game}) => {
  return (
    <>
      <div>
        <div className="detail_sidebar">
          <p className="related_dapp_h1" data-nsfw-filter-status="swf">
            Related Games:
          </p>
          <ul className="related_dapp">
          {related_game &&
          related_game.length > 0 &&
          JSON.parse(related_game).map((related_game, index) => (
            <>
            <li>
              <a href={related_game.link} data-nsfw-filter-status="swf">
                <div className="related_dapp_img">
                  <img
                    loading="lazy"
                    src={related_game.image}
                    alt={related_game.name}
                    data-nsfw-filter-status="sfw"
                    style={{ visibility: "visible" }}
                  />
                  <span data-nsfw-filter-status="swf">{related_game.name}</span>
                </div>
              </a>
            </li>
            </>
          ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RelatedGamePanel;
