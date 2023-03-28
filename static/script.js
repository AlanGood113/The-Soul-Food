function openModal() {
    if (cart.length != 0) {
      var modal = document.getElementById('purchaseModal');
      var totalInput = document.getElementById('totalPrice');
      totalInput.innerHTML = document.getElementById('totalBadge').innerHTML;
      var cartList = document.getElementById('loadCart');
      cartList.innerHTML = '';
      for (var i = 0; i < cart.length; i++) {
        cartList.innerHTML += `<div class="item">
                      <span class="price">\$${parseFloat(cart[i][1]) * parseInt(cart[i][2])}</span>
                      <div class="d-flex">
                        <img src="${cart[i][3]}" style="width: 50px; border-radius: 50px; margin-right: 10px;"/>
                        <div>                        <p class="item-name">${cart[i][0]}</p>
                      <p class="item-description roboto">\$${cart[i][1]} x ${cart[i][2]}</p></div>
                        </div>
                      
                    </div>`
      }
      modal.style.display = 'block';
    }
  }
  
  function closeModal() {
    var modal = document.getElementById('purchaseModal');
    modal.style.display = 'none';
  }

  function addToCart() {
    total = 0
    cart = []
    var checkboxes = document.getElementsByClassName('checkbox');
    for (var i in checkboxes) {
      if (checkboxes[i].checked) {
        var dets = checkboxes[i].parentElement.getElementsByClassName('productDetails');
        var price = parseFloat(dets[2].innerHTML.match(/[\d\.]+/))
        var quantity = parseInt(dets[3].value)
        cart.push([dets[1].innerHTML, parseFloat(dets[2].innerHTML.match(/[\d\.]+/)), dets[3].value, dets[0].src])
        total += price * quantity
      }
    }
    console.log(cart)
    totalBadge.innerHTML = '$' + total
  }

  function loadRestaurant() {
    var main = document.getElementById('restaurant-items')
    var meals = [
      ['Crisp Roast Duck', 50, 'meal1.webp'],
      ['Leg of Lamb With Garlic and Rosemary', 70, 'meal2.webp'],
      ['Creamy Leek Soup', 40, 'meal3.webp'],
      ['Empanada Dough', 30, 'meal4.webp'], 
      ['Lemon Curd', 25, 'meal5.webp'], 
      ['Lemony Risotto With Asparagus and Shrimp', 75, 'meal6.webp'], 
      ['Bouillabaisse', 65, 'meal7.webp'], 
      ['Turkey Meatloaf', 55, 'meal8.webp'],
      ['Cha Gio', 25, 'meal9.webp'],
      ['Chicken Marsala', 48, 'meal10.webp'],
      ['Chicken Tagine With Apricots and Almonds', 70, 'meal11.webp'],
      ['Sticky Rice with Mango', 30, 'meal12.webp'],
  ]
    main.innerHTML = ''
    for (let i of meals) {
      main.innerHTML += `
    <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
        <form action="">
          <div class="card h-100 w-100 pb-4">
            <img class="card-img-top productDetails" src="assets/img/restaurant/${i[2]}" width="200" height="200" alt="...">
            <input style="position: absolute; top: 10px; left: 10px;" type="checkbox" class="form-check-input checkbox" onchange="addToCart()">
            <div class="text-center mt-2">
              <h6 id="productName" class="fw-bolder productDetails">${i[0]}</h6>
              <p id="productPrice" class="fw-light price productDetails">$${i[1]}</p>
            </div>
            <div class="justify-content-center d-flex">
              <select id="quantity" class="form-select quantity productDetails roboto" style="width: 40%;" onchange="addToCart()">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    `
    }
  }