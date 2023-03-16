import Chart, { ChartDataPoint } from "../chart/chart"



const testDate = new Date()

const ChartProps = {
    name:"Bitcoin",
    chartData:[
        {time:new Date('2022-01-01').toDateString(), price:1.55},
        {time:new Date('2022-01-02').toDateString(), price:1.6},
        {time:new Date('2022-01-03').toDateString(), price:1.95},
        {time:new Date('2022-01-04').toDateString(), price:2.55},
    ]

}


const Sandbox: React.FC = () =>{
    return(<div>
        Chart
        <Chart  {...ChartProps}/>
    
    </div>
    )
}
export default Sandbox