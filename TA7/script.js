function getTheTitles(booksArr) {
    let arr = []
    for (book of books) {
        arr.push(book.title)
    }
    console.log(arr)
    return arr
}


const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
]

getTheTitles(books) // ['Book','Book2']
