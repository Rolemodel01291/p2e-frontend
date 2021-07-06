import React, { useEffect } from 'react';

import Dropdown from './orderbar/dropdown/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


import {
    fetchNewGameAsync,
    fetchGamesRowsAsync
} from './gamesSlice';
import {
    category,
    platform,
    device,
    status,
    nft,
    f2p,
    p2e,
} from '../../data/orderList';

import './styles/Games.css';

const Orderbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const dropdownTypes = [
        { list: category, listName: "category" },
        { list: platform, listName: "platform" },
        { list: device, listName: "device" },
        { list: status, listName: "status" },
        { list: nft, listName: "nft" },
        { list: f2p, listName: "f2p" },
        { list: p2e, listName: "p2e" },
    ];
    const [isNew, setIsNew] = React.useState(false);
    // React.useEffect(() => {
    //     if (isNew) history.push('/new-blockchaingames');

    //     // if (!isNew) history.push('/blockchaingames');
    // }, [history, isNew]);

    useEffect(() => {
        filterNew();
    }, [isNew])

    const switchNew = (e) => {
        setIsNew(e.target.checked);
       
    }

    const filterNew = () =>{
        if (isNew) {
            dispatch(fetchNewGameAsync());
        } else {
            dispatch(fetchGamesRowsAsync());
        }
    }


    return (
        <div className="orderbar" style={{ marginBottom: '1rem', visibility: 'visible' }}>
            {
                dropdownTypes && dropdownTypes.length > 0
                && dropdownTypes.map((type, index) => <Dropdown key={index} type={type.list} listName={type.listName} />)
            }

            <div div className="order-new" >
                <div className="inner-order-new">
                    <span className="order-new-new">New</span>
                    <label className="switch">
                        <input type="checkbox" aria-label="NewEntries" name="newList" checked={isNew} onChange={(e)=> switchNew(e)} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Orderbar;
