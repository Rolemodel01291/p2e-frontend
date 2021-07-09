import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    fetchDetailData,
} from '../../games/gamesSlice';
import Detail from './Detail';
import Toppages from "../Toppages";
import Navbar from "../Navbar";
import Headbar from "../Headbar";
import List from "../List";
import Footer from "../Footer";
import './styles/Default.css';
const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.primary.backgroundColor,
        color: theme.palette.primary.main,
        padding: '1rem'
    },
}));
const GameDetails = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const routeParams = useParams();
    const detail = useSelector((state)=>state.games.detail)

    useEffect(() => {
        dispatch(fetchDetailData(routeParams.id));	
	}, [dispatch, routeParams]);
    
    return (
        <div className="details">
            <div className={classes.container}>
                <div>
                    <Toppages />
                    <Navbar />
                    <Headbar />
                    <List />
                    <Detail detail={detail}/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default GameDetails;
