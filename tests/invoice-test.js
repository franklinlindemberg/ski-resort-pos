var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Invoice = require('./../static/js/Invoice.js');

describe('Invoice', function() {
    it('constructor() should correctly assign input parameters to the class variables', function() {
        let invoice = new Invoice();
        expect(invoice.list).to.be.empty;
        expect(invoice.row_id).to.equal(0);
        expect(invoice.subtotal).to.equal(0);
        expect(invoice.selected_row_id).to.be.null;
        expect(invoice.new_quantity).to.be.empty;
    });

    it('Clear() should correctly clear invoice variables', function() {
        let invoice = new Invoice();

        invoice.list = {
            teste: "teste"
        };
        invoice.row_id = 1;
        invoice.subtotal = 250;
        invoice.selected_row_id = 10;
        invoice.new_quantity = "1";

        invoice.Clear();

        expect(invoice.list).to.be.empty;
        expect(invoice.row_id).to.equal(0);
        expect(invoice.subtotal).to.equal(0);
        expect(invoice.selected_row_id).to.be.null;
        expect(invoice.new_quantity).to.be.empty;
    });

    it('AddItem() should correctly add an item into the invoice', function() {
        let invoice = new Invoice();

        let product = {
            product: "product",
            price: "123"
        };

        invoice.AddItem(product);

        expect(Object.keys(invoice.list).length).to.equal(1);
        expect(invoice.row_id).to.equal(1);
        expect(invoice.subtotal).to.equal(123);
    });

    it('GetRow() should correctly return the html string of an invoice list row', function() {
        let invoice = new Invoice();

        let product = {
            product: "product",
            price: "123"
        };

        let result = `<tr id="product-1" class="clickable-row">
                    <td class="quantity">1</td>
                    <td>${product.product}</td>
                    <td>$${parseFloat(product.price).toFixed(2)}</td>
                </tr>`;

        invoice.AddItem(product);
        invoice.GetRow(product.product, product.price);

        expect(invoice.GetRow(product.product, product.price)).to.equal(result);
    });

});