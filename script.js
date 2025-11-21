let formin = document.querySelector(".formin");

let arr = JSON.parse(localStorage.getItem("arr")) || [];

let btn = document.querySelector("#buttonn");
let foorm = document.querySelector(".formulaire");
let name1 = document.querySelector(".nameof");
let role11 = document.querySelector(".roleof");
let donebtn = document.querySelector("#donebtn");
let membercontain = document.querySelector(".members_container");

let detname = document.querySelector("#detname");
let detrole = document.querySelector("#detrole");
let detnumber = document.querySelector("#detnumber");
let detmail = document.querySelector("#detemail");
let detexper = document.querySelector("#detexper");
const detid = document.querySelector("#detid");

//This Event for Showing the staff details//

membercontain.addEventListener("click", ShowDetails);

//This Function is for showing the selected staff from the unassigned//

let FormStaffDet = document.querySelector("#FormStaffDet");
function ShowDetails(e) {
  let arr = JSON.parse(localStorage.getItem("arr"));
  const targetstaff = e.target.closest(".members");
  console.log(targetstaff);
  const idStaff = targetstaff.dataset.staffId;
  console.log(idStaff);
  let indexStaff = arr.findIndex((staff) => parseInt(staff.id) == idStaff);
  console.log(indexStaff);
  const staffName = arr[indexStaff].name;
  const staffNumber = arr[indexStaff].number;
  const staffRole = arr[indexStaff].role;
  const staffEmail = arr[indexStaff].email;
  const staffExper = arr[indexStaff].experience;
  const staffUrl = arr[indexStaff].url;
  const staffid = arr[indexStaff].id;

  // console.log(staffName);
  // console.log(staffNumber);
  // console.log(staffRole);
  // console.log(staffEmail);
  // console.log(staffExper);
  // console.log(staffUrl);

  detname.textContent = staffName;
  detnumber.textContent = staffNumber;
  detmail.textContent = staffEmail;
  detrole.textContent = staffRole;
  detexper.textContent = staffExper;
  detid.textContent = staffid;

  console.log("-------- form -----------");

  // console.log(detname);
  // console.log(detnumber);
  // console.log(detmail);
  // console.log(detrole);
  // console.log(detexper);
  // console.log(FormStaffDet)

  FormStaffDet.setAttribute("attr", "display");
}

//This event For closing the form details when clickig on 'X' button//

document.querySelector("#exitForm").addEventListener("click", () => {
  FormStaffDet.setAttribute("attr", "none");
});

//This event For adding a staff member to unassinged list//

btn.addEventListener("click", (e) => {
  e.preventDefault();
  foorm.classList.remove("is-hidden");
  // roomcontain.style.display="none"
});

//This event for taking the inputs values with the validation of each one of them//

