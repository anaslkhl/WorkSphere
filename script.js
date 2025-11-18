const { createElement } = require("react");

let formin = document.querySelector(".formin");

let arr = JSON.parse(localStorage.getItem("arr")) || [];
let nextid = JSON.parse(localStorage.getItem("arr")) || 0;
let btn = document.querySelector("#buttonn");
let foorm = document.querySelector(".formulaire");
let name1 = document.querySelector(".nameof");
let role11 = document.querySelector(".roleof");
let donebtn = document.querySelector("#donebtn");
let membercontain = document.querySelector(".members_container");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  foorm.classList.remove("is-hidden");
  // roomcontain.style.display="none"
});
donebtn.addEventListener("click", (e) => {
  e.preventDefault();
  let arr = JSON.parse(localStorage.getItem("arr")) || [];
  let namee = document.querySelector("#nameof").value.trim();
  let role = document.querySelector("#roleof").value.trim();
  let number = document.querySelector("#phoneof").value.trim();
  let emaill = document.querySelector("#emailof").value.trim();
  let experiences = document.querySelector("#experof").value.trim();
  let nextid = JSON.parse(localStorage.getItem("arr")) || 0;

  console.log(namee);
  console.log(role);
  console.log(number);

  foorm.classList.add("is-hidden");
  let newarr = {};

  newarr = {
    id: nextid,
    name: namee,
    role: role,
    number: number,
    email: emaill,
    experience: experiences,
  };

  arr.push(newarr);
  localStorage.setItem("arr", JSON.stringify(arr));
  localStorage.setItem("nextid", JSON.stringify(nextid));

  showStaff();
});

let staffForm = document.querySelector(".staffForm");
let addToRoom = document.querySelector(".addToRoom");
addToRoom.addEventListener("click", (e) => showStaffForm());

function showStaff() {
  let arr = JSON.parse(localStorage.getItem("arr")) || [];
  membercontain.innerHTML = "";

  arr.forEach((ev) => {
    let member = document.createElement("div");
    member.innerHTML += `
        <div class="members" data-staff-id=${ev.id}>
        <img
        class="avatar"
        src="./img/portrait-3d-male-doctor.jpg"
        alt="nothing"/>
        <div class="info">
        <p class="name11" data-user-name=${ev.name}>${ev.name}</p>
        <p class="role11" data-user-role=${ev.role}>${ev.role}</p>
        </div>
        <button class="edit-btn" data-user-edit=${ev.id}>Edit</button>
        </div>
        `;
    membercontain.appendChild(member);
    localStorage.setItem("arr", JSON.stringify(arr));
  });
}
showStaff();

function showStaffForm() {
  let arr = JSON.parse(localStorage.getItem("arr")) || [];
  let nextid = JSON.parse(localStorage.getItem('nextid')) || 0
  let formStaff = document.querySelector(".staffForm");
  let StaffForm = document.querySelector(".sform");
  staffForm.classList.remove("is-hidden");
  console.log("comed");
  arr.forEach((e) => {
    StaffForm.innerHTML += `
        <div class="staff-card" data-user-id=${e.id}>
        <img src="./img/54b19ada-d53e-4ee9-8882-9dfed1bf1396.jpg" alt="Profile Avatar" class="avatar">
        <div class="details">
        <div class="name">${e.name}</div>
        <div class="role">${e.role}</div>
        </div>showStaffForm
        <button class="edit-btn">Edit</button>
        </div>
        `;
    // formStaff.appendChild(StaffForm)
    localStorage.setItem(('nextid'), JSON.stringify(nextid))
    localStorage.setItem("arr", JSON.stringify(arr));
  });
}

let roomcontain = document.querySelector(".rooms-container");
roomcontain.addEventListener("click", addToRooms);
function addToRooms(ev) {
  let arr = JSON.parse(localStorage.getItem("arr"));
  let arrroom1 = []
  let room = ev.target.closest(".room");
  if (!room) {
    return;
  }
  let targetRoom = room.dataset.roomId;
  let rooms = createElement("div");
}
function selectedStaff(){
    
}
