///////-------.forEach()---------//////////
let nums = [1,2,3,4,5]
// Print element and its index with for-loop
console.log(`------`)
console.log(`For Loop`)
console.log(`------`)
for(let i = 0; i < nums.length; i++) {
    console.log(nums[i], "is at index:", i)
}

// .forEach(callback)
console.log(`------`)
console.log(`For Each`)
console.log(`------`)
// Print element and its index with .forEach()
nums.forEach((element, index) => {
    console.log(element, "is at index", index)
})

nums.forEach((element, index, array) => {
    console.log(element, "is at index", index, "array", array)
})

// Sum the `nums` array
let sum = 0

nums.forEach(function(number){
    sum += number
    console.log(sum)
})

console.log(sum)

let colors = [`red`, `green`, `white`, `green`, `purple`, `red`]

let colorCount = {}

colors.forEach((color) => {
    // create an if-statement to check if the elements property exists
    if(colorCount[color]){
        colorCount[color]++
    }else {
        colorCount[color] = 1
    }
})

console.log(colorCount)


///////-------.map()-------------//////////

let nums2 = [1,2,3,4]
//were going to multiply each number by 2 - use .map()
let nums2Times2 = nums2.map((num) => {
    return num * 2
})

console.log("nums2:" , nums2)
console.log("nums2Times2:",nums2Times2)

// this is the callback function for the nums2Minus2 .map() I do this because
//I dont wanna do an inline callback function.
function cbf(num){
    return num - 1
}
let nums2Minus1 = nums2.map(cbf)

console.log("nums2Minus1:" ,nums2Minus1)

//////---------.filter()--------//////////

let numsArr = [2, 45, 65, 70, 89, 90, 8, 9, 55]

// filter the `numsArr` to get odd numbers by using for-loop
let forLoopOddNums = []

for(let i = 0; i < numsArr.length; i++) {
    numsArr[i] % 2 === 1 ? forLoopOddNums.push(numsArr[i]) : null
}
console.log("forLoopOddNums:", forLoopOddNums)

// Filter the `numsArr` to get odd numbers by using .filter()
let filterOddNums = numsArr.filter((num) => {
    return num % 2 === 1
})
console.log("filterOddNums:", filterOddNums)

/// Lets work on an array of objects
const cars = [
    {name: 'honda civic', price: 30000},
    {name: 'toyota corolla', price: 35000},
    {name: 'kia rio', price: 25000},
    {name: 'tesla x', price: 60000},
    {name: 'honda pilot', price: 45000},
    {name: 'chevy bolt', price: 40000},
    {name: 'ford focus', price: 20000},
    {name: `honda odyssey`, price: 30000}
]

let filteredCars = cars.filter((car) => {
    return car.price >= 30000
})

console.log("filteredCars" , filteredCars)

// I'm filtering honda cars by using .filter()
let hondaCars = cars.filter((car) => {
    return car.name.includes(`honda`)
})
console.log("hondaCars:", hondaCars)


///////---------.reduce()------///////////

let numsArray = [3,1,2,5]
// get the sum of the numsArray by using .reduce
let reduceSum = numsArray.reduce((accumulater, currentValue) => {
    console.log(`accumulator: ${accumulater}, currentValue: ${currentValue}`)
    return accumulater + currentValue
})

console.log("reduceSum:", reduceSum)

//////////-------------Chaining----------////////////
// i'm going to get the sum of honda cars from the `cars` array

let hondaSumPrice = cars.filter((car) => car.name.includes(`honda`)).reduce((acc, curr) => acc + curr.price, 0)

console.log("hondaSumPrice", hondaSumPrice)
