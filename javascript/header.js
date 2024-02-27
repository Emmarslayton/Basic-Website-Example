const template = document.createElement('template')

template.innerHTML=`
<header>
<div class="headerlayout">
  <div class="leftcoffeebean"><img src="../images/coffeebean_2.png" alt="Coffee Beans" width="250 px" height="150px"></div>
  <div class="centerlogo"><a href="../html/homepage.html"><img src="../images/press+pour.png" alt="PRESS + POUR coffeehouse" width="300" height="150"></a></div>
  <div class="rightcoffeebean"><img src="../images/coffeebean_1.png" alt="Coffee Beans" width="250px" height="150px"></div>
</div>
<nav>
  <ul>
    <li><a href="../html/about.html">About Us</a></li>
    <li><a href="../html/menu.html">Menu</a></li>
    <li><div class="dropdown">  
        <a href="../html/shop.html"> SHOP</a>
        <div class="dropdown-content">  
        <a href="../html/shop-coffee.html"> Coffee Beans </a>  
        <a href="../html/shop-mugs.html"> Mugs </a>  
        <a href="../html/shop-apparel.html"> Apparel </a>  
        </div>  
      </div>  </li>
    <li><a href="../html/contact.html">Contact Us</a></li>
    <li><a href="../html/cart.html"><img src="../images/cart.png" alt="CheckOut logo" width="25" height="25"></a></li>
  </ul>
</nav>
</header>
`

document.body.appendChild(template.content)