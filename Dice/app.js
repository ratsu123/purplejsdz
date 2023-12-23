'use strict'
function throwDice(diceType) {
    return Math.floor(Math.random()*diceType.slice(1) + 1)

}
console.log(throwDice('d5'))