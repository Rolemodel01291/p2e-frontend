import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import {
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@material-ui/core';

import Head from './table/Head';
import Body from './table/Body';

const useStyles = makeStyles((theme) => ({
    table: {
        backgroundColor: theme.palette.primary.backgroundColor,
        color: theme.palette.primary.main,
        minWidth: 650,
    },
}));

export default function GamesTable() {
    const classes = useStyles();
    const rows = useSelector((state)=>state.games.rows);
    const columns = useSelector((state)=>state.games.columns);

  


    return (
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <Head columns={columns} />
                    </TableRow>
                </TableHead>
                <TableBody>
                    <Body rows={rows} />
                </TableBody>
            </Table>
        </TableContainer >
    );
}
