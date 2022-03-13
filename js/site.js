// Javascript 

// Controller Function

function getValues(){

    document.getElementById('alert').classList.add('invisible');

    // Obtain string value from the page
    let inputvalue = document.getElementById("input_string").value;

    // Check for a palindrome
    let returnObj = wordcheck(inputvalue);

    // Display result
    display(returnObj);
}
// Check if the input is a Palindrome 
function wordcheck(inputvalue){

    // change to lowercase
    inputvalue = inputvalue.toLowerCase();

    // remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    inputvalue = inputvalue.replace(regex,"");

    let string=[];
    let returnObj={};
    
    for (let i = inputvalue.length-1; i >= 0; i--) {
        string += inputvalue[i];
    } 

    if (string == inputvalue) { 
        returnObj.msg = "Great Job! You entered a Palindrome"
    } else {
        returnObj.msg = "So Close! You entered is not a Palindrome"
    }

    returnObj.reversed = string;
    return returnObj;
}

// Display the result
function display(returnObj){

     //display the message
     document.getElementById("alert_heading").innerHTML = returnObj.msg;
     document.getElementById("msg").innerHTML =`Your phrase reversed is: ${returnObj.reversed}`;
     document.getElementById("alert").classList.remove('invisible');

}