import React from 'react';
import './styles/Default.css';

const Toppages = ({ classToRemove }) => {
    const fadeOut = () => {
        var fadeTarget = document.getElementsByClassName(classToRemove)[0];
        var fadeEffect = setInterval(function () {
            if (!fadeTarget.style.opacity) {
                fadeTarget.style.opacity = 1;
            }
            if (fadeTarget.style.opacity > 0) {
                fadeTarget.style.opacity -= 0.1;
            } else {
                clearInterval(fadeEffect);
                fadeTarget.parentNode.removeChild(fadeTarget);
            }
        }, 200);
    };
    return (
        <>
            <div className="toppagead">
                <div className="banner_advertise_toppage">
                    <iframe
                        className="coinzilla_iframe"
                        src="https://playtoearn.net/coinzilla/stickyx90_euro2020_feed.html"
                        height="90"
                        width="100%"
                        title="Coinzilla"
                    ></iframe>
                    <div className="coinzilla_iframe_link"></div>
                </div>
                <div className="banner_advertise_toppage_close" onClick={() => fadeOut('toppagead')}>
                    <i className="fas fa-times"></i>
                </div>
            </div>
            <div className="toppagetextad">
                <div className="banner_advertise_toppagetext">
                    <div>
                        <a
                            target="_blank"
                            rel="nofollow noopener sponsored noreferrer"
                            href="https://lightnite.io/ref=play2earncrypto"
                        >
                            20% Discount: Sign up now for the Battle Royale Bitcoin Game
                            LightNite
                        </a>
                    </div>
                </div>
                <div className="banner_advertise_toppagetext_close" onClick={() => fadeOut('toppagetextad')}>
                    <i className="fas fa-times"></i>
                </div>
            </div>
        </>
    );
};

export default Toppages;
