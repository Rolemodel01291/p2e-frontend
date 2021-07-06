import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Games from '../../GamesTable';
import Navbar from '../../Navbar';
import Headbar from '../../Headbar';
import List from '../../List';
import Orderbar from './Orderbar';
import Toppages from '../../Toppages';
import Footer from '../../Footer';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.primary.backgroundColor,
        color: theme.palette.primary.main,
        padding: '1rem'
    },
}));

const SelectedDropdown = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Toppages />
            <Navbar />
            <Headbar />
            <List />
            <Orderbar />
            <Games />
            <Footer />
        </div>
    );
};

export default SelectedDropdown;
