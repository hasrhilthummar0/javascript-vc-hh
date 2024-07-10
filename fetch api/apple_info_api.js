const StoreApi = require('axios');
// https://api.restful-api.dev/objects -- 
StoreApi.get('https://api.restful-api.dev/objects')
    .then((respone) => {
        console.log('your data is : ', respone.data);
    })
    .catch((error) => {
        console.log(error);
    })

// async function datainfo(){
//     const data1 = await fetch('https://api.restful-api.dev/objects')
//     const res = await data1.json() 
//     console.log(res);
// }

// datainfo();