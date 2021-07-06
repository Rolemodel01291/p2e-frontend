import React from 'react';

const Headline = ({ gameSelected: { name, rank, updated, status } }) => {
    return (
        <>
            <div>
                <div className="headline-dapp">
                    <h1>{name}</h1>
                    <div className="rank_container_float">
                        <span className="total_rank rank">#{rank}</span>
                    </div>
                </div>
            </div>

            <div className="updated">
                Updated: {updated}
                <a
                    href="https://playtoearn.net/blockchaingames/All-Blockchain/All-Genre/Beta/All-Device/All-NFT/All-PlayToEarn"
                    className="status"
                    style={{ color: '#ffb700', border: '1px solid #ffb700' }}
                >{status}</a                                        >
            </div>
        </>
    );
};

export default Headline;
