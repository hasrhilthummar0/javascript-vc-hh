// const PromiseOne = new Promise(function (resolve, reject) {
//     let a = setTimeout(function () {
//         console.log('helllo harshill');
//         // resolve();
//         resolve();
//     }, 1000)
// })

// // .then => resolve

// PromiseOne.then(function () {
//     console.log('Promise Consumed');
// })

// const SecondPromise = new Promise(function (resolve, reject) {
//     let surname = setTimeout(function () {
//         console.log('hello anjali');
//         resolve();
//     }, 1000)
// }).then(function () {
//     console.log('sucessfully done !!!');
// })

// const ThirdPromis = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({
//             UserName: 'ThummarHarshil',
//             email: 'hthummar540@gmail.com',
//             MobileNo: 12125151
//         })
//     }, 1000)
// }).then(function (PersonalDetail) {
//     console.log(PersonalDetail);
// })

// const FourPromise = new Promise(function (resolve, reject) {
//     let error = false;
//     if (!error) {
//         resolve({
//             username: 'harshilThummar',
//             password: '1212'
//         })
//     }
//     else {
//         reject('ERROR : Somthing Went Wrong...')
//     }
// })

// FourPromise.then((user) => {
//     return user.username;
// }).then((username) => {
//     console.log(username);
// }).catch(function (error) {
//     console.log(error);
// }).finally(() => console.log('error give by compiler'))


const FivePromise = new Promise(function (resolve, reject) {
    let error = false;
    if (!error) {
        resolve({
            username: 'harshilThummar',
            password: '1212'
        })
    }
    else {
        reject('ERROR : Somthing Went Wrong...')
    }
})

async function harshil(){
    try {
         let store =  await FivePromise;
         console.log(store);
    }
    catch(error){
        console.log(error);
    }
}
harshil();