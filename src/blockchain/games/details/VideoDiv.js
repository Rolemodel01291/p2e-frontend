import React from 'react';

const VideoDiv = () => {
    return (
        <>
            <div className="dappvideo-container loaded">
                <div className="init-loader-container">
                    <img className="init-loader" src="https://playtoearn.net/img/general/preloader.png" alt="loading" data-nsfw-filter-status="sfw" style={{ visibility: 'visible'}}/>
                </div>
                <iframe loading="lazy" title="gamevideo" className="lazy dappvideo" allowfullscreen="" src="https://www.youtube.com/embed/juwIwjCRxGI"></iframe>
            </div>
        </>
    );
};

export default VideoDiv;