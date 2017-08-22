var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Product = require('./../static/js/Product.js');

describe('Product', function() {
    it('constructor() should correctly assign input parameters to the class variables', function() {
        let product = new Product("category", "product", "column", "row", "price");
        expect(product.category).to.equal("category");
        expect(product.product).to.equal("product");
        expect(product.column).to.equal("column");
        expect(product.row).to.equal("row");
        expect(product.price).to.equal("price");
    });

    it('toString() should correctly return all class variables in one string', function() {
        let product = new Product("category", "product", "column", "row", "price");
        expect(product.toString()).to.equal("category, product, column, row, price");
    });

    it('LoadDiv() should correctly return an empty string when the category key doesnt exist in products object', function() {
        let products = {};
        let category =  "category";
        expect(Product.LoadDiv(category, products)).to.equal("");
    });

    it('LoadDiv() should correctly return the html string when the category key exist in products object', function() {
        let category =  "category";
        let products = {};
        let product = new Product("category", "product", "column", "row", "1");
        products[category] = [product];

        let result = `<div class="col-md-3 product" onclick="OnProductClick('${products.category[0].product}', '${products.category[0].price}')">
                    <span> <b>${products.category[0].product}</b> </span>
                    <div class="price"><span> $${parseFloat(products.category[0].price).toFixed(2)} </span></div>
                </div>`;
        expect(Product.LoadDiv(category, products)).to.equal(result);
    });
});