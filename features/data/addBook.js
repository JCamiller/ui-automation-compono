module.exports.GET_BOOK_BY_AUTHOR = () => {
    return {
        baseUrl: "http://216.10.245.166",
        path: "/Library/GetBook.php?AuthorName=<s1>",
        method: "GET",
        body: {}
    }
}

module.exports.ADD_BOOK = () => {
    return {
        baseUrl: "http://216.10.245.166",
        path: "/Library/Addbook.php",
        method: "POST",
        body: {
            name: "",
            isbn: "",
            aisle: "",
            author: ""
        }
    }
}
