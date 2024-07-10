// https://api.coindesk.com/v1/bpi/currentprice.json

const CurrentPrice = require('axios');
CurrentPrice.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((PriceRespone) => {
        console.log('Current Price is :', PriceRespone);
    }).catch((error) => {
        console.log(error);
    })

// async function a(){
//     let x = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
//     let y = await x.json()
//     console.log(y);
// }
// a();