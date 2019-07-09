
function isBarcodesValid (barcodes,database) {
    var flag = false;
    for(let i = 0,len = barcodes.length; i < len;i++){
        for(let j in database){
            if(database[j].id.match(barcodes[i])){
                flag = true;
                break;
            }
            else{
                flag = false;
            }
        }
    }
    return flag;
}

function countPriceByBarcodes (barcodes,database){
    var printInfo = new Object();
    for(let i = 0,len = barcodes.length; i < len;i++){
        for(let j in database){
            if(database[j].id.match(barcodes[i])){
                let name = database[j].name;
                let price = database[j].price;
                let temp = printInfo[name]+"";
                if(temp.indexOf('-') == -1){
                    //第一次添加物品
                    printInfo[name] = price+"-1";
                }
                else{
                    //已经有这个物品
                    let count = parseInt(temp.split('-')[1]);
                    let sum = parseInt(temp.split('-')[0]);
                    count = count + 1;
                    printInfo[name] = price + "-" + count;
                }
            }
        }
    }
    //return JSON.stringify(printInfo);
    return printInfo;
}

function printReceiptsByBarcodes(printInfo){
    var sum = 0;
    var msg = "Receipts\n------------------------------------------------------------\n";
    for(let i in printInfo){
        let temp = printInfo[i];
        let price = parseInt(temp.split('-')[0]);
        let count = parseInt(temp.split('-')[1]);
        sum += price*count;
        msg += i + " "+price + " "+count+"\n";
    }
    msg += "------------------------------------------------------------\nPrice: "+sum;
    console.log(msg);
    return msg;
}

module.exports = {isBarcodesValid,countPriceByBarcodes,printReceiptsByBarcodes};