# Paggi Node SDK

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

DOCS: https://docs.paggi.com/v4/docs

# Usage

```javascript
const paggi = require("./paggi-node-sdk")(token, key, productionFlag); // Use your basic auth credentials
```
#### Banks

```javascript
paggi.banks.getList()
paggi.banks.getAccountList()  
paggi.banks.getAccountById(id) 
paggi.banks.createAccount(jsonData)
```
#### Customers
```javascript
paggi.customers.create(jsonData)
paggi.customers.update(id, jsonData)  
paggi.customers.getById(id) 
paggi.customers.getList()
```
#### Cards
```javascript
paggi.cards.create(jsonData)
paggi.cards.delete(id)  
paggi.cards.getById(id) 
paggi.cards.getList()
```
#### Charges
```javascript
paggi.charges.applePay(jsonData)
paggi.charges.create(jsonData)  
paggi.charges.cancel(id) 
paggi.charges.capture(id)
paggi.charges.getById(id)
paggi.charges.getList()
```

## Example
##### Customer create 
```
paggi.customers.create({
  "name": "Paggi Demonstration User",
  "email": "test@paggi.com",
  "document": "12345678910",
  "phone": "11987654321",
  "address": {
    "street": "42 Street",
    "city": "Silent City"
  },
  "card": {
    "number": "4200000000000000",
    "month": "12",
    "year": "2015",
    "name": "Est lumnina",
    "cvv": "123",
    "address": {
      "street": "65 Avenue",
      "city": "Old York",
      "state": "Yharnam"
    }
  }
}).then((response) => {
	console.log(response)
}).catch((error) => {
	console.log(error)
})
```



### TODO
- Implement pagination on list requests
- Implement tests scripts
- publish package in npm

### ADVICE
This is an unofficial sdk. We made it cause Paggi doesn't provide an official sdk for Node.js yet.
