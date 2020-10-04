console.log('Hello from js');

let employeeArray = [];
let cost = 0;

$(document).ready(onReady);

function onReady(){
    console.log('jquery good to go');

    // event listeners here!!!
    $('#submitButton').on('click', gatherData);
    $('#submitButton').on('click', tableFill);
    $('.deleteButton').on('click', deleteEmployee);
    $('#submitButton').on('click', monthlyCost);


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

        // empty inputs
        $('#firstName').val('');
        $('#lastName').val('');
        $('#idNumber').val('');
        $('#title').val('');
        $('#annualSalary').val('');
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
                    <td class="salaryData">${employeeArray[i].salary}</td>
                    <td><button class="deleteButton">Delete</button></td>
                </tr>
                `);
        }
            console.log('Lets see if this works');
    }    // above function works!

    function deleteEmployee(){
        $(this).parent().parent().remove();
        console.log('Delete Employee');
    }// this works for now, reassess for stretch goal

    function monthlyCost(){
        for(i = 0; i < employeeArray.length; i++){
            cost += Number(employeeArray[i].salary);
        }
        cost = Math.floor(cost / 12);
        console.log('Monthly cost is', cost);
        $('#monthlyCost').empty();
        $('#monthlyCost').append(cost);
        return cost;
    }

    // append info the DOM and clear inputs

    // calculate monthly costs

    // if exceeds $20k add red background

    // delete button that removes employee from DOM

    // for( i = 0; i < employeeArray.length; i++)

    // function changeColor(){
    //     if(employeeArray.length % 2 == 0){
    //         $(this).parent().toggleClass('greyScale');
    //     }