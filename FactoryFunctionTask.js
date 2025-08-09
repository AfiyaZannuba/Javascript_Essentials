function groceryList(name, quantity) {
    return {
        name,
        quantity,
        displayList() {
            console.log(`${name} : ${quantity}`)
        }
    }
}

const newList = groceryList("Apple", 4);
newList.displayList();