const showToDocument = document.querySelector(".container")

let KPM = "Ceryu"

var store = [
    {
        name: "Naveen",
        age: 18,
        address: "VDM"
    }, {
        name: "John",
        age: 20,
        address: KPM
    }, {
        name: "venkat",
        age: 24,
        address: "TNJ"
    }, {
        name: "kavi",
        age: 22,
        address: "plc"
    }, {
        name: "sany",
        age: 19,
        address: "CBE"
    }, {
        name: "Nithish",
        age: 18,
        address: "CBE"
    }, {
        name: "Dhanush",
        age: 20,
        address: "CBE"
    },
]


for (let i=0; i < store.length; i++){
    const usersbox= document.createElement("div"); 
    // usersBox.className = "userBox";

    const list = document.createElement("p");

    list.innerText = `${store[i].name} : ${store[i].age} : ${store[i].address}`;
    usersbox.appendChild(list);
    showToDocument.appendChild(usersbox);
}

document.getElementById("click").onclick = () => {
    let namestore = document.getElementById("name").value;
    // store.name.push(namestore);
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;
}


store.name="Vanakam",
store.age=20,
store.address = "Hello"
console.log(store);
// document.getElementById("name")
























//OLD WORK






// store.forEach((product) => {
//     console.log(product)
// })


// document.getElementById("name")


// // //Function
// // function handleClick(){
// //     let name1 = document.getElementById("name").value;
// //     console.log("click",name1);
// //     document.getElementById("element-append").append(name1)
// // }

// // // //Access the element
// // document.getElementById("click").onclick = () => {
// //     handleClick()
// // }


// document.getElementById("click").onclick = () => {
//     let namestoreing = document.getElementById(name).value;
//     console.log("click", namestoreing);
// }