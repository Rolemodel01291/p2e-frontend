import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { NativeSelect, withStyles, makeStyles } from '@material-ui/core';

import { changeMode, changeLanguage, changeCurrency } from '../../app/reducers/ui.js';
import { currencyList } from '../../data/currencyList';

import './styles/Header.css';
import './styles/Default.css';

// MUI Component customization
const MyNativeSelect = withStyles({
    root: {
        width: 100
    }
})(NativeSelect);

const useStyles = makeStyles({
    nav: {
        borderBottom: "1px solid rgba(0,0,0,.125)!important",
        borderLeft: "1px solid rgba(0,0,0,.125)!important",
        borderRight: "1px solid rgba(0,0,0,.125)!important",
        boxShadow: "0 1px 2px rgb(107 164 222), 0 -1px 5px #122958",
        paddingLeft: "15px",
        paddingRight: "15px",
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box"
    }
});

const Navbar = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [mode, setMode] = useState('light');
    const [language, setLanguage] = useState('en');
    const [currency, setCurrency] = useState('USD');

    const handleModeChange = () => {
        if (mode === 'light') setMode('dark');
        if (mode === 'dark') setMode('light');
    };
    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };
    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
    };
    useEffect(() => {
        dispatch(changeMode(mode));
        dispatch(changeLanguage(language));
        dispatch(changeCurrency(currency));
    }, [dispatch, mode, language, currency]);

    return (
        <nav className={`navbar navbar-expand-lg ${classes.nav}`}>
            <div className="navbar-collapse collapse show" id="navbarSupportedContent">
                <span className="mr-auto"> </span>
                <div
                    className="multi-language"
                    style={{ display: "block" }}
                >
                    <MyNativeSelect
                        className="select2default select2beforeload select2-hidden-accessible"
                        id="multi-language"
                        tabIndex="-1"
                        aria-hidden="true"
                        disableUnderline={true}
                        value={language}
                        onChange={(e) => handleLanguageChange(e)}
                    >
                        <option value="en">English</option>
                        <option value="de">Deutsch</option>
                        <option value="id">Bahasa Indonesia</option>
                    </MyNativeSelect>
                </div>
                <div className="multi-currency" style={{ display: "block" }}>
                    <MyNativeSelect
                        className="select2default select2beforeload select2-hidden-accessible"
                        id="multi-currency"
                        tabIndex="-1"
                        aria-hidden="true"
                        disableUnderline={true}
                        value={currency}
                        onChange={(e) => handleCurrencyChange(e)}
                    >
                        {currencyList && currencyList.length > 0 && currencyList.map((currency, index) => {
                            return <option value={currency} key={index}>{currency}</option>;
                        })}
                    </MyNativeSelect>
                </div>
                <button
                    className="btn-lg night-button"
                    aria-label="night-button"
                    type="button"
                    onClick={handleModeChange}
                    style={{ display: "block" }}>
                    <i className="far fa-moon"></i>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
