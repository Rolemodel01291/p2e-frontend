import React from 'react';
import Grid from '@material-ui/core/Grid';

const ScoreCard = () => {
    return (
        <div className="scorecard">
            <Grid container>
                <Grid item xl={5}>
                    <div>
                        PlayToEarn Score
                        <i
                            data-html="true"
                            data-toggle="tooltip-large"
                            data-placement="bottom"
                            title="The PlayToEarn Score represents the game tests & research experiences of the playtoearn.net team up to a certain date. The P2E Score does not contain any gaming fun or anything other than PlayToEarn-relevant aspects."
                            className="far fa-question-circle"
                        ></i>
                    </div>
                    <div>9</div>
                    <div className="score">
                        <div className="progress">
                            <div
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Play-To-Earn: 4 out of 4"
                                className="progress-bar p2e_progress"
                                role="progressbar"
                                style={{ width: '40%' }}
                                aria-valuenow="40"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                            <div
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Free-To-Play: 2 out of 2"
                                className="progress-bar f2p_progress"
                                role="progressbar"
                                style={{ width: '20%' }}
                                aria-valuenow="20"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                            <div
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Pay-To-Win: 1 out of 2"
                                className="progress-bar p2w_progress"
                                role="progressbar"
                                style={{ width: '10%' }}
                                aria-valuenow="10"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                            <div
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Liquidity: 2 out of 2"
                                className="progress-bar liq_progress"
                                role="progressbar"
                                style={{ width: '20%' }}
                                aria-valuenow="20"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                    </div>
                </Grid>
                <Grid item xl={7}>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <div className="scorecardheader">
                                        <span>p2e</span>
                                        <i
                                            data-html="true"
                                            data-toggle="tooltip-large"
                                            data-placement="bottom"
                                            title='Play-To-Earn rewards<br /><br />1.) High amount of Crypto / NFT rewards = 4 &lt;i className="fas fa-check"&gt;&lt;/i&gt;<br />2.) Average amount of Crypto / NFT rewards = 3<br />3.) Low amount of Crypto / NFT rewards = 2<br />4.) No Crypto / NFT rewards = 0'
                                            className="far fa-question-circle"
                                        ></i>
                                    </div>
                                </th>
                                <th>
                                    <div className="scorecardheader">
                                        <span>f2p</span>
                                        <i
                                            data-html="true"
                                            data-toggle="tooltip-large"
                                            data-placement="bottom"
                                            title='Free-To-Play<br /><br />1.) Totally F2P = 2 &lt;i className="fas fa-check"&gt;&lt;/i&gt;<br />2.) NFT purchase required = 1<br />3.) Crypto purchase required = 0<br />4.) Game purchase required = 0'
                                            className="far fa-question-circle"
                                        ></i>
                                    </div>
                                </th>
                                <th>
                                    <div className="scorecardheader">
                                        <span>p2w</span>
                                        <i
                                            data-html="true"
                                            data-toggle="tooltip-large"
                                            data-placement="bottom"
                                            title='Pay-To-Win more rewards<br /><br />1.) No P2W reward advantage = 2<br />2.) Low P2W reward advantage = 1 &lt;i className="fas fa-check"&gt;&lt;/i&gt;<br />3.) High P2W reward advantage = 0'
                                            className="far fa-question-circle"
                                        ></i>
                                    </div>
                                </th>
                                <th>
                                    <div className="scorecardheader">
                                        <span>liquidity</span>
                                        <i
                                            data-html="true"
                                            data-toggle="tooltip-large"
                                            data-placement="bottom"
                                            title='Liquidity of Crypto & NFT rewards<br /><br />1.) Major marketplace availability + high trading volume = 2 &lt;i className="fas fa-check"&gt;&lt;/i&gt;<br />2.) Major marketplace availability + low trading volume = 1<br />3.) Small / own marketplace availability + high trading volume = 1<br />4.) Small / own marketplace availability + low trading volume = 0<br />5.) Unavailable on all marketplaces = 0'
                                            className="far fa-question-circle"
                                        ></i>
                                    </div>
                                </th>
                                <th>
                                    <div className="scorecardheader">
                                        <span>total</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>4/4</td>
                                <td>2/2</td>
                                <td>1/2</td>
                                <td>2/2</td>
                                <td>9/10</td>
                            </tr>
                        </tbody>
                    </table>
                </Grid>
                <span className="scorecard_updatedate">April 23, 2021</span>
            </Grid>
        </div>

    );
};

export default ScoreCard;
