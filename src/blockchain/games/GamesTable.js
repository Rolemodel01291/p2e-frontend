import React, { useState, useMemo, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
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
import { SelectionState } from '@devexpress/dx-react-chart';

const useStyles = makeStyles((theme) => ({
    table: {
        backgroundColor: theme.palette.primary.backgroundColor,
        color: theme.palette.primary.main,
        minWidth: 650,
    },
}));

export default function GamesTable() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const total_count = useSelector((state)=>state.games.total_count);
    const rows = useSelector((state)=>state.games.rows);
    const columns = useSelector((state)=>state.games.columns);

    // const [columns, setColumns] = useState([]);
    // const [rows, setRows] = useState([]);

    


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
