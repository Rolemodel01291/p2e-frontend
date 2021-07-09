import React from "react";


const Token = ({ supported_token }) => {
  return (
    <div className="dapp_nftlist">
      <p className="related_dapp_h1">Supported Crypto Tokens:</p>
      <ul>
        {supported_token &&
          supported_token.length > 0 &&
          JSON.parse(supported_token).map((supported_token, index) => (
            <>
              <li>
                <a href={supported_token.link}>
                  <div className="related_dapp_img related_token">
                    <img
                      loading="lazy"
                      src={supported_token.image}
                      alt={supported_token.name}
                    />
                    <span>{supported_token.name}</span>
                  </div>
                </a>
              </li>
            </>
          ))}
      </ul>
    </div>
  );
};

export default Token;
