var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "mobile":document.getElementById("phone").value,
  "name": document.getElementById("name").value,
  "email": document.getElementById("email").value,
  "message": document.getElementById("message").value
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};



function saveCustomer(){
    fetch("https://api-backend-0oj7.onrender.com/register", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

