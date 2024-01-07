// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((elem) => {
//     return elem
// })

// console.log(values) //undefined




// const newNums = nums.filter((num) => {
    //     return num > 5 //returns num based on condition to new variable named newNums
    // })
    
    // console.log(newNums)
    
    
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = []
// nums.forEach((num)=>{
//     if (num !== 5){
//         newNums.push(num)
//     }
// })

// console.log(newNums)

const books = [
    {
        title: "The Great Gatsby",
        genre: "Fiction",
        publishingYear: 1925,
        edition: 1925
    },
    {
        title: "To Kill a Mockingbird",
        genre: "Classic",
        publishingYear: 1960,
        edition: 1960
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        genre: "Fantasy",
        publishingYear: 1997,
        edition: 1997
    },
    {
        title: "1984",
        genre: "Dystopian",
        publishingYear: 1949,
        edition: 1949
    },
    {
        title: "Pride and Prejudice",
        genre: "Classic",
        publishingYear: 1813,
        edition: 1813
    },
    {
        title: "The Hobbit",
        genre: "Fantasy",
        publishingYear: 1937,
        edition: 1937
    },
    {
        title: "The Catcher in the Rye",
        genre: "Fiction",
        publishingYear: 1951,
        edition: 1951
    },
    {
        title: "Lord of the Flies",
        genre: "Dystopian",
        publishingYear: 1954,
        edition: 1954
    },
    {
        title: "The Da Vinci Code",
        genre: "Mystery",
        publishingYear: 2003,
        edition: 2003
    },
    {
        title: "Brave New World",
        genre: "Dystopian",
        publishingYear: 1932,
        edition: 1932
    },
];

// const userBooks = books.filter((book) => {
//     return book.genre == 'Fantasy'
// })

// console.log(userBooks) // will have books containing Fantasy Genre

const booksAfter1950 = books.filter((book) => {
    return book.publishingYear > 1950 && book.genre == "Fiction"
})
console.log(booksAfter1950) 