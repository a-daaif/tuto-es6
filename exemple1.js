const f = x => x * x
const g = x => 2 * x
const h = x => "Nombre final : " + x
const p = x => console.log(x)


//  f | g = g( f( x ) ) = g o f
const pipe = (...fns) => x => fns.reduce((x0, f) => f(x0), x) 
pipe(
    v => v.map( x => x * x),
    v => v.filter( x => x<20),
    console.log
)([2, 5, 9])
