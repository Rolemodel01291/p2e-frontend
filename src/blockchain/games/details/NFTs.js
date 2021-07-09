import React from "react";


const NFTs = ({ supported_nfts }) => {
  return (
    <div className="dapp_nftlist">
      <p className="related_dapp_h1">Supported NFTs:</p>

      <ul>
        {supported_nfts &&
          supported_nfts.length > 0 &&
          JSON.parse(supported_nfts).map((supported_nfts, index) => (
            <>
              <li>
                <a href={supported_nfts.link}>
                  <div className="related_dapp_img related_nft">
                    <img
                      loading="lazy"
                      src={supported_nfts.image}
                      alt={supported_nfts.name}
                    />
                    <span>{supported_nfts.name}</span>
                  </div>
                </a>
              </li>
            </>
          ))}
      </ul>
    </div>
  );
};

export default NFTs;
