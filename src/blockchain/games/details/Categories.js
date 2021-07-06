import React from 'react';

const Categories = ({ categories }) => {
    return (
        <div className="dapp_categories" >
            {categories && categories.length > 0 && categories.map((category, index) => (
                <a
                    href="https://playtoearn.net/blockchaingames/All-Blockchain/Card/All-Status/All-Device/All-NFT/All-PlayToEarn"
                    key={index}
                >
                    {category}
                </a>
            ))}
        </div>
    );
};

export default Categories;
