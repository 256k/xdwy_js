const express = require('express');
const fs = require('fs');

let jsonData = `{
	"test": {
		"name": "billy",
		"age": 32
	}
}`


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

// let jsonObj = JSON.parse(jsonData);
// let jsonContent = JSON.stringify(jsonObj);

fs.writeFile("data.json",JSON.stringify(dataList) , 'utf-8', (err) => {
if (err) {
    console.log("error saving file");
}
console.log("saved file");
})

const app = express();

const port = 3000;

app.get('/', (req,res) => {
    res.send("hello express");
})

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})