console.log('Hello from js');

employeeArray = [];

$(document).ready(onReady);

function onReady(){
    console.log('jquery good to go');

    // event listeners here!!!
    $('#submitButton').on('click', gatherData);

}

    // functions down here!!!

    function gatherData(){
        let _employee = {};
        employee.fName = $('#firstName').val();
        employee.lName = $('#lastName').val();
        employee.id = $('#idNumber').val();
        employee.title = $('#title').val();
        employee.salary = $('#annualSalary').val();
        employeeArray.push(_employee);
        console.log(_employee);
    }

    function tableFill(){
        
    }
    


    // append info the DOM and clear inputs

    // calculate monthly costs

    //if exceeds $20k add red background

    // delete button that removes employee from DOM