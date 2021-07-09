import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
    Chart,
    LineSeries,
} from "@devexpress/dx-react-chart-material-ui";


const Graph = ({data}) => {
    // const [chartData] = data;
    return (
        <>
        {data? <Paper>
            <Chart data={data} height="100" width="100">
               <LineSeries valueField="price" argumentField="date" />
           </Chart>
        </Paper> : 'No Data'}
         
        </>
    );
}; 

export default Graph;

  
