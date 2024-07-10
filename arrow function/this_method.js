const UserDetails = {
    name: 'HarshilThummar',
    price: 1999,
    WelcomeMessage: function () {
        console.log(`${this.name} , your course price is ${this.price}`);
    }
}

UserDetails.WelcomeMessage();
UserDetails.name = 'SahilPatel'
UserDetails.WelcomeMessage();