let inventory = [];

// Function to add items to the inventory

function addItem(name, quantity, price){
    const newItem = {
        name: name,
        quantity: quantity,
        price: price
    };

    inventory.push(newItem);
    console.log( `${name} added to the inventory.` )

}

// Function to display the current inventory

function displayInventory(){
    console.log("Inventory:");
    console.log("----------");

}


addItem("Hammer", 10, 15.99);
addItem("Screwdriver", 20, 8.99);
addItem("Wrench", 15, 12.49);

displayInventory();

