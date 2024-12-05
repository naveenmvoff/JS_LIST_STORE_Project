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

console.log(store);


// //Function
// function handleClick(){
//     let name1 = document.getElementById("name").value;
//     console.log("click",name1);
//     document.getElementById("element-append").append(name1)
// }

// // //Access the element
// document.getElementById("click").onclick = () => {
//     handleClick()
// }


document.getElementById("click").onclick = () => {
    let namestoreing = document.getElementById(name).value;
    console.log("click", namestoreing);
}