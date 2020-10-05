console.log('Hello from js');

let employeeArray = [];
let cost = 0;

$(document).ready(onReady);

function onReady(){
    // event listeners here!!!
    $('#submitButton').on('click', gatherData);
    $('#submitButton').on('click', tableFill);
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
        let newRow = $('#tableBody');
        newRow.empty();
        for(i = 0; i < employeeArray.length; i++){
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
        $('.deleteButton').on('click', deleteEmployee);
    }

    function deleteEmployee(){
        $(this).parent().parent().remove();
        console.log('Delete Employee');
    }

    function monthlyCost(){
        for(i = 0; i < employeeArray.length; i++){
            cost += Number(employeeArray[i].salary);
        }
        cost = Math.ceil(cost / 12);
        console.log('Monthly cost is', cost);
        $('#monthlyCost').empty();
        $('#monthlyCost').append(numberWithCommas(cost));
        if(cost > 20000){
            $('#budget').addClass('red');
        }
        return cost;
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }// got this from stackoverflow, seems to work :)