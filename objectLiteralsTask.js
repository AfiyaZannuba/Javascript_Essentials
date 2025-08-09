const grocery = {
    name: "Apple",
    quantity: 4,
    display: function () {
        console.log(`${this.quantity} x ${this.name}`);
    }

}

grocery.display();