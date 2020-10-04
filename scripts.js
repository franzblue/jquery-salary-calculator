console.log('Hello from js');

let employeeArray = [];
let _employee = {};
// let cost = 0;

$(document).ready(onReady);

function onReady(){
    console.log('jquery good to go');

    // event listeners here!!!
    $('#submitButton').on('click', gatherData);
    // $('#submitButton').on('click', tableFill);
    // $('#submitButton').on('click', monthlyCost);


}

    // functions down here!!!

    function gatherData(){
        let _employee = {};
        _employee.fName = $('#firstName').val();
        _employee.lName = $('#lastName').val();
        _employee.id = $('#idNumber').val();
        _employee.title = $('#title').val();
        _employee.salary = $('#annualSalary').val();
        employeeArray.push(_employee);
        console.log(_employee);
    }

    // function tableFill(){
    //     let newRow = $('#tableBody')

    //     newRow.empty();

    //     for( i = 0; i < employeeArray.length; i++){
    //         newRow.append(`
    //             <tr>
    //                 <td>${_employee[i].fName}</td>
    //                 <td>${_employee[i].lName}</td>
    //                 <td>${_employee[i].id}</td>
    //                 <td>${_employee[i].title}</td>
    //                 <td>${_employee[i].salary}</td>
    //                 <td><button id="deleteButton">Delete</button></td>
    //             </tr>
    //             `);
    //     }
    //         console.log('Lets see if this works');
    // }
    
    // above function almost works

    // function monthlyCost(){
    //     cost += $('#annualSalary').val();
    //     console.log('Monthly cost is ', cost);
    //     return cost;
    // }

    //above function is half assed, I need rest


    // append info the DOM and clear inputs

    // calculate monthly costs

    // if exceeds $20k add red background

    // delete button that removes employee from DOM

    // for( i = 0; i < employeeArray.length; i++)