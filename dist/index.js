"use strict";
// 2. Class implementing IMagicalItem
class MagicalItem {
    constructor(name, type, powerLevel, isRare) {
        this.name = name;
        this.type = type;
        this.powerLevel = powerLevel;
        this.isRare = isRare;
    }
    displayInfo() {
        const message = `${this.name} is a ${this.isRare ? 'rare' : 'common'} ${this.type} with ${this.powerLevel} power`;
        console.log(message);
    }
}
// Function to compare power levels of two items
function comparePower(item1, item2) {
    if (item1.powerLevel > item2.powerLevel) {
        return item1.name;
    }
    return item2.name;
}
// Generic class for inventory
class Inventory {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
// Example items
const bootsOfWisdom = new MagicalItem('Boots of Wisdom', 'armor', 9001, false);
const helmetOfSpeed = new MagicalItem('Helmet of Speed', 'armor', 9005, true);
// Create inventory and add items
const inventory = new Inventory();
inventory.add(bootsOfWisdom);
inventory.add(helmetOfSpeed);
// Display all item info
const items = inventory.getAll();
for (const item of items) {
    item.displayInfo();
}
// Compare power levels
const higher = comparePower(bootsOfWisdom, helmetOfSpeed);
console.log('higher:', higher);
// Access property using keyof
