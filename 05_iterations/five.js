const coding = ["js", "rb", "py", "cpp"]

// coding.forEach(function(elem){
//     console.log(elem)
// })

// coding.forEach( (elem) => {
//     console.log(elem)
// })


// function iterator(elem){
//     console.log(elem)
// }

// coding.forEach(iterator)


// coding.forEach((elem, idx, arr) => {
//     console.log(`idx ${idx}, elem ${elem}, arr ${arr}`)
// })


let myCoding = [
    {
        languageName: "JavaScript",
        languageFile: "js",
    },
    {
        languageName: "java",
        languageFile: "java",
    },
    {
        languageName: "python",
        languageFile: "py",
    }
]

myCoding.forEach((elem) => {
    console.log(elem.languageName)
})