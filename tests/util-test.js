var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Util = require('./../static/js/Util.js');

describe('Util', function() {
    it('LoadCategories() should correctly load categories.csv file', function() {
        return Util.LoadCategories()
            .then(function(categories){
                expect(categories.length).to.equal(12);
            })
    });

    it('LoadProducts() should correctly load products.csv file', function() {
        return Util.LoadProducts()
            .then(function(products){
                expect(products.length).to.equal(223);
            })
    });

});