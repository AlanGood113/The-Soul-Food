// Function to open Cart modal on Restaurant page
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

// Function to close Cart modal on Restaurant page
function closeModal() {
  var modal = document.getElementById('purchaseModal');
  modal.style.display = 'none';
}

// Function to add meal to cart on Restaurant page
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

// Function to load meals on Restaurant page
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

// Function to load recipes on Cookbook page
function loadCookbook() {
  var main = document.getElementById('cookbook-items')
  var meals = [
    ['Cedar-Plank Salmon', 'Cedar-Plank Salmon.jpeg', 'Dennis Peterson', 'Jan 30, 2022', 'blog-author-5.jpg'],
  ]
  main.innerHTML = ''
  for (let i of meals) {
    main.innerHTML += `
      <div class="col-xl-4 col-md-6">
      <article onclick="goToBlogDetails(\'${i}\')">

        <div class="post-img">
          <img src="assets/img/blog/${i[1]}" alt="" class="img-fluid">
        </div>
        <h2 class="title">
          <a href="blog-details.html">${i[0]}</a>
        </h2>

        <div class="d-flex align-items-center">
          <img src="assets/img/blog/${i[4]}" alt="" class="img-fluid post-author-img flex-shrink-0">
          <div class="post-meta">
            <p class="post-author-list">${i[2]}</p>
            <p class="post-date">
              <time datetime="2022-01-01">${i[3]}</time>
            </p>
          </div>
        </div>

      </article>
    </div>
    `
  }
}

// Function to load blogs on Blog page
function loadBlog() {
  var main = document.getElementById('blog-items')
  var meals = [
    ['Cedar-Plank Salmon', 'Cedar-Plank Salmon.jpeg', 'Amelia Edwards', 'Oct 31, 2022', 'blog-author-2.jpg'],
    ['Chicken Bacon Ranch Pasta', 'Chicken Bacon Ranch Pasta.jpeg', 'Dennis Peterson', 'Jan 30, 2023', 'blog-author-3.jpg'],
  ]
  main.innerHTML = ''
  for (let i of meals) {
    main.innerHTML += `
      <div class="col-xl-4 col-md-6">
      <article onclick="goToBlogDetails('${i[0]}')">

        <div class="post-img">
          <img src="assets/img/blog/${i[1]}" alt="" class="img-fluid">
        </div>
        <h2 class="title">
          <a href="blog-details.html">${i[0]}</a>
        </h2>

        <div class="d-flex align-items-center">
          <img src="assets/img/blog/${i[4]}" alt="" class="img-fluid post-author-img flex-shrink-0">
          <div class="post-meta">
            <p class="post-author-list">${i[2]}</p>
            <p class="post-date">
              <time datetime="2022-01-01">${i[3]}</time>
            </p>
          </div>
        </div>

      </article>
    </div>
    `
  }
}

// Function to send data to blog details page
function goToBlogDetails(i) {
  sessionStorage.setItem('meal', i)
  location.replace('blog-details.html')
}

// Function to load blog on Blog Details page
function loadBlogDetails() {
  var blogDetails = [
    ['Cedar-Plank Salmon', 'Cedar-Plank Salmon.jpeg', 'Amelia Edwards', 'Oct 31, 2022', 'blog-author-2.jpg', "I recently had the pleasure of trying out a new recipe that I had never attempted before - Cedar-Plank Salmon. I had heard about this cooking method before, but I had never tried it myself. As a lover of salmon, I was excited to give it a try and see how it turned out. The first step was to soak the cedar plank in water for at least an hour, which helps to prevent it from catching on fire while on the grill. While the plank was soaking, I prepared the salmon by seasoning it with salt, pepper, and some lemon juice. Once the plank was ready, I placed the salmon on top of it and set it on the grill. As the salmon cooked, I couldn't help but notice the delicious aroma that was filling the air. The cedar plank imparted a subtle smoky flavor to the fish, and the heat from the grill cooked it to perfection. I also added some asparagus to the grill to serve as a side dish, which helped to balance out the richness of the salmon. When the salmon was done cooking, I carefully removed it from the grill and placed it on a platter. The presentation was beautiful - the salmon was perfectly cooked and had a beautiful pink color, and the asparagus was nicely charred and tender. I garnished the dish with some chopped herbs and a squeeze of lemon juice. When it came time to eat, I couldn't wait to dig in. The salmon was tender and flavorful, with a subtle smoky taste that was truly delicious. The asparagus was the perfect complement, adding a nice crunch and a fresh, bright flavor to the dish. Overall, my experience making Cedar-Plank Salmon was a success."], 
    ['Chicken Bacon Ranch Pasta', 'Chicken Bacon Ranch Pasta.jpeg', 'Dennis Peterson', 'Jan 30, 2023', 'blog-author-3.jpg',"This recipe is perfect for a quick and easy weeknight meal that is both delicious and satisfying. The combination of bacon and ranch dressing is a classic flavor pairing that adds a creamy, savory element to the dish, while the chicken adds protein and makes it a well-rounded meal. Plus, it's a great way to use up any leftover chicken or bacon that you may have in your fridge. So the next time you're looking for a tasty pasta recipe to add to your rotation, give this chicken bacon ranch pasta a try - your taste buds will thank you!"],
  ]
  var meal = sessionStorage.getItem('meal')
  var main = document.getElementById('blog-contents')
  main.innerHTML = ''
  for (let i of blogDetails) {
    if (i[0] == meal) {
      main.innerHTML += `
      <div class="post-img">
      <img src="assets/img/blog/${i[1]}" alt="" class="img-fluid w-100">
    </div>
  
    <h2 class="title">${i[0]}</h2>
  
    <div class="content">
      <p>${i[5]}</p>
    </div>
    `
    }
  }
}