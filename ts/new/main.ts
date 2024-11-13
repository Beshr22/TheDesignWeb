type Sum<a, b> = {kind: 'left', v: a} | {kind: 'right', v: b}

type Option<a> = Sum<a, false>
const Some = <a>(v: a): Option<a> => 
        ({kind: 'left', v: v})

const None = <a>(): Option<a> => 
       ({kind: 'right', v: false})

let x: Option<number> = None()
let y: number = null!
y + 1

if (x.kind == 'left') {
    x.v + 1}
    


const sumUpTo = (n:number) : number  =>{
    if (n<=1) return n;
    return n + sumUpTo(n-1);
};

const drb = (n:number) : number  =>{
    if (n<=1) return 1;
    return n * drb(n-1);
};
    