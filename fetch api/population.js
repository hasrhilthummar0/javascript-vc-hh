// https://datausa.io/api/data?drilldowns=Nation&measures=Population

const PopulationData = require('axios');
PopulationData.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population').then((Response) => {
    console.log('Population :', Response.data);
}).catch((Error) => {
    console.log(Error);
})

async function Population() {
    const a = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    const b = await a.json();
    console.log(b);
}
Population();