// https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

// const ApiStore = require('axios')
// ApiStore.get('https://www.cricbuzz.com/api/cricket-match/commentary/94939')
//     .then((Response) => {
//         console.log('Swiggy Data is :', Response.data)

//     })
//     .catch((Error) => {
//         console.log(Error);
//     })

async function harshil() {
    const a = await fetch('https://www.cricbuzz.com/api/cricket-match/commentary/94939')
    const b =  await a.json();
    console.log(b);
}
harshil();