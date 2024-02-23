// alert("loaded");

const allSeat = document.getElementsByClassName("select-seat");

//seat selection and showing in the cart table
for (const seat of allSeat) {
  seat.addEventListener("click", function (event) {
    // let number = 4;

    const totalSelectedSeatDiv = document.getElementById(
      "total-ticket-selected"
    );

    // set chosen ticket info on the fly
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

    // --- call total cost --
    updateTotalCost("total-cost");

    // -- call grand total --
    updateGrandTotal();

    // call update seat num in the cart
    updateSeatNumbers();

    //  --- update bg-color upon selection
    const px = event.target.classList;
    console.log(px);
    px.add("bg-green-300");
  });
}

// update total price
function updateTotalCost(value) {
  const totalInitialPrice = getConvertedValue(value);

  const totalFinalPrice = totalInitialPrice + 550;

  document.getElementById("total-cost").innerText = totalFinalPrice;

  return totalFinalPrice;
}

// -- coupon code || update grand total --
function updateGrandTotal(codeApply) {
  let totalPrice = getConvertedValue("total-cost");

  const couponCode = document.getElementById("coupon-code").value;

  if (totalPrice === 2200 && couponCode === "NEW15") {
    totalPrice = 2200 * 0.85;
    document.getElementById("grand-total-cost").innerText = totalPrice;
  }

  if (totalPrice === 1100 && couponCode === "Couple 20") {
    totalPrice = 1100 * 0.8;
    document.getElementById("grand-total-cost").innerText = totalPrice;
  }

  document.getElementById("grand-total-cost").innerText = totalPrice;
}

// update cart seat num in cart
function updateSeatNumbers() {
  let chosenSeatNum = getConvertedValue("total-seat-selected");
  chosenSeatNum = chosenSeatNum + 1;
  // console.log(chosenSeatNum);
  document.getElementById("total-seat-selected").innerText = chosenSeatNum;

  let totalSeatNum = getConvertedValue("total-seat-capacity");

  totalSeatNum = 8 - chosenSeatNum;
  document.getElementById("total-seat-capacity").innerText = totalSeatNum;
}

// === get a value from a class
function getConvertedValue(id) {
  const idValue = parseInt(document.getElementById(id).innerText);
  return idValue;
}
