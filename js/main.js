function ValidationEvent() {    
    let product = {
        name: document.getElementById("txtName").value,
        price: document.getElementById("txtPrice").value,
        desc: document.getElementById("txtDesc").value,
        expdate: document.getElementById("txtExpDate").value
    };
    document.getElementById("divDisplay").style.display = "block";
    document.getElementById("spanName").innerHTML = product.name;
    document.getElementById("spanPrice").innerHTML = product.price;
    document.getElementById("spanDesc").innerHTML = product.desc;
    document.getElementById("spanExpDate").innerHTML = product.expdate;
    return false;
}