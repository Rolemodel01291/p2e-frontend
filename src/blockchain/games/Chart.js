import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
    Chart,
    LineSeries,
} from "@devexpress/dx-react-chart-material-ui";


import { bitcoin as data } from "../../data/data-vizualization";

export default class Demo extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data
        };
    }

    render() {
        const { data: chartData } = this.state;

        return (
            <Paper>
                <Chart data={chartData} height="100" width="100">
                    <LineSeries valueField="price" argumentField="date" />
                </Chart>
            </Paper>
        );
    }
}
