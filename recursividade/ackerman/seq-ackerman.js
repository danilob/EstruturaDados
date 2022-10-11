var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//aumentando tamanho da pilha de recursão
// node --stack-size=100000 seq-ackerman.js < input.txt

all = input.split('\n');

function A(m, n) {
    if (m === 0) {
        return n + 1;
    } else if (!(m === 0) && (n === 0)) {
        return A(m - 1, 1);
    } else {
        return A(m - 1, A(m, n - 1));
    }
}



// while (true) {
//     try {
//         var n = parseInt(all.shift());
//         console.log(n);
//         for (var i = 0; i < n; i++) {
//             text = all.shift();
//             var values = text.split(' ');
//             n = parseInt(values[0]);
//             m = parseInt(values[1]);
//             console.log(A(m, n));
//         }
//     } catch (error) {
//         console.log(error)
//         break;
//     }
// }

console.log(A(0, 4));
console.log(A(3, 2));
console.log(A(1, 4));
console.log(A(1, 2));
console.log(A(4, 1));