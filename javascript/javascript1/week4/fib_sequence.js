//Fibonacci Sequence

const fibSeq = [0, 1];
function fib(n) {


    for (let i = 2; i <= n; i++) {

        const a = (i - 1);
        const b = (i - 2);
        fibSeq.push(a + b);
    }
    //console.log(fibSeq);
    return fibSeq[n - 1]; //to use the first number as 0 not 1

}

console.log(fib(5));
console.log(fib(10));
