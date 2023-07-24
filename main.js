
const form = document.querySelector('.form');
const infoContainer = document.querySelector('.info');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const image = document.getElementById('image').value;
  const skills = document.getElementById('skills').value;
   
  let newList = document.createElement("div");
  newList.classList.add("addData");
  newList.innerHTML = `
    
    <div class="NameContainer">${username}</div>
    <a href="mail:${email}">${email}</a><br>
    <img src="${image}" alt="image" height="200px" width="200px" style="margin-top:30px;">
    <div class="Skill">${skills}</div>
  `;

  infoContainer.appendChild(newList);
  form.reset();
});
