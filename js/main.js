function ValidationEvent() {    
    document.getElementById("divDisplay").style.display = "block";
    document.getElementById("spanName").innerHTML = document.getElementById("txtName").value;
    document.getElementById("spanPrice").innerHTML = document.getElementById("txtPrice").value;
    document.getElementById("spanDesc").innerHTML = document.getElementById("txtDesc").value;
    document.getElementById("spanExpDate").innerHTML = document.getElementById("txtExpDate").value;
    return false;
}