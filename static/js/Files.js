var Util = require('../../static/js/Util.js');
var Category = require('../../static/js/Category.js');
var Product = require('../../static/js/Product.js');

/*
Class that represents the files loaded
 */
class Files{
    constructor(){
        this.products = {};
        this.categories = [];
    };

    /*
    Method that load all files and assign its content to the object variables
     */
    LoadAll(){
        let self = this;
        return new Promise(function(resolve, reject){
            // load categories.csv files
            Util.LoadCategories()
                .then(function(data){
                    //loop through each row to assign it to a Category object
                    for (let i = 0; i < data.length; i++){
                        self.categories.push(new Category(...data[i]));
                    }
                    //load products.csv file
                    return Util.LoadProducts();
                })
                .then(function(data){
                    //skip first line (csv header)
                    // loop through each row to assign it to a Product object
                    for (let i = 1; i < data.length; i++) {
                        if (!self.products[data[i][0]]) self.products[data[i][0]] = [];
                        self.products[data[i][0]].push(new Product(...data[i]));
                    }
                    resolve();
                });
        });
    }
}

module.exports = Files;