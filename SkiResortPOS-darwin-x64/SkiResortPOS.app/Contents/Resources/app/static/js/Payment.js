/*
Class that represents the payment
 */
class Payment{
    constructor(){
        this.available_methods = {
            "Cash": "Cash",
            "Debit Card": "Debit Card",
            "Credit Card": [
                "Visa",
                "MasterCard",
                "Amex"
            ]
        };
    }

    /*
    Method that returns the payment html div
     */
    LoadDiv(){
        let self = this;
        let result = ``;

        //iterate through available methods
        Object.keys(self.available_methods).forEach(function(key,index) {
            let element = self.available_methods[key];
            //if element is array should iterate through its values
            if(element instanceof Array){
                result += `<span id="helpBlock" class="help-block">Credit Cards:</span>`;
                for(let i = 0; i < element.length; i++){
                    result += Payment.GetDiv(element[i]);
                }
            }
            else if(typeof(element) === "string" || element instanceof String){
                result += Payment.GetDiv(element);
            }

        });
        return result;
    }

    /*
    Method that returns the radio button for a single payment method
    @param value - payment method
     */
    static GetDiv(value){
        return  `<div class="radio">
                    <label>
                        <input type="radio" name="optionsPayment" value="${value}"/>
                        ${value}
                    </label>
                </div>
                `;
    }
}

module.exports = Payment;