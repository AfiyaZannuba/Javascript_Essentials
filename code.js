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

function ProgrammerFunction(name, preferredLanguage) {
    return {
        name,
        preferredLanguage,
        writeCode: function () {
            console.log(`${name}`);
        }
    }
}

const newFunction = ProgrammerFunction("Afiya", "React");
newFunction.writeCode();


