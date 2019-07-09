const Pos_Machine = require('../main');
const items = ['0001', '0003', '0005', '0003'];
const test_items = ['1001', '1003', '1005', '1003'];
const database = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];

it ('should print true when call isBarcodesValid given items', () => {
    expect(Pos_Machine.isBarcodesValid(items,database)).toBe(true);
});

it ('should print false when call isBarcodesValid given test_items', () => {
    expect(Pos_Machine.isBarcodesValid(test_items,database)).toBe(false);
});

it ('should print receipts when call printReceiptsByBarcodes given items', () => {
    expect(Pos_Machine.printReceiptsByBarcodes(Pos_Machine.countPriceByBarcodes(items,database),Pos_Machine.isBarcodesValid(items,database)))
    .toBe("Receipts\n------------------------------------------------------------\nCoca Cola 3 1\nPepsi-Cola 5 2\nDr Pepper 7 1\n------------------------------------------------------------\nPrice: 20");
});

it ('should print [ERROR]: when call printReceiptsByBarcodes given test_items', () => {
    expect(Pos_Machine.printReceiptsByBarcodes(Pos_Machine.countPriceByBarcodes(test_items,database),Pos_Machine.isBarcodesValid(test_items,database))).toBe("[ERROR]:");
});

