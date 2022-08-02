let products = JSON.parse(localStorage.getItem("products"));
let productList = document.querySelector("#tbody");
let basketCount = document.querySelector("#shopping-count");
function updateBasketCount() {
  let products = JSON.parse(localStorage.getItem("products"));
  basketCount.innerText = products.length;
}

function showProdact() {
  let products = JSON.parse(localStorage.getItem("products"));
  if (products.length === 0) {
    document.querySelector(".full-basket").classList.add("d-none");
    document.querySelector(".empty-basket").classList.remove("d-none");
  } else {
    document.querySelector(".full-basket").classList.remove("d-none");
    document.querySelector(".empty-basket").classList.add("d-none");
  }
}
function updateTotalCount() {
  let totalPrice = 0;
  products.forEach((product) => {
    totalPrice += +product.price * product.count;
  });
  document.querySelector(".sumPrice").innerText = totalPrice;
  document.querySelector(".totalPrice").innerText = totalPrice;
  showProdact();
  updateBasketCount();
}
updateTotalCount();
function removeProduct(el, productId) {
  let productIndex = products.findIndex((p) => p.id == productId);
  products.splice(productIndex, 1);
  localStorage.setItem("products", JSON.stringify(products));
  el.parentElement.parentElement.parentElement.remove();
  updateTotalCount();
}

function updateProductQuantity(el, productPrice, quantity, productId) {
  let productInp = el.parentElement.querySelector(".product-quantity");
  let productQuantity = +productInp.value;
  let parent = el.closest("tr");
  let totalPrice = parent.querySelector(".total-price");
  
  let newQuantity = quantity == -1 ? productQuantity - 1 : productQuantity + 1;

  if (newQuantity >0) {  
    productInp.value = newQuantity; 
  }else{
    newQuantity=1;
  }


  totalPrice.innerText = `${productPrice * newQuantity} AZN`;

  let product = products.find((p) => p.id == productId);
  product.count = newQuantity;
  localStorage.setItem("products", JSON.stringify(products));
  updateTotalCount();
}

products.forEach((product) => {
  productList.innerHTML += `
          <tr>
              <td>
                  <button id="rmvbtn"
                  onclick="removeProduct(event.target, ${product.id})">
                  <i class="fa-solid fa-trash-can"></i>
                  </button>
              </td>
              <td>
                  <img src="${product.image}"/>
              </td>
              <td>${product.title}</td>
              <td>${product.price} <span>AZN</span></td>
              <td>
              <div class="qualty-chance d-flex align-items-center">
                  <div class="quality-minus"
                  onclick="updateProductQuantity(event.target, ${product.price}, -1, ${product.id})"
                  >-</div>

                  <input
                    type="number"
                    min="1"
                    class="product-quantity"
                    value="${product.count}"
                  >

                  <div class="quality-plus"
                  onclick="updateProductQuantity(event.target, ${ product.price}, 1, ${product.id})"
                  >+</div>                                                                           
              </div>
            </td>
              <td>
               <span class="total-price">
                   ${product.price * product.count} AZN
                 </span>
              </td>
             
          </tr>
      `;
});
