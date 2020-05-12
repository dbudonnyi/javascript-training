// ================================
// Решение 1
// ================================

const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryAction1 = function(itemName, action, obj) {
  console.log(`Invoking action on ${itemName}`);
  action.call(obj, itemName);
};

invokeInventoryAction1('Medkit', inventory.add, inventory);
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction1('Gas mask', inventory.remove, inventory);
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']

// ================================
// Решение 2
// ================================

const inventory2 = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryAction2 = function(action) {
  console.log(`Invoking action on ${action.itemName}`);
  action.call();
};

invokeInventoryAction2(inventory2.add.bind(inventory2, 'Medkit'));
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory2.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction2(inventory2.remove.bind(inventory2, 'Gas mask'));
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory2.items); // ['Knife', 'Medkit']
