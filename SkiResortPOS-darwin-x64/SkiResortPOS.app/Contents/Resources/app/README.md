# ski-resort-pos

**This is a simple application built using Electron and its electron-quick-start project.**

It's an app of a POS (Point of Sale) of a Ski Resort. So it' intended to be used in a single machine (not a web application) and with a touch screen interface (no keyboard support).

The user can select add products into the cart, remove them, change the quantity and also pay.

The application needs these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.
- `data` - A folder containing csv files (categories.csv and products.csv)
- `static` - A folder containing css and js files
- `tests` - A folder containing unit tests

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash

# Clone this repository
git clone https://github.com/franklinlindemberg/ski-resort-pos
# Go into the repository
cd ski-resort-pos
# Install dependencies
npm install
# Run the app
npm start

```

## To Test

```bash

# Go into the repository
cd ski-resort-pos
# Install mocha
npm install mocha -g
# Install dependencies
npm install
# Run the tests
mocha tests --recursive --watch

```

## To Generate Package

The package will be generate in the root folder of the application

```bash

# Go into the repository
cd ski-resort-pos
# Install electron-packager
npm install electron-packager -g
# Install dependencies
npm install
# Run package generator
npm run package

```

##User Guide

![Screenshot](/screenshot.png "Optional Title")

### Categories
The initial screen will show the available categories of products. When a category is clicked, the interface will update to show the entire category'S products.

### Products
Products are divided by categories.

When a product is clicked, it will be included into the invoice list with a default quantity of 1.

### Available Buttons

#### Remove
Removes a product from the invoice list. A product row must be selected in the invoice list before clicking the remove button (if not it will display an alert message)

### Numbers (0 - 9)
The numbers are used to change the quantity of a product in the invoice list. Before using them, the user must select a product in the invoice list (if not it will display an alert message)

It is possible to select a new quantity greater then 9. For example, if the quantity wanted is 15, the user must press first the number 1 and then the number 5.

After each click in a number, the product quantity is immediately updated in the invoice list, but with a yellow color, which means it is temporary and not reflected in the subtotal yet.

To submit a change of a product quantity the user needs to click the Enter button.

### Enter
The Enter button is used to submit a change in a product quantity of the invoice list. Before use it, the user must select a product in the invoice list and also select a new quantity pressing the numbers buttons (if not it will display an alert message)

### Product Invoice List
The products in the invoice list can be clicked. It will be highlighted with a blue background.

Only a product can be selected at a time.

### New Invoice
The New Invoice button will create a new invoice, allowing the user to receive another customer.

### Pay
The Pay button changes the interface to the payment screen

### Cancel
The Cancel button changes the interface from the payment screen to the categories/products list screen

### Payment Methods
Radio buttons of available payment methods

### Finish
The Finish button finishes the invoice and starts a new one

## Unavailable Buttons
All other buttons are not implemented