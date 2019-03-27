// JS Array

const facture = [
    {ref: 'PCM', prix: 6000.00, qte: 5},
    {ref: 'XDP', prix: 5600.00, qte: 2},
    {ref: 'DVD', prix: 300.00, qte: 9},
    {ref: 'KLM', prix: 3000.00, qte: 7},
    {ref: 'PVC', prix: 1200.00, qte: 5},
]
//console.log('tableau initial ', facture)

const nombres = [2, -7, 8, 90, 67]
console.log(nombres)  

function biTab(l, c) {
    return new Array(l)
    .fill()
    .map( _ => new Array(c).fill().map( _ => parseInt(Math.random()*100)))
}

const tab3 = biTab(5, 8)
console.log(tab3)

Array.prototype.myFill = function(value) {
    for(let i=0; i<this.length; i++)
        this[i] = value
    return this
}

/////////////////////////////////////////////////
//           Array.reduce()
/////////////////////////////////////////////////
//
// const somme = nombres.reduce( (acc, e) => acc + e, 0)

// console.log(somme)
// Array.prototype.myReduce = function(fn, initialValue) {
//     let acc = initialValue
//     this.forEach((v) => acc = fn(acc, v))
//     return acc
// }
// const somme1 = nombres.myReduce( (acc, e) => acc + e, 0)
//
// console.log('somme1', somme1)
//
// const total = facture.reduce( (acc, e) => acc + e.prix * e.qte, 0)
//
// console.log('total', total)
//
// const total1 = facture.myReduce( (acc, e) => acc + e.prix * e.qte, 0)
//
// console.log('total1', total1)
//
// const tab = nombres.reduce((acc, v) => [v, ...acc], [])
//
// console.log("reverted ", tab)
//
/////////////////////////////////////////////////////////////////////////:


/////////////////////////////////////////////////
//           Array.filter()
/////////////////////////////////////////////////
// //
// const ret = nombres.filter(e => e > 0)
// console.log('ret', ret)

// Array.prototype.myFilter = function(fn = _ => true) {
//     const ret = []
//     this.forEach(e => { if(fn(e)) ret.push(e)})
//     return ret
// }

// const ret1 = nombres.myFilter()
// console.log('ret1', ret1)
//
////////////////////////////////////////////////

/////////////////////////////////////////////////
//           Array.map()
/////////////////////////////////////////////////
//
// const f = x => x
//
// const proj =  nombres.map(f)
//
// console.log(proj)
//
// Array.prototype.myMap = function(fn = x => x){
//     const ret = []
//     this.forEach((e, i, t) => {
//         ret.push(fn(e, i, t))
//     })
//     return ret
// } 
// const refs = facture.myMap()
// console.log(refs)
//
/////////////////////////////////////////////////


/////////////////////////////////////////////////
//          Array.forEach()
/////////////////////////////////////////////////
//
// Array.prototype.forEach = function (fn) {
//     for(let i=0; i<this.length; i++) 
//         fn(this[i], i, this)
// }
//
// const log = (v) => console.logValues(v)
//
// nombres.each(console.log)
// nombres.each(log)
//
/////////////////////////////////////////////////














