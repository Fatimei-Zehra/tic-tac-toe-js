// let tableCell=document.querySelectorAll(".cell");
// if(tableCell){
//     tableCell.addEventListener("click",()=>{
//         tableCell.innerText="x";
//         console.log(tableCell);
//     })
// }



let cell1 = document.getElementById("cell1") ;
let cell2 = document.getElementById("cell2");
let cell3 = document.getElementById("cell3");
let cell4 = document.getElementById("cell4");
let cell5 = document.getElementById("cell5");
let cell6 = document.getElementById("cell6");
let cell7 = document.getElementById("cell7");
let cell8 = document.getElementById("cell8");
let cell9 = document.getElementById("cell9");


// let cellInput1 = document.getElementById("cell1");
// let cellInput2 = document.getElementById("cell2");
// let cellInput3 = document.getElementById("cell3");
// let cellInput4 = document.getElementById("cell4");
// let cellInput5 = document.getElementById("cell5");
// let cellInput6 = document.getElementById("cell6");
// let cellInput7 = document.getElementById("cell7");
// let cellInput8 = document.getElementById("cell8");
// let cellInput9 = document.getElementById("cell9");



function checkCell(){
    if ((cell1 == 'x' || cell1 == 'X') && (cell2 == 'x' || 
    cell2 == 'X') && (cell3 == 'x' || cell3 == 'X')) { 
    document.querySelector(".text").innerHTML = "Player X won"; 
    }
}




