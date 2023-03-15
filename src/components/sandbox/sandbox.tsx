import Chart from "../chart/chart"

const ChartData = {
    name:"Bitcoin"
}


const Sandbox: React.FC = () =>{
    return(<div>
        <Chart  {...ChartData}/>
    
    </div>
    )
}
export default Sandbox