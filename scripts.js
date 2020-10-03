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
        let employee = {};
        employee.fName = $('#firstName').val();
        employee.lName = $('#lastName').val();
        employee.id = $('#idNumber').val();
        employee.title = $('#title').val();
        employee.salary = $('#annualSalary').val();
        employeeArray.push(employee);
        console.log(employee);
    }