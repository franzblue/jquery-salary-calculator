console.log('Hello from js');

let employeeArray = [];
// let cost = 0;

$(document).ready(onReady);

function onReady(){
    console.log('jquery good to go');

    // event listeners here!!!
    $('#submitButton').on('click', gatherData);
    $('#submitButton').on('click', tableFill);
    // $('#submitButton').on('click', monthlyCost);


}

    // functions down here!!!

    function gatherData(){
        let employee = {};
        employee.fName = $('#firstName').val();
        employee.lName = $('#lastName').val();
        employee.id = $('#idNumber').val();
        employee.title = $('#title').val();
        employee.salary = $('#annualSalary').val();
        employeeArray.push(employee);
        console.log(employee);
    }

    function tableFill(){
        let newRow = $('#tableBody')

        newRow.empty();

        for( i = 0; i < employeeArray.length; i++){
            newRow.append(`
                <tr>
                    <td>${employeeArray[i].fName}</td>
                    <td>${employeeArray[i].lName}</td>
                    <td>${employeeArray[i].id}</td>
                    <td>${employeeArray[i].title}</td>
                    <td>${employeeArray[i].salary}</td>
                    <td><button id="deleteButton">Delete</button></td>
                </tr>
                `);
        }
            console.log('Lets see if this works');
    }
    
    // above function works!

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