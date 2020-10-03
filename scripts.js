console.log('Hello from js');

$(document).ready(onReady);

function onReady(){
    console.log('jquery good to go');

    // event listeners here!!!
    $('#submitButton').on('click', buttonWorks);   // not hooked up right

}

    // functions down here!!!

    function buttonWorks(){
        console.log('Submit button works!');  // not hooked up right
    }