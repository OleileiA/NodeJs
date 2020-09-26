let playAction = process.argv[process.argv.length - 1];

let rand = Math.random() * 3;
let computerAction;

if (rand < 1) {
    computerAction = '1';
} else if (rand > 1) {
    computerAction = '2';
} else {
    computerAction = '3';
}

if (computerAction === playAction) {
    console.log("相同");
} else {
    console.log("不同");
}
