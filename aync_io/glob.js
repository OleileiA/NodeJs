let glob = require('glob');


// sync这就是阻塞的调用方式
let result = null;
console.time('glob');
result = glob.sync(__dirname, '/**/*')
console.timeEnd('glob');
console.log(result);


// 异步调用方式
console.time('glob2');
let result = glob(__dirname, '/**/*');
console.timeEnd('glob2');
console.log(result);
