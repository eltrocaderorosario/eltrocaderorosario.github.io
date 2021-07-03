var obj;
var auth_data;
fetch('http://localhost:5000/data')
  .then(response => response.json())
  .then(data => obj = data)
  .then(obj => set_body_data(obj))

function set_body_data(obj) {
  document.body.innerText = obj.glossary.title
}

function auth(username, password) {
  fetch(`http://localhost:5000/auth/${username}/${password}`)
  .then(response => response.json())
  .then(data => auth_data = data)
  .then(auth_data =>{ if (auth_data.authIsOk = true) {
    document.body.innerText += " "+auth_data["User"]+" está autorizado"
  }})
}