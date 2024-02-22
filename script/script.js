// alert("loaded");

// ==
// let totalSeatingCapacity = getConvertedValue("total-seat-capacity");
// let singleTicketPrice = getConvertedValue("per-ticket-price");
// let totalTicketSelected = getConvertedValue("total-ticket-selected");

const allSeat = document.getElementsByClassName("select-seat");

for (const seat of allSeat) {
  seat.addEventListener("click", function (event) {
    // console.log(event.target.innerText);

    const selectedSeatNumbers = document.getElementById(
      "total-ticket-selected"
    ).innerText;

    const totalSelectedSeatDiv = document.getElementById("seat-cart-list");

    const div = document.createElement("div");

    const p1 = document.createElement("p");
    p1.innerText = event.target.innerText;

    const p2 = document.createElement("p");
    p2.innerText = "Economy";

    const p3 = document.createElement("p");
    p3.innerText = "550";

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    totalSelectedSeatDiv.appendChild(div);
  });
}

// ===
function getConvertedValue(id) {
  const idValue = parseInt(document.getElementById(id).innerText);
  return idValue;
}
