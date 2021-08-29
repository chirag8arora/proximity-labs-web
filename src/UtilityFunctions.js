export function UtilityFunctions() {
    this.colorMap = {
        0 : '#55a84f',
        1 : '#a3c853',
        2 : '#fff833',
        3 : '#fff833',
        4 : '#f29c33',
        5 : '#f29c33',
        6 : '#e93f33',
        7 : '#e93f33',
        8 : '#af2d24',
        9 : '#af2d24',
    }
    
    this.addNewAQI =  (item) => {
        return  {
                aqi : parseFloat(item.aqi).toFixed(2).toString(),
                timeToDisplay : 'updated just now',
                timeUpdated : new Date(),
                color : this.colorMap[Math.floor(item.aqi / 50)]
            }
    }
    
    this.addToExisitingAQI = (prevItemObj, currItemObj) => {
        
        const split_arr = prevItemObj.aqi.split('-')
        if(split_arr.length >=10) split_arr.shift(1);
        split_arr.push(parseFloat(currItemObj.aqi).toFixed(2))
        return {
            aqi : split_arr.join('-'),
            timeToDisplay : 'updated just now',
            timeUpdated : new Date(),
            color : this.colorMap[Math.floor(currItemObj.aqi / 50)]
        }
    }
    this.updateExistingAQI = (item) => {
        return {
            aqi : item.aqi,
            timeToDisplay : this.updateTimeDisplay(item.timeUpdated),
            timeUpdated : item.timeUpdated,
            color : this.colorMap[Math.floor(item.aqi.split('-').pop() / 50)]
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