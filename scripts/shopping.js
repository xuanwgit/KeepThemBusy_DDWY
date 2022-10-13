var addCartButtons = document.getElementsByClassName("add-cart");
var cartButton = document.getElementById("cart");
var totalItems = 0;
var myCart;

window.addEventListener("load", startUp, false);

function startUp() {
  for (let i = 0; i < addCartButtons.length; i++) {
    addCartButtons[i].addEventListener(
      "click",
      function () {
        addToCart(i);
      },
      false
    );
  }

  if(localStorage.getItem("myCart") !== null)
  {
    myCart = JSON.parse(localStorage.getItem("myCart"));
  }

  if(localStorage.getItem("Total Items") !== null)
  {
    totalItems = JSON.parse(localStorage.getItem("Total Items"));
  }

  updateTotalInCart(totalItems);

  cartButton.addEventListener("click", goToCart());
}

function addToCart(index) {
  myCart = JSON.parse(localStorage.getItem("myCart"));
  totalItems = JSON.parse(localStorage.getItem("Total Items"));

  if (myCart == null) {
    myCart = new Array();
  }
  if (totalItems == null) {
    totalItems = 0;
  }

  let arrayIndex = myCart.findIndex((myCart) => myCart.itemIndex === index);

  if (arrayIndex >= 0) {
    myCart[arrayIndex].quantity++;
  } else {
    let info = {
      itemIndex: index,
      quantity: 1,
    };
    myCart.push(info);
  }
  totalItems++;

  updateTotalInCart(totalItems);

  localStorage.setItem("myCart", JSON.stringify(myCart));
  localStorage.setItem("Total Items", JSON.stringify(totalItems));
}

function updateTotalInCart(total) {
  document.getElementById("cartTotal").innerText = total;
}

function goToCart() {
  if(localStorage.getItem("myCart") !== null)
  {
    myCart = JSON.parse(localStorage.getItem("myCart"));
  }

  if(localStorage.getItem("Total Items") !== null)
  {
    totalItems = JSON.parse(localStorage.getItem("Total Items"));
  }

  updateTotalInCart(totalItems);
  let tempHTML = "";
  let imgLnk = "";
  let title = "";
  let qty = 0;
  let price = 0;
  let subtotal = 0;

  for (let i = 0; i < myCart.length; i++) {
    imgLnk = products[myCart[i].itemIndex].imgLink;
    title = products[myCart[i].itemIndex].name;
    qty = myCart[i].quantity;
    price = products[myCart[i].itemIndex].price;
    subtotal = qty * price;

    tempHTML += `
    <tr id="cartItem${i}">
        <td class = "align-middle">
            <ion-icon name="trash" class="trash" onclick="trashRow(${i})"></ion-icon>
        </td>
        <td class = "align-middle">
            <img src=${imgLnk} alt="${title}" class="img-fluid game-img">
            <b>${title}<b>
        </td>
        <td class = "align-middle">
            <input type="number" min="0" max="10" value="${qty}" class="numberBox" id="quantity${i}" onchange="adjustQty(${i})">  
        </td>
        <td class = "align-middle">
            $${price}
        </td>
        <td id=subtotal${i} class = "align-middle">
            $${subtotal}
        </td>
    </tr> `;
  }
  tempHTML += `<tr>
                    <td colspan="4" class="h4 text-end pe-5">Total <t/d>
                    <td id='total' class="h4"></td>
                </tr>`;
  document.getElementById("productList").innerHTML = tempHTML;
  updateTotalPrice();
}

function adjustQty(qtyID) {
  let qtyElement = document.getElementById("quantity" + qtyID);
  let numberOfProduct = parseInt(qtyElement.value);

  totalItems = totalItems + numberOfProduct - myCart[qtyID].quantity;
  myCart[qtyID].quantity = numberOfProduct;

  let price = parseFloat(products[myCart[qtyID].itemIndex].price);
  let subtotal = numberOfProduct * price;

  updateTotalInCart(totalItems);
  updateTotalPrice();

  document.getElementById("subtotal" + qtyID).innerText = subtotal.toFixed(2);;
  localStorage.setItem("myCart", JSON.stringify(myCart));
  localStorage.setItem("Total Items", JSON.stringify(totalItems));

  if (numberOfProduct === 0) {
    deleteRow(qtyID);
  }
}

function updateTotalPrice() {
  let quantity = 0;
  let price = 0;
  let subtotal = 0;
  let total = 0;

  for (let i = 0; i < myCart.length; i++) {
    quantity = parseInt(myCart[i].quantity);
    price = parseFloat(products[myCart[i].itemIndex].price);
    subtotal = quantity * price;
    total += subtotal;
  }

  document.getElementById("total").innerText = "$" + total.toFixed(2);
}

function deleteRow(rowNb) {
  myCart.splice(rowNb, 1);
  let itemToRemove = document.getElementById("cartItem" + rowNb);
  itemToRemove.remove();
  localStorage.setItem("myCart", JSON.stringify(myCart));
  localStorage.setItem("Total Items", JSON.stringify(totalItems));
  goToCart();
  if (myCart.length === 0) {
    window.location.href = "shop.html";
  }
}

function trashRow(rowNb) {
  let quantity = parseInt(myCart[rowNb].quantity);

  totalItems -= quantity;

  updateTotalInCart(totalItems);
  updateTotalPrice();

  deleteRow(rowNb);
}

/**
 * Validates user data entry
 */
function validateForm() {
  // declare variables
  let selectedProduct = document.querySelector(".cart span");
  //validate if an item is added to shopping cart
  if (selectedProduct.textContent == 0) {
    window.alert("You must add at least one item to the shopping cart!");
    return false;
  } else {
  }
} // end validation

/**
 * Function to proccess the order
 */
function checkOut(language) {
  if (myCart.length !== 0) {
    if (language == "english") {
      alert("Your order is being processed!");
    }
    else{
      alert("Votre commande est en cours!");
    }

    myCart = [];
    localStorage.removeItem("myCart");
    localStorage.setItem("Total Items", JSON.stringify(0));
    window.location.href = "orderConfirmation.html";
  }
}
