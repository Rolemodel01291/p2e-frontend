import React from "react";

const RelatedGamePanel = () => {
  return (
    <>
      <div>
        <div className="detail_sidebar">
          <p className="related_dapp_h1" data-nsfw-filter-status="swf">
            Related Games:
          </p>
          <ul className="related_dapp">
            <li>
              <a href="zed-run" data-nsfw-filter-status="swf">
                <div className="related_dapp_img">
                  <img
                    loading="lazy"
                    src="https://playtoearn.net/img/dapp/zed-run/profile_picture/100_zed-run.jpg"
                    alt="Zed Run"
                    data-nsfw-filter-status="sfw"
                    style={{ visibility: "visible" }}
                  />
                  <span data-nsfw-filter-status="swf">Zed Run</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RelatedGamePanel;
