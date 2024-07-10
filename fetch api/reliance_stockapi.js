// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=RELIANCE.BSE&outputsize=full&apikey=demo

const RelianceDailyPrice = require('axios')
RelianceDailyPrice.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=RELIANCE.BSE&outputsize=full&apikey=demo')
    .then((Response) => {
        console.log('Reliace Stock Daily Price is : ', Response.data);
    })
    .catch((error) => {
        console.log(error);
    })