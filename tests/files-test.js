var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Files = require('./../static/js/Files.js');

describe('Files', function() {
    it('constructor() should correctly assign input parameters to the class variables', function() {
        let files = new Files();
        expect(files.categories).to.be.empty;
        expect(files.products).to.be.empty;
    });

    it('LoadAll() should correctly load all csv files', function() {
        let files = new Files();
        return files.LoadAll()
            .then(function(){
                expect(files.categories).to.not.be.empty;
                expect(files.products).to.not.be.empty;
            })
    });

});