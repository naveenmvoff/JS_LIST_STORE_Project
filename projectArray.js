const showToDocument = document.querySelector(".container");
// const tableElem = document.querySelector(".container")
let buttonvalue = document.querySelector('.click');

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


// for (let i=0; i < store.length; i++){
//     const usersbox = document.createElement("table"); // use to create a Table
//     // usersBox.className = "userBox";
//     const tabRow = document.createElement("tr");
//     const tabCol = document.createElement("td");
//     const word = document.createElement("h1");


//     // word.innerText = `${store[i].name} : ${store[i].age} : ${store[i].address}`;
//     word.innerText = `${store[i].name}`;
//     usersbox.appendChild(word);
//     usersbox.appendChild(tabRow);
//     tabRow.appendChild(tabCol);
//     tabCol.appendChild(word);
//     showToDocument.appendChild(usersbox);
// }


const tableElem = document.createElement("table"); // use to create a Table
for (let i=0; i < store.length; i++){
    //Create Table
    // tableElem.className = "userBox";
    const tabRow = document.createElement("tr");
    const tabCol1 = document.createElement("td");  //First Col
    const word1 = document.createElement("h1");     //First Element Col
    const tabCol2 = document.createElement("td");  //Second Col
    const word2 = document.createElement("h1");    //Second Element Col
    const tabCol3 = document.createElement("td");  //Third Col
    const word3 = document.createElement("h1");    //Third Element Col



    //Assign a Value to the Table
    // word.innerText = `${store[i].name} : ${store[i].age} : ${store[i].address}`;
    word1.innerText = `${store[i].name}`;
    word2.innerText = `${store[i].age}`;
    word3.innerText = `${store[i].address}`;
    tableElem.appendChild(word1); 
    tableElem.appendChild(tabRow);
    tabRow.appendChild(tabCol1);
    tabCol1.appendChild(word1);
    tabRow.appendChild(tabCol2);
    tabCol2.appendChild(word2);
    tabRow.appendChild(tabCol3);
    tabCol3.appendChild(word3);


    showToDocument.appendChild(tableElem);
    
}


function getInputValue() {
    let nameHTML = document.getElementsByClassName("name")[0].value;
    let ageHTML = document.getElementsByClassName("age")[0].value;
    let addressHTML = document.getElementsByClassName("address")[0].value;

    console.log(document.getElementsByClassName("name"));

    data = {
        name: nameHTML,
        age: ageHTML,
        address: addressHTML
    }
    console.log(nameHTML);
    console.log(ageHTML);
    console.log(addressHTML);

    store.push(data);

    console.log(store);
}




// buttonvalue.addEventListener('click', ()=>{
//     const nameHTML = document.getElementById("name");
//     const ageHTML = document.getElementById("age");
//     const addressHTML = document.getElementById("address");

//     newObject = {
//         name: nameHTML,
//         age: ageHTML,
//         address: addressHTML
//     };
//     console.log(newObject);
// })

// buttonvalue.addEventListener('click', ()=>{

//     let inputVal = document.getElementsByClassName("name")[0].value;
//     console.log(inputVal);


//     // newObject = {
//     //     // name: document.getElementById('name'),
//     //     age: document.getElementById('age'),
//     //     address: document.getElementById('address')
//     // };
//     // console.log(newObject);
// })



// document.getElementById("click").onclick = () => {
//     let namestore = document.getElementById("name").value;
//     // store.name.push(namestore);
//     let age = document.getElementById("age").value;
//     let address = document.getElementById("address").value;
// }


// store.name="Vanakam",
// store.age=20,
// store.address = "Hello"
// console.log(store);
// // document.getElementById("name")
























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