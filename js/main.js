function onLoad() {
    document.getElementById("divDisplay").style.display = "none";
}


function ValidationEvent() {    
    let product = {
        name: document.getElementById("txtName").value,
        price: document.getElementById("txtPrice").value,
        desc: document.getElementById("txtDesc").value,
        expdate: document.getElementById("txtExpDate").value
    };
    var hasErrors = false;

    if (product.name == "") {
        document.getElementById("spanNameErrors").innerHTML = "Name cannot be blank.";
        hasErrors = true;
    }
    else {
        document.getElementById("spanNameErrors").innerHTML = "";
    }
    if (product.price == "") {
        document.getElementById("spanPriceErrors").innerHTML = "Price cannot be blank.";
        hasErrors = true;
    }
    else {
        document.getElementById("spanPriceErrors").innerHTML = "";
    }
    if (product.desc == "") {
        document.getElementById("spanDescErrors").innerHTML = "Description cannot be blank.";
        hasErrors = true;
    }
    else {
        document.getElementById("spanDescErrors").innerHTML = "";
    }
    if (product.expdate == "") {
        document.getElementById("spanExpDateErrors").innerHTML = "Expiration Date cannot be blank.";
        hasErrors = true;
    }
    else if (!isDate(product.expdate)) {
        document.getElementById("spanExpDateErrors").innerHTML = "Expiration Date needs to be in valid format MM/DD/YYYY.";
        hasErrors = true;
    }
    else {
        document.getElementById("spanExpDateErrors").innerHTML = "";
    }

    if (!hasErrors) {
        document.getElementById("divDisplay").style.display = "block";
        document.getElementById("spanName").innerHTML = product.name;
        document.getElementById("spanPrice").innerHTML = product.price;
        document.getElementById("spanDesc").innerHTML = product.desc;
        document.getElementById("spanExpDate").innerHTML = product.expdate;
    }    
    return false;
}

function onlyNumberKey(evt) {

    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode        
    if (ASCIICode == 46) {
        return true;
    }
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
        return false;
    }

    return true;
}

function onlyDateKey(evt) {

    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode == 47) {
        return true;
    }
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
        return false;
    }

    return true;
}

function isDate(date) {
    let dateformat = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/;

    // Matching the date through regular expression      
    if (date.match(dateformat)) {
        let operator = date.split('/');

        // Extract the string into month, date and year      
        let datepart = [];
        if (operator.length > 1) {
            datepart = date.split('/');
        }
        let month = parseInt(datepart[0]);
        let day = parseInt(datepart[1]);
        let year = parseInt(datepart[2]);

        // Create a list of days of a month      
        let ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (month == 1 || month > 2) {
            if (day > ListofDays[month - 1]) {
                //to check if the date is out of range     
                return false;
            }
        } else if (month == 2) {
            let leapYear = false;
            if ((!(year % 4) && year % 100) || !(year % 400)) leapYear = true;
            if ((leapYear == false) && (day >= 29)) return false;
            else
                if ((leapYear == true) && (day > 29)) {                    
                    return false;
                }
        }
    } else {        
        return false;
    }
    return true;
}

