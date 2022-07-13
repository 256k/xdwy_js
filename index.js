// const dataList = [];
class List {
    constructor() {
        this.list = [];
    }
    seed() {
        for (let i = 0; i < 10; i++) {
            this.list.push(new Activity(i))
        }
    }
}

const dataList = new List;

class Activity {
    constructor(name) {
        this.id = "id" + name;
        this.name = name;
        this.startDate = new Date();
    }
    reset() {
        this.startDate = newDate();
    }
    get duration() {
        return this.calcDuration();
    }
    calcDuration() {
        let now = new Date();
        let answer = Math.round((now.getTime() - this.startDate.getTime()) / (60 * 60 * 24 * 1000));
        console.log(answer)
        return answer
    }
}




const app = document.getElementById("app");

function reload() {
    app.innerHTML = "";
    let list = [];
    if (typeof localStorage.getItem("dataList") !== undefined) {
       list = JSON.parse(localStorage.getItem("dataList"));
    } else {
        localStorage.setItem("dataList", JSON.stringify(dataList.list));
    }
    dataList.list.forEach(element => {
        console.log(element)
        let wrapper = document.createElement('div');
        let title = document.createElement('p');
        let now = new Date();
        title.innerText = `${Math.round((now.getTime() - element.startDate.getTime()) / (60 * 60 * 24 * 1000))} days without ${element.name}`;
        wrapper.innerHTML = title.innerHTML;
        app.appendChild(wrapper)
    })
}
reload();

document.getElementById("add").addEventListener('click', () => {
    let nameInput = document.getElementById("input");
    dataList.list.push(new Activity(nameInput.value))
    nameInput.value = "";
    localStorage.setItem("dataList", JSON.stringify(dataList.list));
    reload();

})
