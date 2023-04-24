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
    ['Spaghetti with Garlic, Olive Oil, and Chili Flakes', 'Spaghetti w Garlic.jpeg', 'Easy to make | Under 30 mins'],
    ['Sheet Pan Chicken Fajitas', 'Sheet Pan Chicken Fajitas.jpeg', 'Gluten Free'],
    ['Lemon and Herb Roasted Salmon', 'LemonHerbRoastedSalmon.jpeg', 'Protein Packed'],
  ]
  main.innerHTML = ''
  for (let i of meals) {
    main.innerHTML += `
      <div onclick="goToRecipeDetails('${i[0]}')" class="col-xl-4 col-md-6">
      <article>
        <div class="post-img">
          <img src="assets/img/cookbook/${i[1]}" alt="" class="img-fluid">
        </div>
        <h2 class="title">${i[0]}</h2>
        <h6>${i[2]}</h6>
      </article>
    </div>
    `
  }
}

// Function to send data to recipe details page
function goToRecipeDetails(i) {
  sessionStorage.setItem('recipe', i)
  location.href = 'recipe-details.html'
}

// Function to load recipe on Recipe details page
function loadRecipeDetails() {
  var recipeDetails = [
    ['Spaghetti with Garlic, Olive Oil, and Chili Flakes', 'Spaghetti w Garlic.jpeg', 'Easy to make | Under 30 mins', `<h6>Ingredients:</h6>
    &#x2022 1 pound spaghetti
    <br>
    &#x2022 1/2 cup extra-virgin olive oil
    <br>
    &#x2022 10 garlic cloves, thinly sliced
    <br>
    &#x2022 1/2 teaspoon red chili flakes
    <br>
    &#x2022 Salt and pepper, to taste
    <br>
    &#x2022 Grated Parmesan cheese, for serving
    <br>
    <br>
    <h6>Instructions:</h6>
    1. Cook spaghetti according to package directions until al dente.
    <br>
    2. While the spaghetti is cooking, heat the olive oil in a large skillet over medium heat.
    <br>
    3. Add the garlic and chili flakes and cook until the garlic is golden brown, about 2-3 minutes.
    <br>
    4. Drain the spaghetti and add it to the skillet. Toss to coat with the garlic oil.
    <br>
    5. Season with salt and pepper to taste.
    <br>
    6. Serve hot, garnished with grated Parmesan cheese.`, 'https://www.youtube.com/embed/4KIiQdhp2wY'],
    ['Sheet Pan Chicken Fajitas', 'Sheet Pan Chicken Fajitas.jpeg', 'Gluten Free', `
    <h6>Ingredients:</h6>
&#x2022 1 pound boneless, skinless chicken breasts, sliced into strips
<br>
&#x2022 3 bell peppers (red, yellow, and green), sliced into strips
<br>
&#x2022 1 large onion, sliced into strips
<br>
&#x2022 2 tablespoons olive oil
<br>
&#x2022 2 teaspoons chili powder
<br>
&#x2022 1 teaspoon paprika
<br>
&#x2022 1/2 teaspoon garlic powder
<br>
&#x2022 Salt and pepper, to taste
<br>
&#x2022 Flour tortillas, for serving
<br>
&#x2022 Salsa, sour cream, and guacamole, for serving
<br>
<br>
<h6>Instructions:</h6>
1. Preheat oven to 400°F.
<br>
2. In a large bowl, toss together the chicken, peppers, and onion with olive oil, chili powder, paprika, garlic powder, salt, and pepper until everything is evenly coated.
<br>
3. Spread the mixture evenly onto a large baking sheet and bake for 20-25 minutes, or until the chicken is cooked through and the vegetables are tender.
<br>
4. Serve hot with warm tortillas, salsa, sour cream, and guacamole.
    `, 'https://www.youtube.com/embed/BuVVCmrihU8'],
    ['Lemon and Herb Roasted Salmon', 'LemonHerbRoastedSalmon.jpeg', 'Protein Packed', `<h6>Ingredients:</h6>
&#x2022 1 pound salmon fillet
<br>
&#x2022 1 lemon, sliced
<br>
&#x2022 2 tablespoons olive oil
<br>
&#x2022 1 teaspoon dried thyme
<br>
&#x2022 1 teaspoon dried rosemary
<br>
&#x2022 Salt and pepper, to taste
<br>
<br>
<h6>Instructions:</h6>
1. Preheat oven to 400°F.
<br>
2. Place the salmon on a large sheet of aluminum foil.
<br>
3. Drizzle with olive oil and season with thyme, rosemary, salt, and pepper.
<br>
4. Arrange the lemon slices on top of the salmon.
<br>
5. Wrap the foil around the salmon to create a packet.
<br>
6. Place the packet on a baking sheet and bake for 15-20 minutes, or until the salmon is cooked through.
<br>
7. Serve hot, garnished with additional lemon wedges.`, 'https://www.youtube.com/embed/2uYoqclu6so']
  ]
  var recipe = sessionStorage.getItem('recipe')
  var main = document.getElementById('recipe-contents')
  main.innerHTML = ''
  for (let i of recipeDetails) {
    if (i[0] == recipe) {
      main.innerHTML += `
      <div class="post-img">
      <img src="assets/img/cookbook/${i[1]}" alt="" class="img-fluid w-100">
    </div>
  
    <h2 class="title">${i[0]}</h2>
    <br>
    <h5>${i[2]}</h5>
    <hr>
  
    <div class="content">
      <p>${i[3]}</p>
    </div>
    <br>

    <h6>Video Tutorial:</h6>
    <div class="container-fluid">
    <iframe style="width: 100%!important;" height=500 src="${i[4]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    `
    }
  }
}

