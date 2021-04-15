function compute()
{
    var principal = document.getElementById("principal").value;
    //Check that the principal is greater than zero
    if(parseInt(principal) <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerTHTML =
    `If you deposit ${principal} 
     at an interest of ${rate}%.
     You will receive an amount of ${interest},
     in the year ${year}`;
}
   
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateVal;
}

