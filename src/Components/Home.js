import { useEffect, useRef, useState } from "react";
import { UtilityFunctions } from "../UtilityFunctions";
import { AQITable } from "./AQITable";
import { Modal } from 'antd';

export const Home = () => {
    const ws = new WebSocket('wss://city-ws.herokuapp.com/')
    const [aqiData, setAQIData] = useState({});
    const prevAQIData = useRef({});

    const connectToWS = () => {
        const utilityFunction = new UtilityFunctions();
    
        ws.onopen = () => {
            console.log('connected to ws')
        }
        
        ws.onmessage = (response) => {
                if(Object.keys(prevAQIData.current).length === 0) {
                    let aqiObj = Object.assign({});
                    JSON.parse(response.data).map(item => aqiObj[item.city] = utilityFunction.addNewAQI(item))
                      
                    prevAQIData.current = Object.assign({},aqiObj);
                    console.log('First',prevAQIData.current)
                    setAQIData(Object.assign({},aqiObj));
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
        ws.onclose = (e) => {
            console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
            setTimeout(function() {
                connectToWS();
            }, 1000);
        }
        ws.onerror = err => {
            console.error(
                "Socket encountered error: ",
                err.message,
                "Closing socket"
            );

            ws.close();
        }
        
    }


    useEffect(() => {
        connectToWS()    
    },[])
    
    
    return (
        <div>
           <AQITable data = {aqiData} />
        </div>
    )
}
