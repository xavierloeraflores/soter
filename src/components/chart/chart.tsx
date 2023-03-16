import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from "recharts"

export interface ChartDataPoint {
    time:string
    price:number
}
interface ChartProps {
    name:string
    chartData: Array<ChartDataPoint> 
}

const Chart: React.FC<ChartProps> = ({name, chartData})=>{
    return (
        <ResponsiveContainer width="100%" height={500}>
            <LineChart width={600} height={300} data={chartData}>
                <Label value={name}/>
                <Line dataKey="time" type="monotone" animationDuration={2200} stroke="#ff0000" dot={false} key={0}/>
                <Line dataKey="price" type="monotone" animationDuration={2200} stroke="#ff0000" dot={false} key={1}/>
                <XAxis dataKey="time" stroke="#8884d8"/>
                <YAxis dataKey="price" type="number" stroke="#8884d8" domain={['dataMin', 'dataMax']}/>
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    )

}

export default Chart;




// Example data
// const testDate = new Date()

// const ChartProps = {
//     name:"Bitcoin",
//     chartData:[
//         {time:new Date('2022-01-01').toDateString(), price:1.55},
//         {time:new Date('2022-01-02').toDateString(), price:1.6},
//         {time:new Date('2022-01-03').toDateString(), price:1.95},
//         {time:new Date('2022-01-04').toDateString(), price:2.55},
//     ]

// }

