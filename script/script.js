// alert("loaded");

const allSeat = document.getElementsByClassName("select-seat");

for (const seat of allSeat) {
  seat.addEventListener("click", function (event) {
    // console.log(event.target.innerText);

    const selectedSeatNumbers = document.getElementById(
      "total-ticket-selected"
    ).innerText;
    console.log(selectedSeatNumbers);

    const totalSelectedSeatDiv = document.getElementById(
      "total-ticket-selected"
    );

    // const div = document.getElementById("total-ticket-selected");
    // div.classList.add("flex-row");

    const newDiv = document.createElement("div");
    newDiv.classList.add("flex");
    newDiv.classList.add("justify-between");

    const p1 = document.createElement("p");
    p1.innerText = event.target.innerText;

    const p2 = document.createElement("p");
    p2.innerText = "Economy";

    const p3 = document.createElement("p");
    p3.innerText = "550";

    newDiv.appendChild(p1);
    newDiv.appendChild(p2);
    newDiv.appendChild(p3);

    totalSelectedSeatDiv.appendChild(newDiv);
  });
}

// ===
function getConvertedValue(id) {
  const idValue = parseInt(document.getElementById(id).innerText);
  return idValue;
}
