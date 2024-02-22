// alert("loaded");

const allSeat = document.getElementsByClassName("select-seat");

//seat selection and showing in the cart table
for (const seat of allSeat) {
  seat.addEventListener("click", function (event) {
    const selectedSeatNumbers = document.getElementById(
      "total-ticket-selected"
    ).innerText;

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

    // --- total cost --
    updateTotalCost("total-cost");

    // -- grand total --
    updateGrandTotal();
  });
}

// update total price
function updateTotalCost(value) {
  const totalInitialPrice = getConvertedValue(value);

  const totalFinalPrice = totalInitialPrice + 550;

  document.getElementById("total-cost").innerText = totalFinalPrice;

  return totalFinalPrice;
}

function updateGrandTotal(codeApply) {
  const totalPrice = getConvertedValue("total-cost");
  console.log(totalPrice);
  document.getElementById("grand-total-cost").innerText = totalPrice;

  const couponCode = document.getElementById("have-coupon").value;

  if (totalPrice === 2200 && couponCode === "NEW15") {
    totalPrice = 2200 * 0.85;
  }
  document.getElementById("grand-total-cost").innerText = totalPrice;
}

// === get a value from a class
function getConvertedValue(id) {
  const idValue = parseInt(document.getElementById(id).innerText);
  return idValue;
}
