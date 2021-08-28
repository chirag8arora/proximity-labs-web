export function UtilityFunctions() {

    this.addNewAQI = (item) => {
        return Object.assign({},{
                aqi : parseFloat(item.aqi).toFixed(2),
                timeToDisplay : 'updated just now',
                timeUpdated : new Date()
            }
        )
    }
    
    this.addToExisitingAQI = (prevItemObj, currItemObj) => {
        //if(prevItemObj.aqi.count >= 15) prevItemObj.aqi.shift(1)
        return {
            //aqi : prevItemObj.aqi.push(parseFloat(currItemObj.aqi).toFixed(2)),
            aqi : parseFloat(currItemObj.aqi).toFixed(2),
            timeToDisplay : 'updated just now',
            timeUpdated : new Date()
        }
    }
    this.updateExistingAQI = (item) => {
        return {
            aqi : item.aqi,
            timeToDisplay : this.updateTimeDisplay(item.timeUpdated),
            timeUpdated : item.timeUpdated
        }
    }
    
    this.updateTimeDisplay = (prevDate, currentDate = new Date()) => {
        const datetimeDiff = (currentDate.getTime() - prevDate.getTime()) / 1000;
        //if(datetimeDiff < 60) return 'a few seconds ago'
        if(datetimeDiff < 60) return "updated " +(Math.floor(datetimeDiff) + " seconds ago");
        else if(datetimeDiff >= 60 && datetimeDiff < 120) return "updated 1 minute ago";
        else if(datetimeDiff >= 120 && datetimeDiff < 300) return "updated " + (Math.floor(datetimeDiff / 60) + " minutes ago");
        else return prevDate.toLocaleTimeString().toString();
    }
}