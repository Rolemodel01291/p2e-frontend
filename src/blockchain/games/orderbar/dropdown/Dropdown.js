import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';

import { NativeSelect, withStyles } from '@material-ui/core';

const MyNativeSelect = withStyles({
    root: {
        width: 100
    }
})(NativeSelect);

const Dropdown = ({ type, listName, match }) => {
    const {
        platform,
        category,
        status,
        device,
        nft,
        p2e,
        f2p,
    } = match.params;
    const history = useHistory();
    const [selectedCategory, setSelectedCategory] = useState(category ? category : 'All-Action');
    const [selectedPlatform, setSelectedPlatform] = useState(platform ? platform : 'All-Blockchain');
    const [selectedDevice, setSelectedDevice] = useState(device ? device : 'All-Device');
    const [selectedStatus, setSelectedStatus] = useState(status ? status : 'All-Status');
    const [selectedNFT, setSelectedNFT] = useState(nft ? nft : 'All-NFT');
    const [selectedF2P, setSelectedF2P] = useState(f2p ? f2p : 'All-F2P');
    const [selectedP2E, setSelectedP2E] = useState(p2e ? p2e : 'All-P2E');
    const value = () => {
        if (listName === "category") return selectedCategory;

        if (listName === "platform") return selectedPlatform;

        if (listName === "device") return selectedDevice;

        if (listName === "status") return selectedStatus;

        if (listName === "nft") return selectedNFT;

        if (listName === "f2p") return selectedF2P;

        return selectedP2E;
    };
    const handleChange = (e) => {
        if (listName === "category") {
            setSelectedCategory(e.target.value);
            redirect({
                plat: selectedPlatform,
                cat: e.target.value,
                stat: selectedStatus,
                dev: selectedDevice,
                nf: selectedNFT,
                p2: selectedP2E,
                f2: selectedF2P
            });
        }
        if (listName === "platform") {
            setSelectedPlatform(e.target.value);
            redirect({
                plat: e.target.value,
                cat: selectedCategory,
                stat: selectedStatus,
                dev: selectedDevice,
                nf: selectedNFT,
                p2: selectedP2E,
                f2: selectedF2P
            });
        }
        if (listName === "device") {
            setSelectedDevice(e.target.value);
            redirect({
                plat: selectedPlatform,
                cat: e.target.value,
                stat: selectedStatus,
                dev: e.target.value,
                nf: selectedNFT,
                p2: selectedP2E,
                f2: selectedF2P
            });
        }
        if (listName === "status") {
            setSelectedStatus(e.target.value);
            redirect({
                plat: selectedPlatform,
                cat: selectedCategory,
                stat: e.target.value,
                dev: selectedDevice,
                nf: selectedNFT,
                p2: selectedP2E,
                f2: selectedF2P
            });
        }
        if (listName === "nft") {
            setSelectedNFT(e.target.value);
            redirect({
                selectedPlatform,
                cat: e.target.value,
                selectedStatus,
                dev: selectedDevice,
                nf: e.target.value,
                p2: selectedP2E,
                f2: selectedF2P
            });
        }
        if (listName === "f2p") {
            setSelectedF2P(e.target.value);
            redirect({
                plat: selectedPlatform,
                cat: selectedCategory,
                selectedStatus,
                dev: selectedDevice,
                nf: selectedNFT,
                p2: selectedP2E,
                f2: e.target.value
            });
        }
        if (listName === "p2e") {
            setSelectedP2E(e.target.value);
            redirect({
                plat: selectedPlatform,
                cat: e.target.value,
                stat: selectedStatus,
                dev: selectedDevice,
                nf: selectedNFT,
                p2: e.target.value,
                f2: selectedF2P
            });
        }
    };

    const redirect = (props) => {
        history.push(`/blockchaingames/${props?.plat}/${props?.cat}/${props?.stat}/${props?.dev}/${props?.nf}/${props?.p2}/${props?.f2}`);
    };

    return (
        <div className={`dropdown-${listName}`}>
            <i className="sorticons fa fa-box"></i>
            <MyNativeSelect
                disableUnderline={true}
                className="select2default select2beforeload"
                value={value()}
                onChange={(e) => handleChange(e)}
                data-live-search="true"
            >
                {type && type.length > 0 && type.map((order, index) => {
                    return <option
                        value={order}
                        key={index}
                    >
                        {order}
                    </option>;
                })}
            </MyNativeSelect>
        </div>

    );
};

export default withRouter(Dropdown);
