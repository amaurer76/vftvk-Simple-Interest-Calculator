function compute()
{
    var principalEl = document.getElementById("principal");
    var principal = principalEl.value;
    //Check that the principal is greater than zero
    if(!principal || parseInt(principal) <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    // Only reset text for valid principal
    else {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML =
        `If you deposit ${principal} 
        at an interest of ${rate}%.
        You will receive an amount of ${interest},
        in the year ${year}`;
    }
}
   
function updateRate()
{
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateVal+"%";
}

