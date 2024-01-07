// reduce((accumulator, currentvalue) => {
//     return accumulator + currentvalue
// }, initialValue of Accumulator)

const myNums = [1, 2, 3]

const total = myNums.reduce((accumulator, currentvalue) => {
    console.log(`acc val: ${accumulator} and current value: ${currentvalue}`)
    return accumulator + currentvalue
}, )

console.log(total)

const total3 = myNums.reduce( (acc, currVal) => (acc + currVal), 2)
console.log(total3)
// const total2 = myNums.reduce((acc, currVal) => (accumulator + currVal))

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "android dev",
        price: 4999
    },
    {
        itemName: "dta science",
        price: 12999
    },
    {
        itemName: "python",
        price: 499
    },
]

const totalPrice = shoppingCart.reduce((acc, currVal) => {
    return acc + currVal.price
}, 0)

console.log(totalPrice)