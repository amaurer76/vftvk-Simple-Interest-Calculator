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
        `If you deposit <mark>${principal}</mark> 
        at an interest of <mark>${rate}</mark>%.
        You will receive an amount of <mark>${interest}</mark>,
        in the year <mark>${year}</mark>`;
    }
}
   
function updateRate()
{
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateVal+"%";
}

