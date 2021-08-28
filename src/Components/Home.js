import { useEffect, useRef, useState } from "react";
import { UtilityFunctions } from "../UtilityFunctions";
export const Home = () => {
    const ws = new WebSocket('ws://city-ws.herokuapp.com/')
    const [aqiData, setAQIData] = useState({});
    const prevAQIData = useRef({});

    useEffect(() => {
        const utilityFunction = new UtilityFunctions();
    
        ws.onopen = () => {
            console.log('connected to ws')
        }
        
        ws.onmessage = (response) => {
                if(Object.keys(prevAQIData.current).length === 0) {
                    let aqiObj = {};
                    JSON.parse(response.data).map(item => aqiObj[item.city] = utilityFunction.addNewAQI(item)
                    )
                    prevAQIData.current = aqiObj;
                    console.log('First time', aqiObj)
                    setAQIData(aqiObj);
                }
                else 
                {
                    const aqiObjCurr = {};
                    const aqiObjPrev = prevAQIData.current;
                    JSON.parse(response.data).map((item) => aqiObjCurr[item.city] = utilityFunction.addNewAQI(item))
                    Object.keys(aqiObjPrev).map(k => {
                        if(k in aqiObjCurr) aqiObjPrev[k] = utilityFunction.addToExisitingAQI(aqiObjPrev[k], aqiObjCurr[k])
                        else aqiObjPrev[k] = utilityFunction.updateExistingAQI(aqiObjPrev[k])
                    })
                    Object.keys(aqiObjCurr).map(k => {
                       if(!(k in aqiObjPrev)) aqiObjPrev[k]= aqiObjCurr[k]
                    })
                    prevAQIData.current = aqiObjPrev;
                    setAQIData(Object.assign({},aqiObjPrev));
                }
        }
        ws.onclose = () => {
            console.log('disconnected')
        }
        
    },[])
    
    
    return (
        <div>
            <table>
                <th>City</th>
                <th>AQI</th>
                <th>Last Updated at</th>
                {Object.keys(aqiData).map(k => {
                    return (
                        <tr>
                            <td>{k}</td>
                            <td>{aqiData[k].aqi}</td>
                            <td>{aqiData[k].timeToDisplay}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    )
}
