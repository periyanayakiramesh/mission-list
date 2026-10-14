

const missionInput = document.getElementById("missionInput");
const missionList = document.getElementById("missionList");
const totalCount = document.getElementById("totalCount");

// 1. ADD MISSION

function addMission() {

    let mission = missionInput.value.trim();

    if (mission == "") {
        alert("Enter a mission");
        return;
    }

    let li = document.createElement("li");
    li.textContent = mission;

    // 2. COMPLETE MISSION

    li.onclick = function() {
        li.classList.toggle("completed");
    };

    // 3. DELETE MISSION

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.onclick = function(event) {
        event.stopPropagation();
        li.remove();
        updateCount();
    };

    li.appendChild(deleteButton);
    missionList.appendChild(li);

    missionInput.value = "";

    updateCount();
}

// 4. MISSION COUNTER

function updateCount() {

    let total = missionList.children.length;

    totalCount.textContent = total;
}

// 5. CHANGE BACKGROUND COLOUR

function changeColour() {

    if (document.body.style.backgroundColor == "lightblue") {
        document.body.style.backgroundColor = "lightpink";
    }
    else if (document.body.style.backgroundColor == "lightpink") {
        document.body.style.backgroundColor = "lightyellow";
    }
    else {
        document.body.style.backgroundColor = "lightblue";
    }
}
