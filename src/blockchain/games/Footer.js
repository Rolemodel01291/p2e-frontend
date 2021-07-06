import React from "react";
import "./styles/Footer.css";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="footerinner">
        <div className="row">
          <div className="col-xs-12 col-lg-4 col-xl-3">
            <ul>
              <li>
                <a href="https://playtoearn.net/blockchaingames">
                  <span className="navbar-brand"></span>
                </a>
              </li>
              <li className="footer_mobileonly">
                © 2021 PlayToEarn.net - all rights reserved
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-lg-8 col-xl-9">
            <ul className="menu">
              <li>
                <span>
                  <a href="https://playtoearn.net/faq">FAQ</a>
                </span>
              </li>
              <li className="cutterline">|</li>
              <li>
                <button
                  aria-label="Newsletter"
                  type="button"
                  className="newsletterbutton"
                  data-toggle="modal"
                  data-target="#newsletterModal"
                >
                  Newsletter
                </button>
                
              </li>
              <li className="cutterline">|</li>
              <li>
                <span>
                  <a href="https://playtoearn.net/advertise">Advertise</a>
                </span>
              </li>
              <li className="cutterline">|</li>
              <li>
                <button
                  type="button"
                  aria-label="Contact"
                  className="contactbutton"
                  data-toggle="modal"
                  data-target="#contactModal"
                >
                  Contact Us
                </button>
                
              </li>
              <li className="cutterline">|</li>
              <li>
                <span>
                  <a href="https://playtoearn.net/press-kit">Press Kit</a>
                </span>
              </li>
              <li className="cutterline">|</li>
              <li>
                <span>
                  <a href="https://playtoearn.net/privacy-policy">Privacy</a>
                </span>
              </li>
              <li className="cutterline">|</li>
              <li>
                <span>
                  <a href="https://playtoearn.net/terms">Terms</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="footerhr" />
      <div className="footerinner">
        <div className="row">
          <div className="col-xs-12 col-lg-4 col-xl-4 footer_desktoponly">
            <ul>
              <li>© 2021 PlayToEarn.net - all rights reserved</li>
            </ul>
          </div>
          <div className="col-xs-12 col-lg-8 col-xl-8">
            <ul className="social_media">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.twitter.com/play2earncrypto"
                >
                  <div
                    className="lazy socialimgfooter twitter"
                    data-loader="bgLoader"
                  ></div>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.com/invite/RYvHDXR"
                >
                  <div
                    className="lazy socialimgfooter discord"
                    data-loader="bgLoader"
                  ></div>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://t.me/playtoearn_net"
                >
                  <div
                    className="lazy socialimgfooter telegram"
                    data-loader="bgLoader"
                  ></div>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/channel/UCvIp5zOldr7n1jDQtqvLqnA"
                >
                  <div
                    className="lazy socialimgfooter youtube"
                    data-loader="bgLoader"
                  ></div>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://play.google.com/store/apps/details?id=com.playtoearn.playtoearn"
                >
                  <div
                    className="lazy socialimgfooter googleplay"
                    data-loader="bgLoader"
                  ></div>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://playtoearn.medium.com/"
                >
                  <div
                    className="lazy socialimgfooter medium"
                    data-loader="bgLoader"
                  ></div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="backtotop">
          <span className="glyphicon glyphicon-chevron-up"></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
