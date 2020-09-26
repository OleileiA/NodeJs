console.log(1);
let exportObj = require("./lib"); // 被require的脚本会立即执行
console.log(2);
console.log(exportObj); // 在模块中被输出的对象， 并且是同一个引用
