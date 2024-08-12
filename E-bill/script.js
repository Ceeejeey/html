const button = document.getElementById("calculate");

function first30(units) {
    let bill = units * 5.5;
    return bill;
}
function untill100(units) {
    let bill = (units - 30) * 8.0 + first30(units);
    return bill;
}
function untill200(units) {
    let bill = (units - 100) * 12.00 + untill100(units);
    return bill;
}
function untill229(units) {
    let bill = (units - 200) * 13.00 + untill200(units);
    return bill;
}
function above230(units) {
    let bill = (units - 229) * 15.00 + untill229(units);
    return bill;
}


function calculate(units) {

    let bill = 0;

    if (units <=30) {
        bill = first30(units);
    }
    else if(units > 30 && units <= 100){
        bill = untill100(units);
    }
    else if(units > 100 && units <= 200){
        bill = untill200(units);
    }
    else if(units > 200 && units <= 229){
        bill = untill229(units);
    }
    else if(units >=230){
        bill = above230(units);
    }
    
    document.getElementById("bill").value = bill.toFixed(2);
}

button.addEventListener('click' , ()=> {
    const unitsInput = document.getElementById("units").value;
    const units = parseInt(unitsInput , 10);

    if (!isNaN(units) && units >= 0) {
        calculate(units);
    } else {
        alert("Please enter a valid number of units.");
    }

})