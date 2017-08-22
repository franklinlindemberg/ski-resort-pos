
class Util {

    static LoadCategories() {
        console.log("This file is " + __filename);
        console.log("It's located in " + __dirname);
        return PromiseCSV("/../../data/categories.csv");
    }
    static LoadProducts() {
        return PromiseCSV("/../../data/products.csv");
    }
}

/*
Function that returns a promise of the file read
 */
function PromiseCSV(path){
    return new Promise(function(resolve, reject){
        let csv = require('fast-csv');
        let records = [];
        csv
            .fromPath(__dirname + path)
            .on("data", function(data){
                if(data) records.push(data);
            })
            .on("error", function(error){
                reject(error);
            })
            .on("end", function(){
                resolve(records);
            });
    });
}

module.exports = Util;