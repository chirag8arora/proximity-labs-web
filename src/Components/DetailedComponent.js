import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

export const DetailedComponent = ({data, selectedCity}) => {
    console.log('data',data[selectedCity]);
    const dataToLoad = [];
    data[selectedCity].aqi.split('-').map(val => {
        dataToLoad.push({aqi : val})
    })

    return (
        <div className = 'model-container'>
            <h3>Live AQI Data : {selectedCity}</h3>
            <hr />
            <LineChart width={600} height={400} data={dataToLoad}margin={{top: 20, right: 20, bottom: 20, left: 20}} >
                <XAxis />
                <YAxis dataKey="aqi" type="number" domain={['dataMin', 'dataMax+10']}  />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="aqi" stroke="#8884d8" />
            </LineChart>
        </div>
    );
}