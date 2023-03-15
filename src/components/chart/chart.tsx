interface ChartData {
    name:string
}

const Chart: React.FC<ChartData> = ({name})=>{

    return (
        <div>
        {name}
        </div>
    )

}

export default Chart;