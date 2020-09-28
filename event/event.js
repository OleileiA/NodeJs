const EventEmitter = require('events').EventEmitter;

class GeekTime extends EventEmitter {
    constructor(props) {
        super(props);
        setTimeout(() => {
            this.emit("addLesson", { price: 67 });
        }, 3000)
    }
}

let geekTime = new GeekTime();
geekTime.addListener('addLesson', (res) => {
    console.log('触发课程');
    console.log(res);
});
