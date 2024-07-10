const ThirdPromis = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            UserName: 'ThummarHarshil',
            email: 'hthummar540@gmail.com',
            MobileNo: 12125151
        })
    }, 1000)
}).then(function (PersonalDetail) {
    console.log(PersonalDetail);
})