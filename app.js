'use strict'
const arr = [
    {id:1, name:'Вася'},
    {id:1, name:'Вася'},
    {id:2, name:'Петр'},
]
function uni(arr) {
    console.log(Array.from(
        new Set(arr.map(n => n.name)),
        n => arr.find(m => m.name === n)
      ))
    console.log(new Set(arr.map(n => n.name)))

}
uni(arr)

