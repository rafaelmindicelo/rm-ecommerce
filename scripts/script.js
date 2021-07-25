const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let birthday = document.getElementById("birthday").value;
  let email = document.getElementById("email").value;
  let telephone = document.getElementById("telephone").value;
  let emailCheck = document.getElementById("emailCheck").checked;

  const data = {
    name,
    birthday,
    email,
    telephone,
    emailCheck
  }

  const convertData = JSON.stringify(data);

  localStorage.setItem("user", convertData);

  setTimeout(() => {
    alert("Usuário cadastrado com sucesso!");
  }, 1000);

  setTimeout(() => {
    document.location.reload();
  }, 1000);

})

