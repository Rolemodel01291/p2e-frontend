import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        color: theme.palette.primary.main,
        textAlign: "center"
    },
}));

const List = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <h1>Top 50 Blockchain Games List</h1>
        </div>
    );
};

export default (List);
