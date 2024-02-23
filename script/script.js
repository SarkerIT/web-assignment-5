// alert("loaded");

// get the apply-coupon code button disabled
const codeButton = document.getElementById("code-apply");
codeButton.disabled = true;

const nextButton = document.getElementById("next-btn");
nextButton.disabled = true;

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

    updateGrandTotal("grand-total");

    //  --- update bg-color upon selection
    // const px = event.target.classList;
    // px.add("bg-green-300");
    // disable button
    // console.log(event.target.parentNode);
    event.target.setAttribute("disabled", false);
    event.target.style.backgroundColor = "limegreen";

    // get the Butttons enabled
    if (getConvertedValue("total-seat-selected") > 0) {
      codeButton.disabled = false;
    }

    const phone = document.getElementById("phone").value;
    console.log(phone);
    if (
      getConvertedValue("total-seat-selected") > 0 &&
      document.getElementById("phone").addEventListener("mouseup").value
        .length > 0
    ) {
      nextButton.disabled = false;
    }
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

  document.getElementById("grand-total-cost").innerText = totalPrice;
}

// Coupon code activate on click the button
function codeApply() {
  const couponCode = document.getElementById("coupon-code").value;
  let totalPrice = getConvertedValue("total-cost");
  if (couponCode === "NEW15") {
    totalPrice = totalPrice * 0.85;
    document.getElementById("grand-total-cost").innerText = totalPrice;
    hideCouponDiv();
  } else if (couponCode === "Couple 20") {
    totalPrice = totalPrice * 0.8;
    document.getElementById("grand-total-cost").innerText = totalPrice;
    hideCouponDiv();
  } else {
    alert("Please Enter a valid code");
  }
}

// grand total div hiding
function hideCouponDiv() {
  const couponDiv = document.getElementById("coupon-code-div").classList;
  couponDiv.add("hidden");

  const grandTotalDiv = document.getElementById("grand-total").classList;
  grandTotalDiv.add("bg-blue-100");
  grandTotalDiv.add("rounded-lg");
  grandTotalDiv.add("p-4");
  grandTotalDiv.add("text-xl");
}

// === get a value from a class
function getConvertedValue(id) {
  const idValue = parseInt(document.getElementById(id).innerText);
  return idValue;
}
