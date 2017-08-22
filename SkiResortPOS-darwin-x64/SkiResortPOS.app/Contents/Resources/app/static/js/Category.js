var stringify  = require('node-stringify');

/*
Class that represents each category from category.csv
 */

class Category{
    /*
    @param category: - category name
     */
    constructor(category){
        //scaping single quote
        this.category = category;

    }

    toString(){
        return `${this.category}`;
    }

    /*
    Static method that returns all categories divs based in an array of category
    @param categories: array of category
     */
    static LoadDiv(categories){
        // map each position of the array to a div
        return categories.map(function(category){
            return category.GetDiv();
        }).join('');
    }

    /*
    Method that returns a category div based in the category of the object
     */
    GetDiv() {
        //handling single quote in html
        //let html_string = this.category.replace("\\'", "'");

        return `<div class="col-md-12 category" onclick="OnCategoryClick(this, ${stringify(this.category)})">
            <span> <b>${this.category}</b> </span>
        </div>`;
    }
}

module.exports = Category;