// Function to load blogs on Blog page
function loadBlog() {
  var main = document.getElementById('blog-items')
  var meals = [
    ['Cedar-Plank Salmon', 'Cedar-Plank Salmon.jpeg', 'Amelia Edwards', 'Oct 31, 2022', 'blog-author-2.jpg'],
    ['Chicken Bacon Ranch Pasta', 'Chicken Bacon Ranch Pasta.jpeg', 'Kyle McDowel', 'Jan 30, 2023', 'blog-author-3.jpg'],
    ['Crab Cakes', 'Crab Cakes.jpeg', 'Jane Doe', 'Feb 20, 2023', 'blog-author-4.jpg'],
    ['Strawberry Cheesecake', 'Strawberry Cheesecake.jpeg', 'John Doe', 'Apr 2, 2023', 'blog-author-5.jpg']
  ]
  main.innerHTML = ''
  for (let i of meals) {
    main.innerHTML += `
      <div onclick="goToBlogDetails('${i[0]}')" class="col-xl-4 col-md-6">
      <article>
        <div class="post-img">
          <img src="assets/img/blog/${i[1]}" alt="" class="img-fluid" style="min-width:100%;height:320px;">
        </div>
        <h2 class="title">${i[0]}</h2>
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
  sessionStorage.setItem('blog', i)
  location.href = 'blog-details.html'
}

// Function to load blog on Blog Details page
function loadBlogDetails() {
  var blogDetails = [
    ['Cedar-Plank Salmon', 'Cedar-Plank Salmon.jpeg', 'Amelia Edwards', 'Oct 31, 2022', 'blog-author-2.jpg', "I recently had the pleasure of trying out a new recipe that I had never attempted before - Cedar-Plank Salmon. I had heard about this cooking method before, but I had never tried it myself. As a lover of salmon, I was excited to give it a try and see how it turned out. The first step was to soak the cedar plank in water for at least an hour, which helps to prevent it from catching on fire while on the grill. While the plank was soaking, I prepared the salmon by seasoning it with salt, pepper, and some lemon juice. Once the plank was ready, I placed the salmon on top of it and set it on the grill. As the salmon cooked, I couldn't help but notice the delicious aroma that was filling the air. The cedar plank imparted a subtle smoky flavor to the fish, and the heat from the grill cooked it to perfection. I also added some asparagus to the grill to serve as a side dish, which helped to balance out the richness of the salmon. When the salmon was done cooking, I carefully removed it from the grill and placed it on a platter. The presentation was beautiful - the salmon was perfectly cooked and had a beautiful pink color, and the asparagus was nicely charred and tender. I garnished the dish with some chopped herbs and a squeeze of lemon juice. When it came time to eat, I couldn't wait to dig in. The salmon was tender and flavorful, with a subtle smoky taste that was truly delicious. The asparagus was the perfect complement, adding a nice crunch and a fresh, bright flavor to the dish. Overall, my experience making Cedar-Plank Salmon was a success."],
    ['Chicken Bacon Ranch Pasta', 'Chicken Bacon Ranch Pasta.jpeg', 'Kyle McDowel', 'Jan 30, 2023', 'blog-author-3.jpg', "This recipe is perfect for a quick and easy weeknight meal that is both delicious and satisfying. The combination of bacon and ranch dressing is a classic flavor pairing that adds a creamy, savory element to the dish, while the chicken adds protein and makes it a well-rounded meal. Plus, it's a great way to use up any leftover chicken or bacon that you may have in your fridge. So the next time you're looking for a tasty pasta recipe to add to your rotation, give this chicken bacon ranch pasta a try - your taste buds will thank you!"],
    ['Crab Cakes', 'Crab Cakes.jpeg', 'Jane Doe', 'Feb 20, 2023', 'blog-author-4.jpg', `As a seafood lover, I have always been intrigued by crab cakes. But for some reason, I had never attempted to make them myself. That is, until recently when I decided to try my hand at this classic dish. In this blog post, I will share my experience making crab cakes for the first time, along with a delicious and easy recipe that I found.

    I started by researching various crab cake recipes online and settled on one that seemed simple and straightforward. The recipe called for fresh lump crab meat, breadcrumbs, mayonnaise, Dijon mustard, Worcestershire sauce, Old Bay seasoning, onion, celery, parsley, egg, and salt and pepper. I purchased all the ingredients and got to work.
    The first step was to pick through the crab meat to remove any shells or cartilage. I found this to be a bit time-consuming, but it was important to ensure that the crab cakes would be free of any unwanted bits.
    Next, I mixed together the breadcrumbs, mayonnaise, Dijon mustard, Worcestershire sauce, Old Bay seasoning, onion, celery, parsley, and egg in a large mixing bowl. Once the mixture was well-combined, I gently folded in the crab meat, being careful not to overmix.
    I then formed the mixture into patties and heated up a skillet with some olive oil. Once the oil was hot, I added the crab cakes to the pan and cooked them for a few minutes on each side until they were golden brown and crispy.
    I served the crab cakes with a side of homemade tartar sauce and a squeeze of fresh lemon juice. The end result was simply delicious! The crab cakes were crispy on the outside and tender on the inside, with a delicate flavor that perfectly complemented the sweet crab meat.
    Tips and Variations:
    * If you prefer a spicier flavor, try adding some chopped jalapenos or red pepper flakes to the crab cake mixture.
    * You can also experiment with different types of crab meat, such as jumbo lump or claw meat, depending on your preference and budget.
    * To make the crab cakes ahead of time, prepare the mixture up to step 5, then cover and refrigerate for up to 24 hours before cooking.
    
    Making crab cakes for the first time was a fun and rewarding experience. I was surprised at how easy the recipe was to follow, and the end result was simply delicious. If you are a seafood lover like me, I highly recommend giving this recipe a try. It's a great way to impress your friends and family at your next dinner party or simply to treat yourself to a delicious and satisfying meal.`],
    ['Strawberry Cheesecake', 'Strawberry Cheesecake.jpeg', 'John Doe', 'Apr 2, 2023', 'blog-author-5.jpg', `As someone with a major sweet tooth, I have always been a fan of cheesecake. Recently, I decided to take my love for this classic dessert to the next level and try making a strawberry cheesecake from scratch. In this blog post, I will share my experience making this delicious and creamy dessert, along with the recipe that I used.

  I started by researching various strawberry cheesecake recipes online and settled on one that seemed easy and straightforward. The recipe called for graham cracker crumbs, sugar, butter, cream cheese, sour cream, eggs, vanilla extract, fresh strawberries, and whipped cream. I purchased all the ingredients and got to work.
  The first step was to make the crust. I combined graham cracker crumbs, sugar, and melted butter in a mixing bowl and then pressed the mixture into the bottom of a springform pan. I pre-baked the crust in the oven for a few minutes and then let it cool while I prepared the filling.
  Next, I made the filling by beating together cream cheese, sugar, and sour cream in a large mixing bowl until the mixture was smooth and creamy. I then added in eggs, one at a time, followed by vanilla extract and pureed strawberries. Once the mixture was well-combined, I poured it into the prepared crust.
  I baked the cheesecake in the oven for about an hour until it was set but still slightly jiggly in the center. I let it cool to room temperature and then placed it in the refrigerator to chill for a few hours.
  Before serving, I topped the cheesecake with whipped cream and fresh strawberries, and it was simply delicious! The crust was crisp and buttery, while the filling was creamy and bursting with fresh strawberry flavor.
  Tips and Variations:
  * If you don't have fresh strawberries, you can use frozen strawberries instead. Just be sure to thaw and drain them before using.
  * To make the cheesecake ahead of time, prepare the crust and filling, but wait to bake until you're ready to serve. The cheesecake will keep in the refrigerator for up to 3 days.
  * You can also experiment with different types of crusts, such as Oreo or chocolate graham cracker, for a fun twist on the classic recipe.
  
  Making a strawberry cheesecake from scratch was a fun and rewarding experience. While it took some time and effort, the end result was well worth it. If you're a fan of cheesecake and strawberries, I highly recommend giving this recipe a try. It's the perfect dessert to impress your friends and family at your next gathering or simply to treat yourself to a sweet and creamy indulgence.`]
  ]
  var blog = sessionStorage.getItem('blog')
  var main = document.getElementById('blog-contents')
  main.innerHTML = ''
  for (let i of blogDetails) {
    if (i[0] == blog) {
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

        function searchDevice() {
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("searchDevice");
            filter = input.value.toUpperCase();
            table = document.getElementById("cookbook-items");
            tr = table.getElementsByTagName("tr");
            for (i = 0; i < tr.length; i++) {
                td1 = tr[i].getElementsByTagName("td")[2];
                td2 = tr[i].getElementsByTagName("td")[3];
                td3 = tr[i].getElementsByTagName("td")[4];
                console.log(td)
                if (td1 || td2 || td3) {
                    txtValue1 = td1.textContent || td1.innerText;
                    txtValue2 = td2.textContent || td2.innerText;
                    txtValue3 = td3.textContent || td3.innerText;
                    if (txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1 || txtValue3.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }