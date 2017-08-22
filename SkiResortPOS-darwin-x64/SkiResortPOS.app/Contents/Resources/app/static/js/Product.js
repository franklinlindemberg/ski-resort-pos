var stringify  = require('node-stringify');

/*
Class that represents each product from product.csv
 */

class Product{
    constructor(category, product, column, row, price){
        this.category = category;
        this.product = product;
        this.column = column;
        this.row = row;
        this.price = price;
    }

    toString(){
        return `${this.category}, ${this.product}, ${this.column}, ${this.row}, ${this.price}`;
    }

    /*
    Static method that returns all products divs based in an array of product
    @param categories: array of product
     */
    static LoadDiv(category, products){
        if(!products[category]) return "";
        return products[category].map(function(product){
            return product.GetDiv();
        }).join('');
    }

    /*
    Method that returns a product div based in the product and price of the object
     */
    GetDiv() {
        return  `<div class="col-md-3 product" onclick="OnProductClick(${stringify(this.product)}, '${this.price}')">
                    <span> <b>${this.product}</b> </span>
                    <div class="price"><span> $${parseFloat(this.price).toFixed(2)} </span></div>
                </div>`;
    }
}

module.exports = Product;