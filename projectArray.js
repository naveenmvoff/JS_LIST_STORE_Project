const showToDocument = document.querySelector(".container");
const tableBorder = document.querySelector(".tableClass");
const rowBorder = document.querySelector(".rowClass")



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
    // // tableElem.className = "userBox";
    // const tabRow = document.createElement("tr");
    // const tabCol1 = document.createElement("td");  //First Col
    // // const word1 = document.createElement("h1");     //First Element Col
    // const tabCol2 = document.createElement("td");  //Second Col
    // // const word2 = document.createElement("h1");    //Second Element Col
    // const tabCol3 = document.createElement("td");  //Third Col
    // // const word3 = document.createElement("h1");    //Third Element Col

    const rowBorder = document.getElementsByClassName("rowClass");
    const colBorder1 = document.getElementsByClassName("colClass1");
    const word1 = document.createElement("h1");     //First Element Col
    const colBorder2 = document.getElementsByClassName("colClass2");
    const word2 = document.createElement("h1");    //Second Element Col
    const colBorder3 = document.getElementsByClassName("colClass3");
    const word3 = document.createElement("h1");    //Third Element Col


    //Assign a Value to the Table
    // word.innerText = `${store[i].name} : ${store[i].age} : ${store[i].address}`;
    word1.innerText = `${store[i].name}`;
    word2.innerText = `${store[i].age}`;
    word3.innerText = `${store[i].address}`;
    // tableBorder.appendChild(word1); 
    tableBorder.appendChild(rowBorder);
    rowBorder.appendChild(colBorder1);
    colBorder1.appendChild(word1);
    rowBorder.appendChild(colBorder2);
    colBorder2.appendChild(word2);
    rowBorder.appendChild(colBorder3);
    colBorder3.appendChild(word3);



    showToDocument.appendChild(tableBorder);
    tableBorder.appendChild(tableElem)
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
    repVal();

    console.log(store);
}

function repVal(){
    for (let i=(store.length - 1); i < store.length; i++){ 
        
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
        tableBorder.appendChild(word1); 
        tableBorder.appendChild(tabRow);
        tabRow.appendChild(tabCol1);
        tabCol1.appendChild(word1);
        tabRow.appendChild(tabCol2);
        tabCol2.appendChild(word2);
        tabRow.appendChild(tabCol3);
        tabCol3.appendChild(word3);


        showToDocument.appendChild(tableBorder);
        
    }
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