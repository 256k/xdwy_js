const dataList = [];

class Activity {
    constructor(name) {
        this.id= "id" + name;
        this.name= name;
        this.startDate = new Date("2022-06-25");
    }
    reset() {
        this.startDate = newDate();
    }
    duration() {
        let now = new Date();
        return Math.round( (now.getTime() - this.startDate.getTime()) / (60*60*24*1000));
    }
}

for (let i = 0; i < 10; i++) {
    dataList.push(new Activity(i))
}


const app = document.getElementById("app");

function reload() {
    app.innerHTML = "";
dataList.forEach(element => {
    let wrapper = document.createElement('div');
    let title = document.createElement('p');
    title.innerText =`${element.duration()} days without ${element.name}`;
    wrapper.innerHTML = title.innerHTML;
    app.appendChild(wrapper)
})
}
reload();

document.getElementById("add").addEventListener('click', () => {
    let nameInput = document.getElementById("input");
    dataList.push(new Activity(nameInput.value))
    nameInput.value = "";
    reload();

})
