var ajaxForm = document.getElementById("custForm")
ajaxForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var form = e.target;

    //make a new object which grabs the form fields value and then save them to file using ajax
    var data = new Object();
    let fnm = document.querySelector("#firstName").value
    let snm = document.querySelector("#surName").value

    data.firstname = fnm;
    data.surname = snm;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/showme');
    xhr.onload = function (data) {
        console.log('loaded', this.responseText);
    };
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
})