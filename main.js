const data = {
    activity: {
        id: "",
        entryDate: ""
    }
}

class Activity {
    constructor(name) {
        this.name = name;
        this.id = name;
        this.StartDate = new Date();
    }
    reset() {
        this.StartDate = new Date();
    }

}

// let myAct = new Activity("hello");
let dataList = [];
for (let i = 0; i < 20; i++) {
    dataList.push(new Activity(`name ${i}`))
}
// console.log(dataList);