let formin = document.querySelector(".formin");

let arr = JSON.parse(localStorage.getItem("arr")) || [];

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
  let maxId =
    arr.length > 0 ? Math.max(...arr.map((s) => parseInt(s.id) || 0)) : 0;
  let nextid = maxId + 1;

  //   let nextid = JSON.parse(localStorage.getItem("arr")) || 0;

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
    room_id: "main_list",
  };

  arr.push(newarr);
  //   nextid++;
  //   foorm.reset();
  localStorage.setItem("arr", JSON.stringify(arr));
  //   localStorage.setItem("nextid", JSON.stringify(nextid));
  showStaff();
  renderStafferoom();
});
let staffForm = document.querySelector(".staffForm");
let addToRoom = document.querySelector(".addToRoom");
addToRoom.addEventListener("click", (e) => showStaffForm());

function showStaff() {
  let arr = JSON.parse(localStorage.getItem("arr")) || [];
  membercontain.innerHTML = "";

  arr
    .filter((ev) => ev.room_id === "main_list")
    .forEach((ev) => {
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

let currentTarget = null;

function showStaffForm() {
  let arr = JSON.parse(localStorage.getItem("arr")) || [];
  let nextid = JSON.parse(localStorage.getItem("nextid")) || 0;
  let formStaff = document.querySelector(".staffForm");
  let StaffFormContainer = document.querySelector(".sform");
  staffForm.classList.remove("is-hidden");
  console.log("comed");

  StaffFormContainer.innerHTML = "";
  const availableStaff = arr.filter((e) => e.room_id === "main_list");
  if (availableStaff.length === 0) {
    StaffFormContainer.innerHTML =
      '<div class="p-4 text-center text-gray-500">! There is no available staff to add.</div>';
    return;
  }
  availableStaff.forEach((e) => {
    StaffFormContainer.innerHTML += `
        <div class="staff-card" data-user-id=${e.id}>
        <img src="./img/54b19ada-d53e-4ee9-8882-9dfed1bf1396.jpg" alt="Profile Avatar" class="avatar">
        <div class="details">
        <div class="name">${e.name}</div>
        <div class="role">${e.role}</div>
        </div>
        <button class="edit-btn">Edit</button>
        </div>
        `;
    // formStaff.appendChild(StaffForm)
    //   localStorage.setItem("nextid", JSON.stringify(nextid));
    localStorage.setItem("arr", JSON.stringify(arr));
  });
}
// let selectedStaffId = null;
let roomcontain = document.querySelector(".rooms-container");
roomcontain.addEventListener("click", addToRooms);

function addToRooms(ev) {
  let arr = JSON.parse(localStorage.getItem("arr"));
  let room = ev.target.closest(".room");
  if (!room) {
    return;
  }
  let targetRoom = room.dataset.roomId;
  currentTarget = targetRoom;
  showStaffForm();
}
function selectedStaff(e) {
  let staffCard = e.target.closest(".staff-card");
  let arr = JSON.parse(localStorage.getItem("arr"));
  if (!staffCard) {
    return;
  }
  const staffId = parseInt(staffCard.dataset.userId);
  if (!currentTarget) {
    return;
  }
  const staffIndx = arr.findIndex((tar) => parseInt(tar.id) === staffId);
  if (staffIndx > -1) {
    arr[staffIndx].room_id = currentTarget;
    localStorage.setItem("arr", JSON.stringify(arr));
    document.querySelector(".staffForm").classList.add("is-hidden");
    currentTarget = null;
    showAllStaff();
  }
}
function unassignStaff(staffId) {
  let localArr = JSON.parse(localStorage.getItem("arr")) || [];
  const staffIndx = localArr.findIndex((staff) => staff.id === staffId);
  if (staffIndx > -1) {
    localArr[staffIndx].room_id = "main_list";
    localStorage.setItem("arr", JSON.stringify(localArr));
    showAllStaff();
  }
}
staffForm.addEventListener("click", selectedStaff);
let allRooms = document.querySelector(".room");

function renderStafferoom() {
  const arr = JSON.parse(localStorage.getItem("arr"));
  //   let eachRoom = document.querySelectorAll(".roomStaffList");
//   console.log(eachRoom);
  document.querySelectorAll(".room").forEach((roomContainer) => {
    roomContainer.querySelectorAll(".room-card-staff").forEach((card) => {
      card.remove();
    });
  });
  arr.forEach((staff) => {
    if (staff.room_id !== "main_list") {
      const roomcCmtainer = document.querySelector(
        `.room[data-room-id="${staff.room_id}"]`
      );
      console.log(roomcCmtainer, "roomcontainer");
      if (roomcCmtainer) {
        const addstaff = document.createElement("div");
        console.log(addstaff);
        addstaff.className = "room-card-staff";
        addstaff.setAttribute("data-user-id", staff.id);
        addstaff.innerHTML = `
           <div class="staff-card" data-user-id=${staff.id}>
        <img src="./img/54b19ada-d53e-4ee9-8882-9dfed1bf1396.jpg" alt="Profile Avatar" class="avatar">
        <div class="details">
        <div class="name">${staff.name}</div>
        <div class="role">${staff.role}</div>
        </div>
        <button class="remove-btn" data-user-delete='${staff.id}'>delete</button>
        </div>`;
        console.log(addstaff, "after");
        const removeBtn = addstaff.querySelector(".remove-btn");
        removeBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          unassignStaff(removeBtn.dataset.staffId);
        });
        roomcCmtainer.appendChild(addstaff);
      }
    }
  });
  //   localStorage.setItem(('arr'), JSON.stringify(arr))
}

function showAllStaff() {
  showStaff();
  renderStafferoom();
}

window.onload = showAllStaff;

// let shd = document.querySelector('.ksdjh')
// let skhb = shd.children[2];