donebtn.addEventListener("click", (e) => {
  e.preventDefault();
  let arr = JSON.parse(localStorage.getItem("arr")) || [];
  let namee = document.querySelector("#nameof").value.trim();
  let role = document.querySelector("#roleof").value.trim();
  let number = document.querySelector("#phoneof").value.trim();
  let emaill = document.querySelector("#emailof").value.trim();
  let experiences = document.querySelector("#experof").value.trim();
  let urll = document.querySelector("#urlof").value.trim();
  let maxId =
    arr.length > 0 ? Math.max(...arr.map((s) => parseInt(s.id) || 0)) : 0;
  let nextid = maxId + 1;

  //   let nextid = JSON.parse(localStorage.getItem("arr")) || 0;

  //   console.log(namee);
  //   console.log(role);
  //   console.log(number);

  const regexname = /^[\p{L}\s\.\-]{2,100}$/u;

  if (!regexname.test(namee.trim())) {
    alert("! invalid name enter a correct name");
    return;
  }
  const regexphone = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

  if (!regexphone.test(number.trim())) {
    alert("Enter a valid phone number");
    return;
  }
  const regexemail = /^[\w\.\-]+@[\w\-]+\.[a-zA-Z]{2,4}(\.[a-zA-Z]{2,4})?$/;

  if (!regexemail.test(emaill.trim())) {
    alert("Enter a avalid email");
    return;
  }
  const regexurl = /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/;

  if (!regexurl.test(urll.trim())) {
    alert("Enter a avalid url");
    return;
  }

  foorm.classList.add("is-hidden");
  let newarr = {};

  newarr = {
    id: nextid,
    name: namee,
    role: role,
    url: urll,
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

//This event for add a staff to a room//

addToRoom.addEventListener("click", (e) => showStaffForm());

//This function for show staff members on the unassinged list//

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
let roomRool = null;

//This function is for show the staff members of unassigned list for add a staff to a room //

function showStaffForm() {
  let arr = JSON.parse(localStorage.getItem("arr")) || [];
  let nextid = JSON.parse(localStorage.getItem("nextid")) || 0;
  let formStaff = document.querySelector(".staffForm");
  let StaffFormContainer = document.querySelector(".sform");
  staffForm.classList.remove("is-hidden");
  //   console.log("comed");

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

//This Function taking the id of the target room to add the staff to it//
let limitation = {
  confedence: 4,
  archive: 3,
  security: 2,
  reception: 6,
  personal: 3,
  server: 3
}
let divMembers = null
function addToRooms(ev) {
  let arr = JSON.parse(localStorage.getItem("arr"));
  let room = ev.target.closest(".room");
  console.log(room)
  divMembers = Array.from(room.querySelectorAll('.room-card-staff')).length
  console.log(divMembers, "members div")
  if (!room) {
    return;
  }
  let targetRoom = room.dataset.roomId;
  currentTarget = targetRoom;
  roomRool = room.dataset.role;
  console.log(roomRool, "room role");
  showStaffForm();
}

// 1- Réception → uniquement les Réceptionnistes
// 2- Salle des serveurs → uniquement les Techniciens IT
// 3- Salle de sécurité → uniquement les Agents de sécurité
// 4- Manager → peut être affecté partout
// 5- Nettoyage → peut être affecté partout sauf à la Salle d’archives
// 6- Autres rôles → accès libre sauf aux zones restreintes

//This function for taking the index of the selected staff member and move it to the target room//
const ZONES = ["reception", "security", "confedence", "archive", "server"];
function selectedStaff(e) {
  let staffCard = e.target.closest(".staff-card");
  let arr = JSON.parse(localStorage.getItem("arr"));
  console.log(staffCard, "staff card")
  if (!staffCard) {
    return;
  }
  let staffId = parseInt(staffCard.dataset.userId);
  console.log(staffId);
  if (!currentTarget) {
    return;
  }
  const staffIndx = arr.findIndex((tar) => parseInt(tar.id) === staffId);
  if (staffIndx > -1) {
    const selectRole = arr[staffIndx].role;
    console.log(selectRole, "selected role");
    console.log(roomRool, "room role")
    console.log(divMembers,"divmembers")
    console.log(limitation[roomRool], "limitation")
    console.log(limitation)
    console.log(roomRool)
    
    if (isVerified(selectRole, roomRool)) {
      if (arr[staffIndx].role == "") {
      }
      arr[staffIndx].room_id = currentTarget;
      localStorage.setItem("arr", JSON.stringify(arr));
      document.querySelector(".staffForm").classList.add("is-hidden");
      currentTarget = null;
      showAllStaff();
    } else {
      alert("! This room is not authorized");
    }
  }
}

function CheckRooms(){
  let AvRooms = document.querySelectorAll('.room')
  console.log(AvRooms, "avrooms")
  AvRooms.forEach(rom => {
    console.log(rom , "rom")
    let how = Array.from(rom.querySelectorAll('.room-card-staff')).length
    console.log(how, "how")
    if(how === 0){
      rom.classList.add('is-empty')

      console.log('there is an empty')
      return
    }
  })
  }

function isVerified(role, roomId) {
  const restricked = ZONES.includes(roomId);
  console.log(role, "role");
  // console.log(roomId);
  if (role == "Manager") {
    return true;
  }
  console.log(roomId, "roomid");
  switch (roomId) {
    case "reception":
      return role === "Réceptionniste";
    case "server":
      return role === "Technicien IT";

    case "security":
      return role === "Agent de sécurité";
    case "archive":
      if (role === "nettoyage") {
        return false;
      }
  }
  if (role == "nettoyage") {
    return true;
  }

  return false;
}

//This function for moving the staff members to the unassigned list//

function unassignStaff(staffId) {
  console.log("unsigned");
  let arr = JSON.parse(localStorage.getItem("arr")) || [];
  const staffIndx = arr.findIndex((staff) => staff.id == staffId);
  console.log(staffId);
  console.log(staffIndx);
  if (staffIndx > -1) {
    arr[staffIndx].room_id = "main_list";
    localStorage.setItem("arr", JSON.stringify(arr));
    showAllStaff();
  }
}

//This Event is for the clicked staff card to take the index of the clicked card//

staffForm.addEventListener("click", selectedStaff);
let allRooms = document.querySelector(".room");
//This function is for rendering rooms and check each member if it exist on the right room//
function renderStafferoom() {
  const arr = JSON.parse(localStorage.getItem("arr"));
  //   let eachRoom = document.querySelectorAll(".roomStaffList");
  //   console.log(eachRoom);
  document.querySelectorAll(".room").forEach((roomContainer) => {
    roomContainer.querySelectorAll(".room-card-staff").forEach((card) => {
      card.remove();
    });
  });
  console.log(arr);
  arr.forEach((staff) => {
    if (staff.room_id !== "main_list") {
      const roomcCmtainer = document.querySelector(
        `.room[data-room-id="${staff.room_id}"]`
      );
      //   console.log(roomcCmtainer, "roomcontainer");
      if (roomcCmtainer) {
        const addstaff = document.createElement("div");
        // console.log(addstaff);
        addstaff.className = "room-card-staff";
        addstaff.setAttribute("data-user-id", staff.id);
        addstaff.innerHTML = `
           <div class="staff-card" data-user-id=${staff.id}>
        <img src="./img/54b19ada-d53e-4ee9-8882-9dfed1bf1396.jpg" alt="Profile Avatar" class="avatar">
        <div class="details">
        <div class="name">${staff.name}</div>
        <div class="role">${staff.role}</div>
        </div>
        <button class="remove-btn" data-user-id='${staff.id}'>X</button>
        </div>`;
        // console.log(addstaff, "after");
        const removeBtn = addstaff.querySelector(".remove-btn");
        removeBtn.addEventListener("click", (e) => {
          console.log("comed");
          e.stopPropagation();
          unassignStaff(removeBtn.dataset.userId);
        });
        roomcCmtainer.appendChild(addstaff);
      }
    }
    CheckRooms();
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




// if(divMembers == limitation[roomRool]){
//       let removeBt = document.querySelector('.addToRoom')
//       console.log(removeBt)
//       removeBt.classList.add('is-hidden');
//       alert('The room if full !')
//       return;
//     }