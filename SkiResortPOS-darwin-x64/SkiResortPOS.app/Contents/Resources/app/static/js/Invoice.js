const TPS = 0.05;
const TVQ = 0.09975;

/*
Class that represents the invoice
 */
class Invoice{

    constructor(){
        this.list = {}; //list of products added. the row_id is the object key to ease its management
        this.row_id = 0; //last row_id created in invoice's table
        this.subtotal = 0; //current invoice' subtotal
        this.selected_row_id = null; //id of the selected row in invoice's table
        this.new_quantity = ""; //new product quantity chosen by the user
    }

    /*
    Method that returns the invoice total, including taxes
     */
    GetTotal(){
        return parseFloat(this.subtotal * (1 + TPS + TVQ)).toFixed(2);
    }

    /*
    Method that clears the invoice
     */
    Clear(){
        this.list = {};
        this.row_id = 0;
        this.subtotal = 0;
        this.selected_row_id = null;
        this.new_quantity = "";
    }

    /*
    Method that add a product in the invoice
    @param product - the product object to be added
     */
    AddItem(product){
        product.quantity = 1; //default added product quantity is always 1
        this.list[this.row_id++] = product;
        this.subtotal += parseFloat(product.price) * parseFloat(product.quantity); //updates the subtotal
    }

    /*
    Method that removes an item from the invoice
     */
    RemoveItem(){
        //check if there' any selected row in invoice' table
        if(!this.selected_row_id) return alert("You haven't selected any item to remove");
        //updates the subtotal
        this.subtotal -= parseFloat(this.list[this.selected_row_id].price) * parseFloat(this.list[this.selected_row_id].quantity);
        //remove the product row from invoice' table
        $(`#product-${this.selected_row_id}`).remove();
        //delete the product from invoice's list
        delete this.list[this.selected_row_id];
    }

    /*
    Method that updates an item of the invoice
     */
    UpdateItem(){
        //check if there' any selected row in invoice' table
        if(!this.selected_row_id) return alert("You haven't selected any item to update");
        //check if there'  new quantity selected by the user
        if(!this.new_quantity) return alert("You haven't selected the new quantity");

        //variation between the new quantity and the old one
        let qty_variation = parseInt(this.new_quantity) - parseInt(this.list[this.selected_row_id].quantity);
        this.list[this.selected_row_id].quantity = this.new_quantity; //update product quantity
        this.new_quantity = ""; //clear new quantity
        this.subtotal += parseFloat(this.list[this.selected_row_id].price) * parseFloat(qty_variation); //update invoice' subtotal
        $(`#product-${this.selected_row_id}`).find('.quantity').removeClass('warning');
    }

    /*
    Method that price details div
     */
    UpdatePriceDetails(){
        $('#invoice-subtotal').html(`$${parseFloat(this.subtotal).toFixed(2)}`);
        $('#invoice-TPS').html(`$${parseFloat(this.subtotal * TPS).toFixed(2)}`);
        $('#invoice-TVQ').html(`$${parseFloat(this.subtotal * TVQ).toFixed(2)}`);
        $('#invoice-total').html(`$${this.GetTotal()}`);
    }

    /*
    Method that returns an html table row of the added product
     */
    GetRow(product, price){
        return  `<tr id="product-${this.row_id}" class="clickable-row">
                    <td class="quantity">1</td>
                    <td>${product}</td>
                    <td>$${parseFloat(price).toFixed(2)}</td>
                </tr>`;
    }
}

module.exports = Invoice;