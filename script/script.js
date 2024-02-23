// alert("loaded");

const allSeat = document.getElementsByClassName("select-seat-btn");

//seat selection and showing in the cart table
for (const seat of allSeat) {
  seat.addEventListener("click", function (event) {
    const totalSelectedSeatDiv = document.getElementById(
      "total-ticket-selected"
    );

    // update cart and total seat upto four seats
    const chosenSeatNum = getConvertedValue("total-seat-selected");
    const totalSeatNum = getConvertedValue("total-seat-capacity");

    if (chosenSeatNum + 1 > 4) {
      alert("Seat limit crossed");
      return;
    } else {
      document.getElementById("total-seat-selected").innerText =
        chosenSeatNum + 1;
      document.getElementById("total-seat-capacity").innerText =
        totalSeatNum - 1;
      appendChosenSeatDiv();
    }

    // set chosen ticket info on the fly
    function appendChosenSeatDiv() {
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
    }

    // --- call total cost --
    updateTotalCost("total-cost");

    // -- call grand total --
    updateGrandTotal();

    //  --- update bg-color upon selection
    // const px = event.target.classList;
    // px.add("bg-green-300");
    // disable button
    console.log(event.target.parentNode);
    event.target.setAttribute("disabled", false);
    event.target.style.backgroundColor = "limegreen";
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

// === get a value from a class
function getConvertedValue(id) {
  const idValue = parseInt(document.getElementById(id).innerText);
  return idValue;
}
