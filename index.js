//level 1

console.log('10' == 10)
console.log( parseInt('9.8') == 10)

console.log(1+1)
console.log(3==3)
let name = 'AC'
console.log(name)

let empty = ''
console.log(empty)
console.log(3==4)
let none
console.log(none)

console.log(4>=3)
console.log(4==4)
console.log(4===4)
console.log(4!=4)
console.log(4!==4)

wordOne = 'python'
wordTwo = 'jargon'
console.log( wordOne.length-wordTwo.length)

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 === '4'))
let aword ='jargon'
let anotherWord = 'python'
console.log(!(aword.includes('on') && anotherWord.includes('on')))

let date = new Date()
console.log(date.getFullYear())
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getTime())

//level2
let a=prompt('Enter base')
let b=prompt('Enter height')
alert('area of the triangle is ' + 0.5*a*b)

let radius = prompt('enter radius')
let pi = 3.14
alert('area of the circle is ' + pi*radius**2)

// let x=1
// let y = 2*x -2

let x= 0
let y = x**2 + 6*x + 9
console.log(y)

let myname = 'AC'
myname.length>7? alert('your name is long'):alert('your name is short')
// if(myname.length>7){
//     alert('your name is long')
// }else{
//     alert('your name is short')
// }

let myage=22
let yourage=25
diff = yourage-myage
console.log('i am ' + diff + ' years younger than you are')

birthYear = prompt('year of birth')
thisYear = date.getFullYear()
currentAge = thisYear-birthYear
when = 18-currentAge
currentAge<18? alert('You are ' + currentAge + ', you will be able to drive in ' + when + ' years'):alert('You are ' + currentAge + '. You are old enough to drive')

howLong = prompt('How long have u lived?')
alert('thats ' + howLong*365*24*60*60 + ' seconds')

day = date.getDate()
month = date.getMonth()
year = date.getFullYear()
hour = date.getHours()
minutes = date.getMinutes()
console.log(year+'-'+month+'-'+day+' ' + hour+':'+minutes)
console.log(day+'/'+month+'/'+year+' ' + hour+':'+minutes)
console.log(day+'/'+month+'/'+year+' ' + hour+':'+minutes)

console.log(date)