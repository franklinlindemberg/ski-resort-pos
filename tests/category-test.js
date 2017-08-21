var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Category = require('./../static/js/Category.js');

describe('Category', function() {
    it('constructor() should correctly assign input parameters to the class variables', function() {
        let category = new Category("category");
        expect(category.category).to.equal("category");
    });

    it('constructor() should correctly assign and parse input parameters to the class variables', function() {
        let category = new Category("it's category");
        expect(category.category).to.equal("it\\'s category");
    });

    it('toString() should correctly return all class variables in one string', function() {
        let category = new Category("category");
        expect(category.toString()).to.equal("category");
    });

    it('LoadDiv() should correctly return the html string when the category key exist in products object', function() {
        let category = new Category("category");

        let result = `<div class="col-md-12 category" onclick="OnCategoryClick(this, '${category}')">
            <span> <b>${category}</b> </span>
        </div>`;
        expect(Category.LoadDiv([category])).to.equal(result);
    });
});