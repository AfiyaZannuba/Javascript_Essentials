let programmer = {
    name: "steve",
    preferredLanguage: "Javascript",
    writeCode: function () {
        console.log(`${this.name} writes ${this.preferredLanguage} code.`);
    },
    drinksCoffee() {
        console.log(`${this.name} drinks coffee`);
    }
}

programmer.writeCode();
programmer.drinksCoffee();