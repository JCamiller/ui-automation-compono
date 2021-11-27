const { Before, Given, When, Then } = require('cucumber')
const request = require('sync-request')

const DATA_ADD_BOOK = require('../data/addBook.js').ADD_BOOK();
const DATA_GET_BOOK_BY_AUTHOR = require('../data/addBook.js').GET_BOOK_BY_AUTHOR();

let currentBook
let bookDetails

Given('I have valid book details', () => {
    const faker = require('faker')

    DATA_ADD_BOOK.body.name = faker.random.words()
    DATA_ADD_BOOK.body.isbn = faker.random.alphaNumeric(3)
    DATA_ADD_BOOK.body.aisle = faker.datatype.number(999)
    DATA_ADD_BOOK.body.author = faker.name.findName()

    currentBook = DATA_ADD_BOOK
}) 

When('a user adds a new book', () => {
    let options = {
        headers: {
            'Content-Type': 'application/json'
        },
        json: currentBook.body
    }

    try {
        let response = request(DATA_ADD_BOOK.method, DATA_ADD_BOOK.baseUrl + DATA_ADD_BOOK.path, options)
        let bodyString = response.body.toString()
        let responseJson = {
            "statusCode": response.statusCode,
            "msg": JSON.parse(bodyString).Msg,
            "ID": JSON.parse(bodyString).ID
        }

        currentBook['response'] = responseJson
    } catch (err) {
        let bodyString = err.body.toString()
        let errorMessage = JSON.parse(bodyString).msg

        throw errorMessage
    }
})

When('a book details is being fetched by using an author name', () => {
    let authorNameString = currentBook.body.author.replace(' ', '%20')
    DATA_GET_BOOK_BY_AUTHOR.path = DATA_GET_BOOK_BY_AUTHOR.path.replace('<s1>', '')
    DATA_GET_BOOK_BY_AUTHOR.path = DATA_GET_BOOK_BY_AUTHOR.path + authorNameString

    try {
        let response = request(DATA_GET_BOOK_BY_AUTHOR.method, DATA_GET_BOOK_BY_AUTHOR.baseUrl + DATA_GET_BOOK_BY_AUTHOR.path)
        let bodyString = response.body.toString()
        
        bookDetailsArr = JSON.parse(bodyString)
        bookDetails = bookDetailsArr[0]
        bookDetails['statusCode'] = response.statusCode
    } catch (err) {
        let bodyString = err.body.toString()
        let errorMessage = JSON.parse(bodyString).msg

        throw errorMessage
    }
})

Then('{string} should show status code of 200', (string) => {
    switch (string) {
        case "POST Add Book": 
            if (currentBook.response.statusCode != 200) throw "Incorrect status code"
            break
        case "GET Book Details By Author":
            if (bookDetails.statusCode != 200) throw "Incorrect status code"
            break
        default:
            throw "Incorrect option"
    }
})

Then('{string} should get success message on response', (string) => {
    switch (string) {
        case "POST Add Book": 
            if (currentBook.response.msg != "successfully added") throw "Incorrect status code"
            break
        default:
            throw "Incorrect option"
    }
})

Then('it should get valid book details', () => {
    if (currentBook.body.name != bookDetails.book_name) throw "Incorrect name value"
    if (currentBook.body.isbn != bookDetails.isbn) throw "Incorrect isbn value"
    if (currentBook.body.aisle != bookDetails.aisle) throw "Incorrect aisle value"
})